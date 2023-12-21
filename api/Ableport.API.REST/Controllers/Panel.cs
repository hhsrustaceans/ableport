using System.Net.Mime;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class PanelController : ControllerBase
{
    private readonly AbleportContext _db;

    private readonly ILogger<PanelController> _logger;

    public PanelController(ILogger<PanelController> logger, AbleportContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet(Name = "GetPanelData")]
    public Panel Get()
    {
        return _db.Panels.First();
    }
}