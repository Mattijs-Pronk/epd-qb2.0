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

export const AddNewPatient = async (patient) => {
    try {
        let response = await APIcalls.AddNewPatient(patient)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const UpdatePatientDetails = async (patient) => {
    try {
        let response = await APIcalls.UpdatePatientDetails(patient)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const UpdatePatientMedicine = async (patient) => {
    try {
        let response = await APIcalls.UpdatePatientMedicine(patient)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const UpdatePatientDescription = async (patient) => {
    try {
        let response = await APIcalls.UpdatePatientDescription(patient)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const AddNewPatientHistory = async (patienthistory) => {
    console.log(patienthistory)
    try {
        let response = await APIcalls.AddNewPatientHistory(patienthistory)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};

export const getPatientHistoryById = async (id) => {
    console.log(id)
    try {
        let response = await APIcalls.getPatientHistoryById(id)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
};
