using Azure.Core;
using back_end_EPD_API.Classes;
using back_end_EPD_API.Data;
using back_end_EPD_API.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end_EPD_API.Controllers
{
    public class PatientController : Controller
    {
        public readonly DataContext _context;

        public PatientController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("addnewpatient")]
        public async Task<ActionResult> AddNewPatient([FromBody]Patient patient)
        {
            await _context.Patient.AddAsync(patient);
            await _context.SaveChangesAsync();

            return Ok(patient);
        }

        [HttpGet("getpatientbyid")]
        public async Task<ActionResult> GetPatientById(int id)
        {
            var patient = await _context.Patient.FindAsync(id);
            if (patient == null) { return BadRequest("patient not found"); }

            return Ok(patient);
        }

        [HttpGet("getallpatients")]
        public async Task<ActionResult> GetAllPatients()
        {
            var patients = await _context.Patient.ToListAsync();

            return Ok(patients);
        }
    }
}
