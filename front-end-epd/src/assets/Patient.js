import APIcalls from "./APIcalls";

export const GetPatientById = async (id) => {
    try {
        let response = await APIcalls.GetPatientById(id)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const GetAllPatients = async () => {
    try {
        let response = await APIcalls.GetAllPatients()
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const AddNewPatient = async (img, firstname, infix, lastname, dob, csn, adress, phone, email) => {
    try {
        let response = await APIcalls.AddNewPatient(img, firstname, infix, lastname, dob, csn, adress, phone, email)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};