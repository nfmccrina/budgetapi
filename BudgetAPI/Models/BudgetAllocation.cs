using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetAPI.Models
{
    public class BudgetAllocation
    {
        public int BudgetAllocationID { get; set; }
        public int AllocatedAmountInCents { get; set; }
        public int CategoryID { get; set; }
        public int BudgetID { get; set; }
    }
}
