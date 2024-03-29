<script setup>
import { AddNewPatientHistory } from '../assets/Patient'
import { AlertMessage } from '../assets/global';

import {
    checkHistoryTitle, checkHistoryDescription
} from '../assets/Validate';
</script>

<template>
    <section>
        <div class="container">
            <div class="box">
                <h1>Add history</h1>
                <span v-on:click="closeAddHistory()" class="icon-btn-close"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg></span>
                <hr />

                <form @submit.prevent="submitForm" autocomplete="off">
                    <div class="inputBox">
                        <input id="historytitle" class="inputBox-field" type="text" v-model="PatientHistory.title"
                            @blur="HistoryTitle" @keyup="HistoryTitle">
                        <span>Title</span>
                        <p1 v-if="titleError" class="text-danger">{{ titleError }}</p1>
                    </div>

                    <div class="inputBox-textarea">
                        <textarea id="historydescription" class="inputBox-field-textarea" type="text"
                            v-model="PatientHistory.description" @blur="HistoryDescription"
                            @keyup="HistoryDescription"></textarea>
                        <span>Description</span>
                        <p1 v-if="descriptionError" class="text-danger-description">{{ descriptionError }}</p1>
                    </div>

                    <button class="btn-save" type="submit">
                        <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg></span>
                        <span> Save</span>
                    </button>
                </form>
                <a class="btn-cancel" v-on:click="closeAddHistory()">
                    <span class="icon-btn-cancel"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg></span>
                    <span> Cancel</span>
                </a>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            PatientHistory: {
                doctor: '',
                title: '',
                description: '',
                patientId: '',
            },

            titleError: '',
            descriptionError: ''
        }
    },
    props: [
        'currentPatient'
    ],
    emits: [
        "changeAddHistoryComponent"
    ],
    mounted() {
        this.PatientHistory.patientId = this.currentPatient.id
    },
    methods: {
        closeAddHistory() {
            this.$emit('changeAddHistoryComponent', this.PatientHistory)
        },
        HistoryTitle() {
            this.titleError = checkHistoryTitle(this.PatientHistory.title)
        },
        HistoryDescription() {
            this.descriptionError = checkHistoryDescription(this.PatientHistory.description)
        },
        async submitForm() {
            this.HistoryTitle();
            this.HistoryDescription();

            if (this.titleError == '' && this.descriptionError == '') {
                sessionStorage.setItem("DoctorName", "Pieter  van de Buurt")
                this.PatientHistory.doctor = sessionStorage.getItem("DoctorName")

                if (await AddNewPatientHistory(this.PatientHistory)) {
                    const id = 1;
                    const message = 'Patient history added';
                    AlertMessage(id, message);

                    this.closeAddHistory();
                } else {
                    const id = 2;
                    const message = 'Something went wrong';
                    AlertMessage(id, message);
                }   
            } else {
                const id = 2;
                const message = 'Please fill in all required forms correctly';
                AlertMessage(id, message);
            }
        }
    }
}
</script>


<style scoped>
@import '../styles/components/addpatienthistory.css';
</style>