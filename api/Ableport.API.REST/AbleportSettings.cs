public class AbleportSettings
{
    public string AllowedOrigins { get; set; }
    public string AppName { get; set; }
    public string AppDomain { get; set; }
    public JwtTokenConfig AuthSettings { get; set; }
    public class JwtTokenConfig
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public int AccessTokenExpiration { get; set; }
        public string RefreshTokenName { get; set; }
        public int RefreshTokenExpiration { get; set; }
    }
}
