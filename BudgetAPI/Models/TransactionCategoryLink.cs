using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetAPI.Models
{
    public class TransactionCategoryLink
    {
        public int TransactionCategoryLinkID { get; set; }
        public int TransactionID { get; set; }
        public int CategoryID { get; set; }
    }
}
