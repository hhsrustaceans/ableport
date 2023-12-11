using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ableport.API.Lib.DataModel
{
    public class AbleportContext : IdentityDbContext<AbleportUser>
    {
        public DbSet<AbleportUser> Users { get; set; }
        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Panel> Panels { get; set; }


        public AbleportContext(DbContextOptions<AbleportContext> options) : base(options) // Calls constructor of base class
        {

        }


    }

    public class AbleportUser : IdentityUser
    {
        [PersonalData]
        public string? FirstName { get; set; }
        [PersonalData]
        public string? LastName { get; set; }
        [PersonalData]
        public DateTime DOB { get; set; }
    }

    public class Organisation
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Logo { get; set; }
        public string? Website { get; set; }
        public string PhoneNumber { get; set; }
    }

    public class Panel
    {
        public Organisation Organisation { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }
        public string Content {  get; set; }
        public DateTime StartDate { get; set; }
        public string Location { get; set; }
        public string Reward {  get; set; }
        public string StudyType { get; set; }
    }
}