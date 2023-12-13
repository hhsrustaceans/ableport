using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Ableport.API.Lib.DataModel
{
    public class AbleportContext : IdentityDbContext<AbleportUser>
    {
        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Panel> Panels { get; set; }
        public DbSet<PanelUserdata> PanelUserdata { get; set; }
        public DbSet<OrgUserdata> OrgUserdata { get; set; }
        public DbSet<AdminUserdata> PanelUserData { get; set; }

        public AbleportContext(DbContextOptions<AbleportContext> options) : base(options) // Calls constructor of base class
        {

        }
    }

    // Stores all account data and is used throughout Ableport (Email, password, etc.)
    public class AbleportUser : IdentityUser
    {
        [PersonalData]
        [MaxLength(35)]
        public string? FirstName { get; set; }
        [PersonalData]
        [MaxLength(35)]
        public string? LastName { get; set; }
        [PersonalData]
        public DateTime DOB { get; set; }
    }

    // Stores preferences for panel users
    public class PanelUserdata
    {
        [Key]
        public AbleportUser UserId { get; set; }
        public string ContactPreference { get; set; }
        public bool AllowCommercialPanels { get; set; }
        public Guardian? guardian { get; set; }
    }

    // Stores guardian (Parent/caretaker) information
    public class Guardian
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(35)]
        public string Name { get; set; }
        [MaxLength(254)]
        public string Email { get; set; }
    }

    // Stores preferences for organisations
    public class OrgUserdata
    {
        [Key]
        public AbleportUser UserId { get; set; }
        [MaxLength(10)]
        public string ContactPreference { get; set; }
        public bool AllowChat { get; set; }
    }

    // Stores preferences for admin users
    public class AdminUserdata
    {
        [Key]
        public AbleportUser UserId { get; set; }
        [MaxLength(10)]
        public string ContactPreference { get; set; }
    }

    // Stores all organisation data
    public class Organisation
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(10)]
        public string Type { get; set; }
        [MaxLength(30)]
        public string Name { get; set; }
        [MaxLength(1000)]
        public string Description { get; set; }
        [MaxLength(20)]
        public string Logo { get; set; }
        [MaxLength(35)]
        public string? Website { get; set; }
        [MaxLength(15)]
        public string PhoneNumber { get; set; }
    }

    // Stores all panel data
    public class Panel
    {
        [Key]
        public int Id { get; set; }
        public Organisation Organisation { get; set; }
        [MaxLength(60)]
        public string Title { get; set; }
        [MaxLength(300)]
        public string Description { get; set; }
        [MaxLength(1000)]
        public string Content {  get; set; }
        public DateTime StartDate { get; set; }
        public string Location { get; set; }
        [MaxLength(30)]
        public string Reward {  get; set; }
        [MaxLength(10)]
        public string StudyType { get; set; }
    }
}