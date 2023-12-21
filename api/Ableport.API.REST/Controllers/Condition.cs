using System.Net.Mime;
using Ableport.API.REST.DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Ableport.API.REST.Controllers;
[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class ConditionController : ControllerBase
{
    private Dictionary<string, Condition> Conditions = new Dictionary<string, Condition>();

    private readonly ILogger<ConditionController> _logger;

    public ConditionController(ILogger<ConditionController> logger)
    {
        _logger = logger;
        Conditions.Add("ASD", new Condition() {Code = "ASD", Name = "Autism", Description = "Autism Spectrum Disorder"});
        Conditions.Add("BL", new Condition() {Code = "BL", Name = "Blindness", Description = "Blindness or heavy vision impairment"});
        Conditions.Add("DF", new Condition() {Code = "DF", Name = "Deafness", Description = "Deafness or hearing impairment"});
    }

    [HttpPost(Name = "GetCondition")]
    public Condition Get(Condition code)
    {
        return Conditions[code.Code];
    }
}