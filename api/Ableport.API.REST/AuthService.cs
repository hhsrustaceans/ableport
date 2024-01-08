using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.DataModel;

[ApiController]
[Route("auth/")]
public class AuthService
{
    private readonly SignInManager<AbleportUser> signInManager;

    public AuthService(SignInManager<AbleportUser> signInManager)
    {
        this.signInManager = signInManager;
    }
    
    [HttpPost(Name = "PostGoogleLogin")]
    [AllowAnonymous]
    [Route("login/google")]
    public IActionResult GoogleLogin(string provider, string returnUrl)
    {
        var redirectUrl = $"http://localhost:5134/auth/callback/google?returnUrl={returnUrl}";
        var properties = signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        properties.AllowRefresh = true;
        return new ChallengeResult(provider, properties);
    }    
}