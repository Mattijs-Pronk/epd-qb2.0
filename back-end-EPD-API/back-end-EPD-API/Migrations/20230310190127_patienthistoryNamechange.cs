using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end_EPD_API.Migrations
{
    /// <inheritdoc />
    public partial class patienthistoryNamechange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PatientHistory_Patients_PatientId",
                table: "PatientHistory");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PatientHistory",
                table: "PatientHistory");

            migrationBuilder.RenameTable(
                name: "PatientHistory",
                newName: "PatientHistories");

            migrationBuilder.RenameIndex(
                name: "IX_PatientHistory_PatientId",
                table: "PatientHistories",
                newName: "IX_PatientHistories_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PatientHistories",
                table: "PatientHistories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PatientHistories_Patients_PatientId",
                table: "PatientHistories",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PatientHistories_Patients_PatientId",
                table: "PatientHistories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PatientHistories",
                table: "PatientHistories");

            migrationBuilder.RenameTable(
                name: "PatientHistories",
                newName: "PatientHistory");

            migrationBuilder.RenameIndex(
                name: "IX_PatientHistories_PatientId",
                table: "PatientHistory",
                newName: "IX_PatientHistory_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PatientHistory",
                table: "PatientHistory",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PatientHistory_Patients_PatientId",
                table: "PatientHistory",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id");
        }
    }
}
