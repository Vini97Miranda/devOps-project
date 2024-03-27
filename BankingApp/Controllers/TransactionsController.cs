//jon gouspy 74538
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;
using BankingApp.Models;

namespace BankingApp.Controllers
{
    public class TransactionsController : Controller
    {
        private DBModels db = new DBModels();

        // GET: Transactions
        public ActionResult Index(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Account account = db.Accounts.Where(x => x.Id == (int)id).FirstOrDefault();
            if (account == null)
            {
                return HttpNotFound();
            }
            var transactions = db.Transactions.Where(x => x.Account.Id == id || x.Account1.Id == id);
            ViewBag.AccountId = id;
            return View(transactions.ToList());
        }

        // GET: Transactions/Create
        public ActionResult Create(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Account account = db.Accounts.Where(x => x.Id == (int)id).FirstOrDefault();
            if (account == null)
            {
                return HttpNotFound();
            }
            ViewBag.SourceAccount = account.User.AccountNumber;
            ViewBag.DestinationAccountList = new SelectList(db.Users.Where(x => x.AccountNumber != account.User.AccountNumber && x.UserType != (byte)Models.User.EUserType.Administrator), "Id", "AccountNumber");
            return View();
        }

        // POST: Transactions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,SourceAccountId,DestinationAccountId,Amount,TransactionDate,TransactionType")] Transaction transaction)
        {
            transaction.TransactionDate = DateTime.Now;
            Account a1 = db.Accounts.Where(x => x.Id == transaction.Id).FirstOrDefault();
            Account a = db.Accounts.Where(x => x.Id == transaction.DestinationAccountId).FirstOrDefault();
            transaction.Account1 = a1;
            transaction.Account = a;
            transaction.SourceAccountId = transaction.Id;
            transaction.DestinationAccountId = transaction.Account.Id;

            if (ModelState.IsValid && transaction.Amount  > 0f && transaction.Amount <= a1.Balance)
            {
                a1.Balance -= transaction.Amount;
                a.Balance += transaction.Amount;
                db.Entry(a1).State = EntityState.Modified;
                db.Entry(a).State = EntityState.Modified;
                db.Transactions.Add(transaction);
                db.SaveChanges();
            }

            return RedirectToAction("Index", new { id = transaction.SourceAccountId });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
