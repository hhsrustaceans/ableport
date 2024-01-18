using System.Net.Mime;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
[Authorize]
public class PanelController : ControllerBase
{
    private readonly AbleportContext _db;

    private readonly ILogger<PanelController> _logger;
    private readonly UserManager<AbleportUser> _userManager;

    public PanelController(ILogger<PanelController> logger, AbleportContext db, UserManager<AbleportUser> userManager)
    {
        _logger = logger;
        _db = db;
        _userManager = userManager;
    }

    [HttpGet(Name = "GetPanelData")]
    public Panel Get()
    {
        return _db.Panels.First();
    }
    
    [HttpPost(Name = "EnrolPanelUser")]
    public async Task<string> Enroll(int panel)
    {
        var user = await _userManager.GetUserAsync(HttpContext.User);
        
        return user?.Email ?? "No associated email found";
    }
}