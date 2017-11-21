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
    [Route("api/BudgetAllocations")]
    public class BudgetAllocationsController : Controller
    {
        private readonly BudgetContext _context;

        public BudgetAllocationsController(BudgetContext context)
        {
            _context = context;
        }

        // GET: api/BudgetAllocations
        [HttpGet]
        public IEnumerable<BudgetAllocation> GetBudgetAllocations()
        {
            return _context.BudgetAllocations;
        }

        // GET: api/BudgetAllocations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBudgetAllocation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budgetAllocation = await _context.BudgetAllocations.SingleOrDefaultAsync(m => m.BudgetAllocationID == id);

            if (budgetAllocation == null)
            {
                return NotFound();
            }

            return Ok(budgetAllocation);
        }

        // PUT: api/BudgetAllocations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBudgetAllocation([FromRoute] int id, [FromBody] BudgetAllocation budgetAllocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != budgetAllocation.BudgetAllocationID)
            {
                return BadRequest();
            }

            _context.Entry(budgetAllocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BudgetAllocationExists(id))
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

        // POST: api/BudgetAllocations
        [HttpPost]
        public async Task<IActionResult> PostBudgetAllocation([FromBody] BudgetAllocation budgetAllocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.BudgetAllocations.Add(budgetAllocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBudgetAllocation", new { id = budgetAllocation.BudgetAllocationID }, budgetAllocation);
        }

        // DELETE: api/BudgetAllocations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBudgetAllocation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budgetAllocation = await _context.BudgetAllocations.SingleOrDefaultAsync(m => m.BudgetAllocationID == id);
            if (budgetAllocation == null)
            {
                return NotFound();
            }

            _context.BudgetAllocations.Remove(budgetAllocation);
            await _context.SaveChangesAsync();

            return Ok(budgetAllocation);
        }

        private bool BudgetAllocationExists(int id)
        {
            return _context.BudgetAllocations.Any(e => e.BudgetAllocationID == id);
        }
    }
}