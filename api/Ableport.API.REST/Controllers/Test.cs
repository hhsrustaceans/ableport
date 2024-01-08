using System.Net.Mime;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class TestController : ControllerBase
{
    private readonly AbleportContext _db;

    private readonly ILogger<TestController> _logger;

    public TestController(ILogger<TestController> logger, AbleportContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpGet(Name = "GetTestData")]
    public Organisation Get()
    {
        return _db.Organisations.First();
    }
}