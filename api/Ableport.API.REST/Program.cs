using System.Text;
//using Ableport.API.REST.Auth;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
var services = builder.Services;

// Bind AppSettings class

services.Configure<AbleportSettings>(configuration.GetSection("AppSettings"));

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
    // .AddIdentity<AbleportUser,AbleportRole>() <- TODO: might be worth writing our own endpoints later
    .AddRoles<AbleportRole>()
    .AddEntityFrameworkStores<AbleportContext>()
    .AddDefaultTokenProviders();

//builder.Services.AddSingleton<JwtAuthManager, JwtAuthManager>();

services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

    options.LoginPath = "/auth/login";
    options.AccessDeniedPath = "/auth/denied";
    options.SlidingExpiration = true;
    
    if (!builder.Environment.IsDevelopment())
    {
        options.Cookie.Domain = "api.ableport.nl";
    }
});

services.AddEndpointsApiExplorer();
services.AddOpenApiDocument();

var appSettings = configuration.Get<AbleportSettings>();

services.AddAuthentication()
    .AddCookie()
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = true;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = appSettings.AuthSettings.Issuer,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.ASCII.GetBytes(
                    configuration["Authentication:Ableport:Secret"])),
            ValidAudience = appSettings.AuthSettings.Audience,
            ValidateAudience = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromMinutes(1)
        };
        x.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
                {
                    context.Response.Headers.Add("Token-Expired", "true");
                }
                return Task.CompletedTask;
            }
        };
    })
.AddMicrosoftAccount(microsoftOptions =>
{
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientId" "ID"
    microsoftOptions.ClientId = configuration["Authentication:Microsoft:ClientId"];
    // Use dotnet user-secrets set "Authentication:Microsoft:ClientSecret" "SECRET"
    microsoftOptions.ClientSecret = configuration["Authentication:Microsoft:ClientSecret"];
    microsoftOptions.CallbackPath = new PathString("/auth/callback/microsoft");
    microsoftOptions.SignInScheme = IdentityConstants.ExternalScheme;
}).AddGoogle(googleOptions => {
    // Use dotnet user-secrets set "Authentication:Google:ClientId" "ID"
    googleOptions.ClientId = configuration["Authentication:Google:ClientId"];
    // Use dotnet user-secrets set "Authentication:Google:ClientSecret" "SECRET"
    googleOptions.ClientSecret = configuration["Authentication:Google:ClientSecret"];
    googleOptions.CallbackPath = new PathString("/auth/callback/google");
    googleOptions.SignInScheme = IdentityConstants.ExternalScheme;
});

//Cookie Policy needed for External Auth
services.Configure<CookiePolicyOptions>(options =>
{
    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
    options.CheckConsentNeeded = context => true;
    options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
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

// Modify Identity Framework endpoints and add tag for swagger
app.MapGroup("/auth").WithTags("Auth").MapIdentityApi<AbleportUser>();

app.Run();