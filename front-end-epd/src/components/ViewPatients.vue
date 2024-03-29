<script setup>
import Searchbar from './Searchbar.vue';
import PatientDetails from '../components/PatientDetails.vue';

import { GetAllPatients } from '../assets/Patient';
import {
    newPatient, updatePatient, removePatient
} from '../assets/SignalR';
</script>

<template>
    <Searchbar v-on:searchPatient="setSearchPhrase" v-if="viewpatients" />
    <section class="items" v-if="viewpatients">

        <div class="box-container">
            <div class="box" v-for="patient in filteredPatients" :key="patient.id">
                <div v-if="patient.imageUrl">
                    <img class="img" :src="patient.imageUrl">
                </div>
                <div v-else>
                    <img class="img" src="./icons/stockprofileImage.png">
                </div>

                <h2 id="1">{{ patient.firstName }} {{ patient.infix }} {{ patient.lastName }}</h2>

                <p class="p-trunc">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                        </svg></span>
                    DOB: {{ patient.dateOfBirth }} <br />
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8h39.1c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5h47.1c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8h39.1c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8H279.6zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5H200.5c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8H129.3c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z" />
                        </svg></span>
                    CSN: {{ patient.citizenServiceNumber }}
                </p>
                <a class="btn" v-on:click="switchActiveComponent(patient.id)">
                    <span class="icon-btn"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg></span>
                    <span>view</span>
                </a>
            </div>
        </div>
    </section>

    <component :getpatientdetails="setPatientdetails" :is="compToRender" :key="componentKey" :patientId="currentPatientId"
        :getPatientdetails="setPatientdetails" v-on:changePatientDetailsComponent="switchActiveComponent()"></component>
</template>


<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            compToRender: '',
            componentKey: 0,

            viewpatients: true,
            setPatientdetails: false,
            currentPatientId: 0,
            PatientList: [],

            searchPhrase: '',
        };
    },
    components: {
        PatientDetails,
        Searchbar,
    },
    async mounted() {
        this.getAllPatients();

        //signalR event for add recent patient to list. 
        window.addEventListener('NewPatient', () => {
            this.PatientList.push(newPatient)
        })
        //signalR event for add recent updated patient to list. 
        window.addEventListener('UpdatePatient', () => {
            const index = this.PatientList.findIndex(item => {
                return (updatePatient.id === item.id)
            })
            this.PatientList[index].imageUrl = updatePatient.imageUrl
            this.PatientList[index].firstName = updatePatient.firstName
            this.PatientList[index].infix = updatePatient.infix
            this.PatientList[index].lastName = updatePatient.lastName
            this.PatientList[index].dateOfBirth = updatePatient.dateOfBirth
            this.PatientList[index].citizenServiceNumber = updatePatient.citizenServiceNumber
        })
        //signalR event for remove patient from list. 
        window.addEventListener('RemovePatient', () => {
            const index = this.PatientList.findIndex(item => {
                return (removePatient.id === item.id)
            })
            this.PatientList.splice(index, 1);
        })
    },
    computed: {
        filteredPatients() {
            return this.PatientList.filter((patient) => {
                const firstlast = patient.firstName + " " + patient.lastName
                const fullname = patient.firstName + " " + patient.infix + " " + patient.lastName
                return firstlast.toLocaleLowerCase().match(this.searchPhrase) ||
                    fullname.toLocaleLowerCase().match(this.searchPhrase) ||
                    String(patient.citizenServiceNumber).match(this.searchPhrase)
            })
        },
    },
    methods: {
        switchActiveComponent(id) {
            this.viewpatients = !this.viewpatients
            this.setPatientdetails = !this.setPatientdetails
            if (id != null) {
                this.currentPatientId = id;
            }
            this.compToRender = 'PatientDetails'
            this.componentKey += 1;
        },
        setSearchPhrase(searchPhrase) {
            this.searchPhrase = searchPhrase.toLocaleLowerCase();
        },
        async getAllPatients() {
            this.PatientList = await GetAllPatients();
        }
    }
}
</script>


<style scoped>
@import '../styles/components/viewpatients.css';
</style>