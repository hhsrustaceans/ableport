using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Ableport.API.REST.DataModel;
using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NSwag.Annotations;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Ableport.API.REST.Auth;

[ApiController]
[Route("auth/")]
[OpenApiTag("Auth")]
public class AuthService : ControllerBase
{
    private readonly SignInManager<AbleportUser> signInManager;
    private readonly ILogger<AuthService> logger;
    private readonly UserManager<AbleportUser> userManager;
    private readonly byte[] secret;

    private readonly AbleportSettings  settings;
    //private readonly AccountService accountService;

    public AuthService(SignInManager<AbleportUser> signInManager, UserManager<AbleportUser> userManager, ILogger<AuthService> logger, IOptions<AbleportSettings> settings)
    {
        this.signInManager = signInManager;
        this.userManager = userManager;
        this.logger = logger;
        this.settings = settings.Value;
        secret = Encoding.ASCII.GetBytes("SECRET TO SIGN THE TOKEN: NOT TO BE HARD-CODED HERE. JUST FOR DEMONSTRATION PURPOSES");
    }
    
    // [HttpPost]
    // [AllowAnonymous]
    // [Route("login")]
    // public async Task<IActionResult> Login([FromBody] LoginModel model)
    // {
    //     var result = await signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
    //
    //     if (!result.Succeeded)
    //     {
    //         logger.LogError($"result of PasswordSignInAsync was failure");
    //         return null;
    //     }
    //
    //     var user = await userManager.FindByEmailAsync(model.Email);
    //
    //     if (user == null)
    //     {
    //         logger.LogError($"user with email {model.Email} was null");
    //         return null;
    //     }
    //
    //     var userClaims = await GetUserClaims(user);
    //
    //     var jwtResult = jwtAuthManager.GenerateTokens(user, userClaims, DateTime.Now);
    //     
    //         //save in db
    //     await userManager.SetAuthenticationTokenAsync(
    //         user,
    //         appSettings.AppName,
    //         appSettings.RefreshTokenName,
    //         jwtResult.RefreshToken.TokenString);
    //
    //     return result;
    // }
    //
    // public async Task<IEnumerable<Claim>> GetUserClaims(AbleportUser user)
    // {
    //     var claims = new List<Claim>
    //     {
    //         new Claim(ClaimTypes.Name, $"{user.FirstName ?? string.Empty} {user.LastName ?? string.Empty}".Trim()),
    //         new Claim(ClaimTypes.GivenName, (user.FirstName ?? string.Empty).Trim()),
    //         new Claim(ClaimTypes.Surname, (user.LastName ?? string.Empty).Trim()),
    //         new Claim(ClaimTypes.Email, user.Email),
    //         new Claim("UserId", user.Id.ToString())
    //     };
    //
    //     var jwtResultToCallSubscriptionApi = jwtAuthManager.GenerateTokens(user, claims, DateTime.Now);
    //
    //     var userAllowedActions = await subscriptionServices.RetrieveCurrentUserActiveSubscription(jwtResultToCallSubscriptionApi.AccessToken);
    //
    //     if (!userAllowedActions.IsEmpty())
    //     {
    //         claims.Add(new Claim(HttpHeader.Common.IdentityConstants.ScopeClaim, string.Join(" ", userAllowedActions)));
    //     }
    //
    //     return claims;
    // }
    
    [HttpPost("login/google", Name = "PostGoogleLogin")]
    [AllowAnonymous]
    public IActionResult GoogleLogin(string provider, string returnUrl)
    {
        var redirectUrl = $"http://localhost:5134/auth/account/redirect?returnUrl={returnUrl}";
        var properties = signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        properties.AllowRefresh = true;
        return new ChallengeResult(provider, properties);
    }
    
    [HttpGet("account/redirect")]
    [AllowAnonymous]
    public async Task<IActionResult> ExternalLoginRedirect()
    {
        ExternalLoginInfo info = await signInManager.GetExternalLoginInfoAsync();

        if (info == null)
        {
            return null;
        }
        
        var signinResult = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, false);
        var email = info.Principal.FindFirstValue(ClaimTypes.Email);
        
        logger.LogInformation(email);
        var user = await userManager.FindByEmailAsync(email);
        logger.LogInformation(user.Email);
        var claims = GetUserClaims(user);

        // if (!signinResult.Succeeded)
        // {
        //     return null;
        // }
        
        // JWT
        var shouldAddAudienceClaim = string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)?.Value);
        var jwtToken = new JwtSecurityToken(
            settings.AuthSettings.Issuer,
            shouldAddAudienceClaim ? settings.AuthSettings.Audience : string.Empty,
            claims,
            expires: DateTime.Now.AddMinutes(settings.AuthSettings.AccessTokenExpiration), // TODO remove hardcoded expiry
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature));

        var accessTokenString = new JwtSecurityTokenHandler().WriteToken(jwtToken);
        var refreshTokenstring = await userManager.GenerateUserTokenAsync(user, settings.AppName, settings.AuthSettings.RefreshTokenName);
        // JWT
        
    
        // var result = await accountService.ExternalLogin(info);
        
        // if (result.IsEmpty())
        // {
        //     //sign in failed
        // }
    
        var options = new CookieOptions()
        {
            //Needed so that domain.com can access  the cookie set by api.domain.com
            Domain = settings.AppDomain,
            Expires = DateTime.UtcNow.AddMinutes(5)
        };
        
        Response.Cookies.Append(
            "AbleportBearer",
            JsonConvert.SerializeObject(jwtToken, new JsonSerializerSettings
            {
                ContractResolver = new DefaultContractResolver
                {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },
                Formatting = Formatting.Indented
            }), options);
        
        return Redirect($"http://localhost:3000/");
    }
    
    private IEnumerable<Claim> GetUserClaims(AbleportUser user)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, $"{user.FirstName ?? string.Empty} {user.LastName ?? string.Empty}".Trim()),
            new Claim(ClaimTypes.GivenName, (user.FirstName ?? string.Empty).Trim()),
            new Claim(ClaimTypes.Surname, (user.LastName ?? string.Empty).Trim()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim("UserId", user.Id.ToString())
        };

        // var jwtResultToCallSubscriptionApi = jwtAuthManager.GenerateTokens(user, claims, DateTime.Now);
        //
        // var userAllowedActions = await subscriptionServices.RetrieveCurrentUserActiveSubscription(jwtResultToCallSubscriptionApi.AccessToken);
        //
        // if (!userAllowedActions.IsEmpty())
        // {
        //     claims.Add(new Claim(Common.IdentityConstants.ScopeClaim, string.Join(" ", userAllowedActions)));
        // }

        return claims;
    }
}