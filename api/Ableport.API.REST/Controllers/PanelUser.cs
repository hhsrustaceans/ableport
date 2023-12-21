using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Namotion.Reflection;

namespace Ableport.API.REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PanelUserController : ControllerBase
    {
        private readonly AbleportContext _context;

        public PanelUserController(AbleportContext context)
        {
            _context = context;
        }

        // GET: api/user/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<AbleportUser>> GetUser(string id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/user
        [HttpPost]
        public async Task<ActionResult<AbleportUser>> CreateUser(AbleportUser user)
        {
            // Insert default data if not included
            if (user.PanelUserData == null)
            {
                var defaultUserData = new PanelUserData()
                {
                    UserId = user.Id,
                    AllowCommercialPanels = false,
                    ContactPreference = "No contact",
                };
                user.PanelUserData = defaultUserData;
            }
            
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/user/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserData(string id, PanelUserData data)
        {
            if (id != data.UserId) return BadRequest("User IDs do not match");

            _context.Entry(data).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                // Error code if entry cannot be found
                const int notFound = -2146233088;
                if (e.HResult == notFound) return NotFound();
                // Throw for different errors
                throw;
            }

            return NoContent();
        }

        // DELETE: api/user/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var user = await _context.Users.FindAsync(id);
            var hasPanelData = _context.Users.Where(d => d.Id == id)
                .Any(u => u.PanelUserData != null);
            
            if (user == null) return NotFound();
            if (!hasPanelData) return BadRequest("Not a PanelUser");
            
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
