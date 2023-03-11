<script setup>
import Searchbar from './Searchbar.vue';
import EditPatientDetails from './EditPatientDetails.vue';
import DeleteRecord from './DeleteRecord.vue'

import { GetAllPatients } from '../assets/Patient';
import {
  newPatient, updatePatient, removePatient
} from '../assets/SignalR';
</script>

<template>
  <Searchbar />
  <section id="background">
    <div class="container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">DOB</th>
            <th scope="col">CSN</th>
            <th scope="col">Insured</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in PatientList" :key="patient.id">
            <td>{{ patient.firstName }} {{ patient.infix }} {{ patient.lastName }}</td>
            <td>{{ patient.dateOfBirth }}</td>
            <td>{{ patient.citizenServiceNumber }}</td>
            <td :id="patient.id"><span v-if="patient.insured" class="icon-insured-true"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg></span>
              <span v-else class="icon-insured-false"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg></span>
            </td>
            <td>
              <button v-bind:disabled="enableBtn" class="btn-delete" v-on:click="openDeleteRecord(patient)">
                <span class="icon-btn-delete"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg></span>
                <span> Delete</span>
              </button>
              <button v-bind:disabled="enableBtn" class="btn-edit" v-on:click="opendEditPatientDetails(patient)">
                <span class="icon-btn-edit"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg></span>
                <span> Edit</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <component :is="compToRender" :currentPatient="Patient"
    v-on:changeEditPatientDetailsComponent="closeEditPatientDetails()"
    v-on:changeDeleteRecordComponent="closeDeleteRecord()"></component>
</template>

<script>
export default {
  data() {
    return {
      PatientList: [],

      Patient: {
        id: '',
        imageUrl: '',
        firstName: '',
        infix: '',
        lastName: '',
        dateOfBirth: '',
        citizenServiceNumber: '',
        adress: '',
        phoneNumber: '',
        email: '',
        insured: '',
      },

      compToRender: '',
      enableBtn: false
    }
  },
  components: {
    EditPatientDetails,
    DeleteRecord
  },
  async mounted() {
    this.PatientList = await GetAllPatients();

    //signalR event for add recent patient to list. 
    window.addEventListener('NewPatient', () => {
      this.PatientList.push(newPatient)
    })
    //signalR event for add recent updated patient to list. 
    window.addEventListener('UpdatePatient', () => {
      const index = this.PatientList.findIndex(item => {
        return (updatePatient.id === item.id)
      })
      this.PatientList[index].id = updatePatient.id
      this.PatientList[index].firstName = updatePatient.firstName
      this.PatientList[index].infix = updatePatient.infix
      this.PatientList[index].lastName = updatePatient.lastName
      this.PatientList[index].dateOfBirth = updatePatient.dateOfBirth
      this.PatientList[index].citizenServiceNumber = updatePatient.citizenServiceNumber
      this.PatientList[index].insured = updatePatient.insured
    })
    //signalR event for remove patient from list. 
    window.addEventListener('RemovePatient', () => {
      const index = this.PatientList.findIndex(item => {
        return (removePatient.id === item.id)
      })
      this.PatientList.splice(index, 1);
    })
  },
  methods: {
    switchActiveComponent() {
      this.$emit('changePatientDetailsComponent', true)
    },
    closeEditPatientDetails() {
      this.enableBtn = false;
      this.compToRender = '';
      document.getElementById('background').style.filter = 'none'
    },
    opendEditPatientDetails(patient) {
      this.Patient = patient

      this.enableBtn = true;
      this.compToRender = 'EditPatientDetails';
      document.getElementById('background').style.filter = 'blur(7px)'
    },
    closeDeleteRecord() {
      this.enableBtn = false;
      this.compToRender = '';
      document.getElementById('background').style.filter = 'none'
    },
    openDeleteRecord(patient) {
      this.Patient = patient

      this.enableBtn = true;
      this.compToRender = 'DeleteRecord';
      document.getElementById('background').style.filter = 'blur(7px)'
    }
  }
}
</script>

<style scoped>
@import '../styles/components/managepatients.css';
</style>