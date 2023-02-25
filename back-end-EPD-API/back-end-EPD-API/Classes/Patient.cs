namespace back_end_EPD_API.Classes
{
    public class Patient
    {
        public int Id { get; set; }
        public string? ImageUrl { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string? Infix { get; set; }
        public string LastName { get; set; } = string.Empty;
        public string DateOfBirth { get; set; } = string.Empty;
        public int CitizenServiceNumber { get; set; }
        public string? Adress { get; set; }
        public int? PhoneNumber { get; set; }
        public string? Email { get; set; } 
        public bool Insured { get; set; }
    }
}
