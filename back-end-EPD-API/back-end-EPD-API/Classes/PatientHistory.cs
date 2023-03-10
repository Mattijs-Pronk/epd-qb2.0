using System.ComponentModel.DataAnnotations;

namespace back_end_EPD_API.Classes
{
    public class PatientHistory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Date { get; set; } = string.Empty;

        [Required]
        public string Doctor { get; set; } = string.Empty;

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public int PatientId { get; set; }
    }
}
