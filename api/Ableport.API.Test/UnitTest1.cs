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
        public static HttpClient AuthorizedClient = new() { BaseAddress = TestConfig.BaseUrl };
    }
    
    [SetUp]
    public async Task AuthorizedSetup()
    {
        // 1: Register test account
        HttpContent content = new StringContent(TestConfig.AccountData, Encoding.UTF8, "application/json");
        var registerResponse = await TestConfig.AuthorizedClient.PostAsync("/auth/register", content);
        
        // 2: Assert login functionality is working
        var loginResponse = await TestConfig.AuthorizedClient.PostAsync("/auth/login?useCookies=true", content);
        
        Assert.That( loginResponse.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        
        if (loginResponse.Headers.TryGetValues("Set-Cookie", out var cookieValues))
        {
            string cookie = cookieValues.FirstOrDefault();
            Console.WriteLine(cookie); // SENSITIVE
            HttpClientHandler handler = new HttpClientHandler(); 
            handler.CookieContainer.SetCookies(TestConfig.AuthorizedClient.BaseAddress, cookie);
        }
        
        // 3: Assert that a logged in user can view the test endpoint
        var testResponse = await TestConfig.AuthorizedClient.GetAsync("/test");
        Assert.That( testResponse.StatusCode, Is.EqualTo(HttpStatusCode.OK));
    }

    [Test]
    public async Task Enrollment()
    {
        // Act
        var enrollmentResponse = await TestConfig.AuthorizedClient.GetAsync("/panel?panel=0");
        
        // Assert
        Assert.That(enrollmentResponse.StatusCode, Is.EqualTo(HttpStatusCode.OK));
    }

    [Test]
    public async Task UnauthorizedEnpoints()
    {
        // Arrange
        HttpClient unauthorizedClient = new() { BaseAddress = TestConfig.BaseUrl };
        
        // Act
        var enrollmentResponse = await unauthorizedClient.PostAsync("/panel?panel=0", null);
        var unauthorizedResponse = await unauthorizedClient.GetAsync("/test");
        
        // Assert
        Assert.That(enrollmentResponse.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
        Assert.That(unauthorizedResponse.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
    }
}