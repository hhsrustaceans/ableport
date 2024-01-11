namespace Ableport.API.Test;

using System.Net;
using System.Net.Http.Json;
using System.Text;

public class Tests
{
    public static class TestConfig
    {
        public static readonly Uri BaseUrl = new Uri("http://localhost:5134");
        public const string AccountData = "{\"email\":\"test@gmail.com\",\"password\":\"AW8v89WA12*!\"}";
    }
    
    [SetUp]
    public async Task Setup()
    {
        // Register test account
        HttpClient httpClient = new() { BaseAddress = TestConfig.BaseUrl };
        HttpContent content = new StringContent(TestConfig.AccountData, Encoding.UTF8, "application/json");
        var response = await httpClient.PostAsync("/auth/register", content);
    }
    
    [Test]
    public async Task Authorization()
    {
        HttpClient httpClient = new() { BaseAddress = TestConfig.BaseUrl };
        
        // 1: Assert that the test endpoint isn't visible for anonymous users
        var response = await httpClient.GetAsync("/test");
        
        Assert.That( response.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
        
        HttpContent content = new StringContent(TestConfig.AccountData, Encoding.UTF8, "application/json");
        
        // 2: Assert login functionality is working
        var loginResponse = await httpClient.PostAsync("/auth/login?useCookies=true", content);
        
        Assert.That( loginResponse.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        
        if (loginResponse.Headers.TryGetValues("Set-Cookie", out var cookieValues))
        {
            string cookie = cookieValues.FirstOrDefault();
            Console.WriteLine(cookie);
            HttpClientHandler handler = new HttpClientHandler(); 
            handler.CookieContainer.SetCookies(httpClient.BaseAddress, cookie);
        }
        
        // 3: Assert that a logged in user can view the test endpoint
        var testResponse = await httpClient.GetAsync("/test");
        
        Assert.That( testResponse.StatusCode, Is.EqualTo(HttpStatusCode.OK));
    }
}