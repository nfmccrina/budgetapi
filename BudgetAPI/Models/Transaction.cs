using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetAPI.Models
{
    public class Transaction
    {
        public int TransactionID { get; set; }
        public int AmountInCents { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int CategoryID { get; set; }
    }
}
