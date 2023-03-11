using back_end_EPD_API.Classes;
using back_end_EPD_API.Data;
using back_end_EPD_API.SignalRHubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace back_end_EPD_API.Controllers
{
    public class PatientController : Controller
    {
        public readonly DataContext _context;
        public readonly IHubContext<PatientHub> _hub;

        public PatientController(DataContext context, IHubContext<PatientHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        [HttpGet("getpatientbyid")]
        public async Task<ActionResult> GetPatientById(int id)
        {
            var mypatient = await _context.Patients.FindAsync(id);
            if (mypatient == null) { return BadRequest("patient not found"); }

            return Ok(mypatient);
        } 

        [HttpGet("getallpatients")]
        public async Task<ActionResult> GetAllPatients()
        {
            var mypatient = await _context.Patients.Where(u => u.isActive == true)
                         .Select(u => new
                         {
                             u.Id,
                             u.ImageUrl,
                             u.FirstName,
                             u.Infix,
                             u.LastName,
                             u.DateOfBirth,
                             u.CitizenServiceNumber,
                             u.Insured,
                         })
                         .ToListAsync();

            return Ok(mypatient);
        }

        [HttpPost("addnewpatient")]
        public async Task<ActionResult> AddNewPatient([FromBody]Patient patient)
        {
            await _context.Patients.AddAsync(patient);
            await _context.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("NewPatient", patient);

            return Ok("patient added");
        }

        [HttpPut("updatepatientdetails")]
        public async Task<ActionResult> UpdatePatientDetails([FromBody] Patient patient)
        {
            var mypatient = await _context.Patients.FindAsync(patient.Id);
            if (mypatient != null)
            {
                mypatient.FirstName = patient.FirstName;
                mypatient.Infix = patient?.Infix;
                mypatient.LastName = patient.LastName;
                mypatient.Email = patient?.Email;
                mypatient.Adress = patient?.Adress;
                mypatient.PhoneNumber = patient?.PhoneNumber;
                mypatient.CitizenServiceNumber = patient.CitizenServiceNumber;
                mypatient.DateOfBirth = patient.DateOfBirth;
                mypatient.Email = patient?.Email;
                mypatient.ImageUrl = patient?.ImageUrl;
                mypatient.Insured = patient.Insured;

                await _context.SaveChangesAsync();

                await _hub.Clients.All.SendAsync("UpdatePatient", patient);

                return Ok("patient details updated");
            }
            return BadRequest("patient not found");
        }

        [HttpPut("updatepatientmedicine")]
        public async Task<ActionResult> UpdatePatientMedicine([FromBody] Patient patient)
        {
            var mypatient = await _context.Patients.FindAsync(patient.Id);
            if (mypatient != null)
            {
                mypatient.Medicine = patient.Medicine;

                await _context.SaveChangesAsync();
                return Ok("patient removed");
            }
            return BadRequest("patient not found");
        }

        [HttpPut("removepatientbyid")]
        public async Task<ActionResult> RemovePatientById(int id)
        {
            var mypatient = await _context.Patients.FindAsync(id);
            if (mypatient != null)
            {
                mypatient.isActive = false;

                await _context.SaveChangesAsync();

                await _hub.Clients.All.SendAsync("RemovePatient", mypatient.Id);

                return Ok("patient removed");
            }
            return BadRequest("patient not found");
        }

        [HttpPut("updatepatientdescription")]
        public async Task<ActionResult> UpdatePatientDescription([FromBody] Patient patient)
        {
            var mypatient = await _context.Patients.FindAsync(patient.Id);
            if (mypatient != null)
            {
                mypatient.Description = patient.Description;

                await _context.SaveChangesAsync();
                return Ok("patient description updated");
            }
            return BadRequest("patient not found");
        }

        [HttpPost("addnewpatienthistory")]
        public async Task<ActionResult> AddNewPatientHistory([FromBody] PatientHistory patienthistory)
        {
            patienthistory.Date = DateTime.Now.ToString("dd/MM/yyyy (HH:mm)");

            await _context.PatientHistories.AddAsync(patienthistory);
            await _context.SaveChangesAsync();

            return Ok("patienthistory added");
        }

        [HttpGet("getpatienthistorybyid")]
        public async Task<ActionResult> GetPatientHistoryById(int id)
        {
            var mypatient = await _context.Patients.FindAsync(id);
            if (mypatient != null)
            {
                var myhistory = await _context.PatientHistories.Where(u => u.PatientId == id).OrderByDescending(d => d.Date)
                    .ToListAsync();

                return Ok(myhistory);
            }
            return BadRequest("User not found");
        }
    }
}
