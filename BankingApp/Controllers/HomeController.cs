//jon gouspy 74538
using BankingApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace BankingApp.Controllers
{
    public class HomeController : Controller
    {
        private DBModels db = new DBModels();

        // GET: Home
        public ActionResult Index(int id)
        {
            User user = db.Users.Where(x => x.Id == id).FirstOrDefault();
            ViewBag.UserName = user.FirstName;
            return View(user);
        }
    }
}