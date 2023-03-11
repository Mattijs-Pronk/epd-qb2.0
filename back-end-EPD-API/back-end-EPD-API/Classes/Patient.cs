using System.ComponentModel.DataAnnotations;

namespace back_end_EPD_API.Classes
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }

        public string? ImageUrl { get; set; }

        [Required]
        public string FirstName { get; set; } = string.Empty;

        public string? Infix { get; set; }

        [Required]
        public string LastName { get; set; } = string.Empty;

        [Required]
        public string DateOfBirth { get; set; } = string.Empty;

        [Required]
        public int CitizenServiceNumber { get; set; }

        public string? Adress { get; set; }

        public int? PhoneNumber { get; set; }

        public string? Email { get; set; }

        [Required]
        public bool Insured { get; set; }

        public string? Medicine { get; set; }

        public string? Description { get; set;}

        [Required]
        public bool isActive { get; set; }

        public ICollection<PatientHistory>? patientHistories { get; set; }
    }
}
