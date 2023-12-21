using System.Net.Mime;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class PanelController : ControllerBase
{
    private static readonly string[] Strings = new[]
    {
        "Hello there", "Hello world", "Hell no"
    };

    private readonly ILogger<PanelController> _logger;

    public PanelController(ILogger<PanelController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetPanelData")]
    public Panel Get()
    {
        var org = new Organisation
        {
            Type = "corp",
            Name = "Meta",
            Description = "We sell your data"
        };

        var panel = new Panel
        {
            Organisation = org,
            Title = "Test",
            Description = "This is a test",
            Content = "Lorem ipsum",
            Location = "https://tweakers.net",
            Reward = ["$20"],
            StudyType = "Questionnaire"
        };
        
        
        return panel;
    }
}