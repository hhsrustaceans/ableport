using Ableport.API.Lib.DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Authorization
builder.Services.AddAuthorization();

// Configure identity database access via EF Core.
builder.Services.AddDbContext<AbleportContext>(
    options => options.UseInMemoryDatabase("AppDb"));

builder.Services.Configure<IdentityOptions>(options =>
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
builder.Services.AddIdentityApiEndpoints<AbleportUser>()
    .AddEntityFrameworkStores<AbleportContext>();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapGet("/", () => "Welcome to Ableport!")
.RequireAuthorization();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "")),
    RequestPath = "/account"
});

app.MapIdentityApi<AbleportUser>();

app.Run();