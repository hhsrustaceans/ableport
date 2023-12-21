using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class TestController : ControllerBase
{
    private static readonly string[] Strings = new[]
    {
        "Hello there", "Hello world", "Hell no"
    };

    private readonly ILogger<TestController> _logger;

    public TestController(ILogger<TestController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetTestData")]
    public string Get()
    {
        return "{test: \"Hello world\"}";
    }
}