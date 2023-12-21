using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var configuration = builder.Configuration;

// Add services to the container.
// Authorization
services.AddAuthorization();

// Configure identity database access via EF Core.
services.AddDbContext<AbleportContext>(
    options => options.UseInMemoryDatabase("AppDb"));

services.Configure<IdentityOptions>(options =>
{
    // Password settings.
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;

    // Lockout settings.
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    // User settings.
    options.User.AllowedUserNameCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
    options.User.RequireUniqueEmail = false;
});

// TODO Sets up DB connection in production
//var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//builder.Services.AddDbContext<AbleportContext>(options =>
//    options.UseSqlServer(connectionString));

// Activate identity APIs. By default, both cookies and proprietary tokens
// are activated. Cookies will be issued based on the `useCookies` querystring
// parameter in the login endpoint.
services.AddIdentityApiEndpoints<AbleportUser>()
    .AddRoles<AbleportRole>()
    .AddEntityFrameworkStores<AbleportContext>();

services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

    options.LoginPath = "/auth/login";
    options.AccessDeniedPath = "/auth/denied";
    options.SlidingExpiration = true;
});

services.AddEndpointsApiExplorer();
services.AddOpenApiDocument();

services.AddAuthentication().AddMicrosoftAccount(microsoftOptions =>
{
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientId" "ID"
    microsoftOptions.ClientId = configuration["Authentication:Microsoft:ClientId"] ?? throw new ArgumentNullException("Authentication:Microsoft:ClientId");
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientSecret" "SECRET"
    microsoftOptions.ClientSecret = configuration["Authentication:Microsoft:ClientSecret"] ?? throw new ArgumentNullException("Authentication:Microsoft:ClientSecret");
}).AddGoogle(googleOptions => {
    // Use dotnet user-secrets set "Authentication:Google:ClientId" "ID"
    googleOptions.ClientId = configuration["Authentication:Google:ClientId"] ?? throw new ArgumentNullException("Authentication:Google:ClientId");
    // Use dotnet user-secrets set "Authentication:Google:ClientSecret" "SECRET"
    googleOptions.ClientSecret = configuration["Authentication:Google:ClientSecret"] ?? throw new ArgumentNullException("Authentication:Google:ClientSecret");
});
    
services.AddControllers();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseOpenApi(); // serve OpenAPI/Swagger documents
    //app.UseSwaggerUi(); // serve Swagger UI
    app.UseReDoc(config =>
    {
        config.Path = "/redoc";
    }); // serve ReDoc UI
}

using var scope = app.Services.CreateScope();

var db = scope.ServiceProvider.GetRequiredService<AbleportContext>();

var org = new Organisation()
{
    Name = "Accessibility",
    Type = "NonProfit",
    Description = "Center of expertise in the field of digital accessibility in the Netherlands.",
};

var panel = new Panel
{
    Title = "Test panel",
    Description = "This is a test",
    Location = "https://ableport.nl",
    Organisation = org,
    Content = "This is an automatically generated test panel",
    Reward = ["$0", "Fame"],
    StudyType = "QA",
};

db.Organisations.Add(org);
db.Panels.Add(panel);
db.SaveChanges();

app.MapControllers();

app.UseHttpsRedirection();

app.UseStaticFiles();

app.MapGroup("/auth").WithTags("Auth").MapIdentityApi<AbleportUser>();

app.Run();