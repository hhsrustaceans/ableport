// using System.Security.Claims;
// using Microsoft.AspNetCore.Identity;
// using Microsoft.AspNetCore.Mvc;
// using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;
//
// namespace Ableport.API.REST.DataModel;
//
// public class AccountService
// {
//     private readonly SignInManager<AbleportUser> signInManager;
//     private readonly UserManager<AbleportUser> userManager;
//     
//     public AccountService(SignInManager<AbleportUser> signInManager, UserManager<AbleportUser> userManager)
//     {
//         this.signInManager = signInManager;
//         this.userManager = userManager;
//     }
//     
//     public async Task<IActionResult> ExternalLogin(ExternalLoginInfo info)
//     {
//         IActionResult loginResult = null;
//
//         if (info.IsEmpty())
//         {
//             return null;
//         }
//
//         var signinResult = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, false);
//         var email = info.Principal.FindFirstValue(ClaimTypes.Email);
//         var user = await userManager.FindByEmailAsync(email);
//         var claims = await GetUserClaims(user);
//
//         if (signinResult.Succeeded)
//         {
//             var jwtResult = await jwtAuthManager.GenerateTokens(user, claims, DateTime.UtcNow);
//
//             await userManager.SetAuthenticationTokenAsync(
//                 user,
//                 TokenOptions.DefaultProvider,
//                 appSettings.RefreshTokenName,
//                 jwtResult.RefreshToken);
//
//             loginResult = new LoginResultViewModel()
//             {
//                 User = new UserViewModel()
//                 {
//                     Email = email,
//                     AccessToken = jwtResult.AccessToken,
//                     RefreshToken = jwtResult.RefreshToken,
//                     FirstName = user.FirstName,
//                     LastName = user.LastName,
//                     Phone = user.PhoneNumber,
//                     UserId = user.Id
//                 }
//             };
//
//             return loginResult;
//         }
//
//         if (!email.IsEmpty())
//         {
//             if (user.IsEmpty())
//             {
//                 user = new ApplicationUser()
//                 {
//                     UserName = info.Principal.FindFirstValue(ClaimTypes.Email),
//                     Email = info.Principal.FindFirstValue(ClaimTypes.Email)
//                 };
//                 await userManager.CreateAsync(user);
//             }
//
//             await userManager.AddLoginAsync(user, info);
//             await signInManager.SignInAsync(user, false);
//             var jwtResult = await jwtAuthManager.GenerateTokens(user, claims, DateTime.UtcNow);
//
//             //sucess
//             await userManager.SetAuthenticationTokenAsync(
//                 user,
//                 TokenOptions.DefaultProvider,
//                 appSettings.RefreshTokenName,
//                 jwtResult.RefreshToken);
//
//             loginResult = new LoginResultViewModel()
//             {
//                 User = new UserViewModel()
//                 {
//                     Email = email,
//                     AccessToken = jwtResult.AccessToken,
//                     RefreshToken = jwtResult.RefreshToken,
//                     FirstName = user.FirstName,
//                     LastName = user.LastName,
//                     Phone = user.PhoneNumber,
//                     UserId = user.Id
//                 }
//             };
//
//             return loginResult;
//         }
//
//         return null;
//     }
//     
//     public async Task<SignInResult> Login(LoginModel model)
//     {
//         var result = await signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
//
//         return result;
//     }
// }