using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Manage.Internal;
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
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<AbleportContext>();

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

services.AddAuthentication().AddMicrosoftAccount(microsoftOptions =>
{
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientId" "ID"
    microsoftOptions.ClientId = configuration["Authentication:Microsoft:ClientId"];
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientSecret" "SECRET"
    microsoftOptions.ClientSecret = configuration["Authentication:Microsoft:ClientSecret"];
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/", () => "Welcome to Ableport!")
    .WithName("GetHome")
    .RequireAuthorization();

app.UseStaticFiles();

app.MapIdentityApi<AbleportUser>();

app.Run();