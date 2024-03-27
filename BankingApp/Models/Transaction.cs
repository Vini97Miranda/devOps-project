//jon gouspy 74538

namespace BankingApp.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    public partial class Transaction
    {
        public int Id { get; set; }
        [DisplayName("Source Account Id")]
        public int SourceAccountId { get; set; }
        [DisplayName("Destination Account Id")]
        public int DestinationAccountId { get; set; }
        public double Amount { get; set; }
        [DisplayName("Transaction Date")]
        public System.DateTime TransactionDate { get; set; }
        [DisplayName("Transaction Type")]
        public byte TransactionType { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual Account Account1 { get; set; }

        public enum ETransactionType
        {
            Withdraw,
            Lodgement
        }
    }
}
