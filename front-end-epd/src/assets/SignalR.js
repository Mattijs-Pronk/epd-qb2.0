import { HubConnectionBuilder } from "@microsoft/signalr";
import { HostUrl } from "./BaseUrls";

export const newPatient = {
    id: '',
    imageUrl: '',
    firstName: '',
    infix: '',
    lastName: '',
    dateOfBirth: '',
    citizenServiceNumber: '',
}

export const updatePatient = {
    id: '',
    imageUrl: '',
    firstName: '',
    infix: '',
    lastName: '',
    dateOfBirth: '',
    citizenServiceNumber: '',
    insured: ''
}

export const removePatient = {
    id: '',
}


export class SignalRHub {
    constructor(){
        this.connection = new HubConnectionBuilder().withUrl(HostUrl + "signalr").build()
        

        this.connection.onclose(async () => {
            await this.connect();
        })

        this.connect()

        //signalR event for add recent patient to list. 
        this.connection.on("NewPatient", function (patient) {
            newPatient.id = patient.id;
            newPatient.imageUrl = patient.imageUrl;
            newPatient.firstName = patient.firstName;
            newPatient.infix = patient.infix;
            newPatient.lastName = patient.lastName;
            newPatient.dateOfBirth = patient.dateOfBirth;
            newPatient.citizenServiceNumber = patient.citizenServiceNumber;

            window.dispatchEvent(NewPatient)
        });

        //signalR event for add recent aangepaste patient to list. 
        this.connection.on("UpdatePatient", function (patient) {
            updatePatient.id = patient.id;
            updatePatient.imageUrl = patient.imageUrl;
            updatePatient.firstName = patient.firstName;
            updatePatient.infix = patient.infix;
            updatePatient.lastName = patient.lastName;
            updatePatient.dateOfBirth = patient.dateOfBirth;
            updatePatient.citizenServiceNumber = patient.citizenServiceNumber;
            updatePatient.insured = patient.insured;

            window.dispatchEvent(UpdatePatient)
        });

        //signalR event for remove patient from list. 
        this.connection.on("RemovePatient", function (patientId) {
            removePatient.id = patientId;

            window.dispatchEvent(RemovePatient)
        });

        const NewPatient = new Event('NewPatient')
        const UpdatePatient = new Event('UpdatePatient')
        const RemovePatient = new Event('RemovePatient')
    }

    async connect(){
        try {
            await this.connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
        }  
    }
}

