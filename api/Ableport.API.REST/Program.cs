using Ableport.API.Lib.DataModel;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Sets up in-memory database for dev
builder.Services.AddDbContext<AbleportContext>(
    options => options.UseInMemoryDatabase("AppDb"));

builder.Services.AddIdentityApiEndpoints<AbleportUser>()
    .AddEntityFrameworkStores<AbleportContext>();

// Sets up DB connection in production
//var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//builder.Services.AddDbContext<AbleportContext>(options =>
//    options.UseSqlServer(connectionString));

// Adds custom redirect for DB errors
//builder.Services.AddDatabaseDeveloperPageExceptionFilter();

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

builder.Services.AddAuthentication("CookieAuth").AddCookie("CookieAuth", options =>
{
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
    options.LoginPath = "/User/Login";
    options.LogoutPath = "/User/Logout";
    // Additional options can be set here
});

builder.Services.AddAuthorization(options =>
{
    // Configure authorization policies here
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSPA",
        builder => builder.WithOrigins("https://localhost:7265")
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials());
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    //app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.MapIdentityApi<AbleportUser>();

app.UseCors("AllowSPA");

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => "Hello World!");
app.MapGet("/test/", () => "Hello there!").RequireAuthorization();


app.Run();