using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end_EPD_API.Migrations
{
    /// <inheritdoc />
    public partial class meddescAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Medicine",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Medicine",
                table: "Patient");
        }
    }
}
