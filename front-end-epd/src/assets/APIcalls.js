import API from "./API"

export default {

    //Patient calls.
    async GetPatientById(id) {
        return await API().get(`getpatientbyid?id=${id}`, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async GetAllPatients() {
        return await API().get('getallpatients', {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async AddNewPatient(patient) {        
        return await API().post(`addnewpatient`, patient, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async UpdatePatientDetails(patient) {
        return await API().put(`updatepatientdetails`, patient, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async UpdatePatientMedicine(patient) {
        return await API().put(`updatepatientmedicine`, patient, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async UpdatePatientDescription(patient) {
        return await API().put(`updatepatientdescription`, patient, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async AddNewPatientHistory(patienthistory) {   
        console.log(patienthistory)     
        return await API().post(`addnewpatienthistory`, patienthistory, {
            headers: { 'Content-type': 'application/json' }
        })
    },

    async getPatientHistoryById(id) {        
        return await API().get(`getpatienthistorybyid?id=${id}`, {
            headers: { 'Content-type': 'application/json' }
        })
    },
};