using back_end_EPD_API.Classes;
using Microsoft.EntityFrameworkCore;

namespace back_end_EPD_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Patient> Patient { get; set; } = null!;

        //update klaar zetten Tools>Nuget Package manager>PackageManager console> type in console "add-migration 'wat je hebt verandert'"
        //update batabase met Tools>Nuget Package manager>PackageManager console> type in console "Update-Database"
        //Mapjes Data, Migration en Models is voor het beheren van de database
    }
}
