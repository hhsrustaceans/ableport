using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class AidController : ControllerBase
{
    private static readonly string[] Strings = new[]
    {
        "Hello there", "Hello world", "Hell no"
    };

    private readonly ILogger<AidController> _logger;

    public AidController(ILogger<AidController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetAid")]
    public string Get()
    {
        return "{test: \"Hello world\"}";
    }
}