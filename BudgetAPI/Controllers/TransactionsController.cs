using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BudgetAPI.Models;

namespace BudgetAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Transactions")]
    public class TransactionsController : Controller
    {
        private readonly BudgetContext _context;

        public TransactionsController(BudgetContext context)
        {
            _context = context;
        }

        // GET: api/Transactions
        [HttpGet]
        public IEnumerable<ConsumableTransaction> GetTransactions(int userid)
        {
            var transactions = _context.Transactions
                .Where(t => userid == 0 || t.UserID == userid).ToList();
            
            return transactions
                .Select((transaction) => new ConsumableTransaction()
                {
                    TransactionID = transaction.TransactionID,
                    AmountInCents = transaction.AmountInCents,
                    Date = transaction.Date,
                    Description = transaction.Description,
                    UserID = transaction.UserID,
                    CategoryID = GetCategoryIDForTransaction(transaction.TransactionID)
                });
        }

        // GET: api/Transactions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTransaction([FromRoute] int id)
        {
            ConsumableTransaction returnedTransaction;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = await _context.Transactions.SingleOrDefaultAsync(m => m.TransactionID == id);

            if (transaction == null)
            {
                return NotFound();
            }

            var transactionCategoryLink = await _context.TransactionCategoryLinks.SingleOrDefaultAsync(m => m.TransactionID == id);

            returnedTransaction = new ConsumableTransaction()
            {
                TransactionID = transaction.TransactionID,
                AmountInCents = transaction.AmountInCents,
                Date = transaction.Date,
                Description = transaction.Description,
                UserID = transaction.UserID,
                CategoryID = GetCategoryIDForTransaction(transaction.TransactionID)
            };

            return Ok(returnedTransaction);
        }

        // PUT: api/Transactions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransaction([FromRoute] int id, [FromBody] ConsumableTransaction actualTransaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = new Transaction()
            {
                TransactionID = actualTransaction.TransactionID,
                AmountInCents = actualTransaction.AmountInCents,
                Date = actualTransaction.Date,
                Description = actualTransaction.Description,
                UserID = actualTransaction.UserID
            };

            if (id != transaction.TransactionID)
            {
                return BadRequest();
            }

            var transactionCategoryLink = _context.TransactionCategoryLinks.FirstOrDefault(tcl => tcl.TransactionID == id);

            if (transactionCategoryLink == null && actualTransaction.CategoryID != 0)
            {
                _context.TransactionCategoryLinks.Add(new TransactionCategoryLink()
                {
                    TransactionID = id,
                    CategoryID = actualTransaction.CategoryID
                });
            }
            else if (transactionCategoryLink != null && actualTransaction.CategoryID == 0)
            {
                _context.Entry(transactionCategoryLink).State = EntityState.Deleted;
            }
            else
            {
                transactionCategoryLink.CategoryID = actualTransaction.CategoryID;
                _context.Entry(transactionCategoryLink).State = EntityState.Modified;
            }

            _context.Entry(transaction).State = EntityState.Modified;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Transactions
        [HttpPost]
        public async Task<IActionResult> PostTransaction([FromBody] ConsumableTransaction consumableTransaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = new Transaction()
            {
                AmountInCents = consumableTransaction.AmountInCents,
                Date = consumableTransaction.Date,
                Description = consumableTransaction.Description,
                UserID = consumableTransaction.UserID
            };

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            if (consumableTransaction.CategoryID != 0)
            {
                _context.TransactionCategoryLinks.Add(new TransactionCategoryLink()
                {
                    TransactionID = transaction.TransactionID,
                    CategoryID = consumableTransaction.CategoryID
                });
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransaction", new { id = transaction.TransactionID }, new ConsumableTransaction()
            {
                TransactionID = transaction.TransactionID,
                AmountInCents = transaction.AmountInCents,
                Date = transaction.Date,
                Description = transaction.Description,
                CategoryID = consumableTransaction.CategoryID,
                UserID = transaction.UserID
            });
        }

        // DELETE: api/Transactions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = await _context.Transactions.SingleOrDefaultAsync(m => m.TransactionID == id);

            if (transaction == null)
            {
                return NotFound();
            }

            var transactionCategoryLink = await _context.TransactionCategoryLinks.SingleOrDefaultAsync(m => m.TransactionID == id);

            if (transactionCategoryLink != null)
            {
                _context.TransactionCategoryLinks.Remove(transactionCategoryLink);
            }

            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();

            return Ok(transaction);
        }

        private bool TransactionExists(int id)
        {
            return _context.Transactions.Any(e => e.TransactionID == id);
        }

        private int GetCategoryIDForTransaction(int transactionID)
        {
            int result;

            if (_context.TransactionCategoryLinks.Any(tcl => tcl.TransactionID == transactionID))
            {
                result = _context.TransactionCategoryLinks
                    .Where(tcl => tcl.TransactionID == transactionID)
                    .First().CategoryID;
            }
            else
            {
                result = 0;
            }

            return result;
        }
    }
}