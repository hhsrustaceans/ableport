using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Ableport.API.REST.DataModel
{
    public class AbleportContext : IdentityDbContext<AbleportUser, AbleportRole, int>
    {
        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Panel> Panels { get; set; }

        public AbleportContext(DbContextOptions<AbleportContext> options) : base(options) // Calls constructor of base class
        {

        }
    }

    // Stores all account data and is used throughout Ableport (Email, password, etc.)
    public class AbleportUser : IdentityUser<int>
    {
        [Key]
        [PersonalData] 
        public override int Id { get; set; } 
        [PersonalData]
        [MaxLength(35)]
        public string? FirstName { get; set; }
        [PersonalData]
        [MaxLength(35)]
        public string? LastName { get; set; }
        [PersonalData]
        public DateTime DOB { get; set; }
        public PanelUserData? PanelUserData { get; set; }
        public OrgUserdata? OrgUserdata { get; set; }
        public AdminUserdata? AdminUserdata { get; set; }
        
    }
    
    public class AbleportRole : IdentityRole<int>
    {
    }

    // Stores preferences for panel users
    public class PanelUserData
    {
        [Key]
        public required int UserId { get; set; }
        [MaxLength(35)]
        public required string ContactPreference { get; set; }
        public bool AllowCommercialPanels { get; set; }
        public Guardian? Guardian { get; set; }
    }

    // Stores guardian (Parent/caretaker) information
    public class Guardian
    {
        [Key]
        public required int UserId { get; set; }
        [MaxLength(35)]
        [PersonalData]
        public required string Name { get; set; }
        [MaxLength(254)]
        [PersonalData]
        public required string Email { get; set; }
    }

    // Stores preferences for organisations
    public class OrgUserdata
    {
        [Key]
        public required int UserId { get; set; }
        [MaxLength(10)]
        public required string ContactPreference { get; set; }
    }

    // Stores preferences for admin users
    public class AdminUserdata
    {
        [Key]
        public required int UserId { get; set; }
        [MaxLength(10)]
        public required string ContactPreference { get; set; }
    }

    // Stores all organisation data
    public class Organisation
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(10)]
        public required string Type { get; set; }
        [MaxLength(30)]
        public required string Name { get; set; }
        [MaxLength(1000)]
        public required string Description { get; set; }
        [MaxLength(20)]
        public string? Logo { get; set; }
        [MaxLength(35)]
        public string? Website { get; set; }
        [MaxLength(15)]
        public string? PhoneNumber { get; set; }
    }

    // Stores organization-wide preferences
    public class OrgPreferences
    {
        [Key]
        public required Organisation Organisation { get; set; }
        public bool AllowChat { get; set; }
    }

    // Stores all panel data
    public class Panel
    {
        [Key]
        public int Id { get; set; }
        public required Organisation Organisation { get; set; }
        [MaxLength(60)]
        public required string Title { get; set; }
        [MaxLength(300)]
        public required string Description { get; set; }
        [MaxLength(1000)]
        public required string Content {  get; set; }
        public TimeSpan ActivePeriod { get; set; }
        [MaxLength(80)]
        public required string Location { get; set; }
        [MaxLength(8)]
        public required List<string> Reward {  get; set; }
        [MaxLength(10)]
        public required string StudyType { get; set; }
    }
}