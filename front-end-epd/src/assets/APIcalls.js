import API from "./API"

export default {

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

    async AddNewPatient(img, firstname, infix, lastname, dob, csn, adress, phone, email) {
        const patient = {
            ImageUrl: img,
            FirstName: firstname,
            Infix: infix,
            LastName: lastname,
            DateOfBirth: dob,
            CitizenServiceNumber: csn,
            Adress: adress,
            PhoneNumber: phone,
            Email: email,
        }
        
        return await API().post(`addnewpatient`, patient, {
            headers: { 'Content-type': 'application/json' }
        })
    },
};