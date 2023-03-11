using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace back_end_EPD_API.SignalRHubs
{
    public class PatientHub : Hub
    {
        public async Task NewPatient(ActionResult patient)
        {
            await Clients.All.SendAsync("NewPatient", patient);
        }

        public async Task UpdatePatient(ActionResult patient)
        {
            await Clients.All.SendAsync("UpdatePatient", patient);
        }

        public async Task RemovePatient(int patientId)
        {
            await Clients.All.SendAsync("RemovePatient", patientId);
        }
    }
}
