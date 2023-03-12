<script setup>
import { UpdatePatientDetails } from '../assets/Patient'
import { AlertMessage } from '../assets/global';

import {
    checkFirstName, checkLastName, checkCitizenServiceNumber, checkEmail, checkDateOfBirth, checkImg

} from '../assets/Validate';

defineProps({
    currentPatient: {
        required: true,
    },
});
</script>

<template>
    <section>
        <div class="container">
            <div class="box">
                <h1>Edit details</h1>
                <span v-on:click="closeEditPatientDetails(null)" class="icon-btn-close"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg></span>
                <hr />

                <form @submit.prevent="submitForm" autocomplete="off">
                    <div class="inputBox">
                        <input id="img" class="inputBox-field" type="text" v-model="Patient.imageUrl"
                            placeholder="https://imgur.png" @blur="Img" @keyup="Img">
                        <span>Image URL</span>
                        <p1 v-if="imgError" class="text-danger">{{ imgError }}</p1>
                    </div>
                    <div class="inputBox-align">
                        <div class="inputBox-first">
                            <input id="firstname" class="inputBox-field" type="text" v-model="Patient.firstName"
                                @blur="FirstName" @keyup="FirstName">
                            <span>Firstname <svg class="icon-required" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M186 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L330 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L282 339.1V480c0 17.7-14.3 32-32 32H218c-17.7 0-32-14.3-32-32V339.1L64 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7C-4.5 354.8 .7 335.3 16 326.4L138 256 16 185.6C.7 176.7-4.5 157.2 4.3 141.9l16-27.7C29.1 98.8 48.7 93.6 64 102.4l122 70.4V32z" />
                                </svg></span>
                            <p1 v-if="firstnameError" class="text-danger">{{ firstnameError }}</p1>
                        </div>
                        <div class="inputBox-middle">
                            <input class="inputBox-field" type="text" v-model="Patient.infix">
                            <span>Infix</span>
                        </div>
                        <div class="inputBox-last">
                            <input id="lastname" class="inputBox-field" type="text" v-model="Patient.lastName"
                                @blur="LastName" @keyup="LastName">
                            <span>Lastname <svg class="icon-required" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M186 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L330 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L282 339.1V480c0 17.7-14.3 32-32 32H218c-17.7 0-32-14.3-32-32V339.1L64 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7C-4.5 354.8 .7 335.3 16 326.4L138 256 16 185.6C.7 176.7-4.5 157.2 4.3 141.9l16-27.7C29.1 98.8 48.7 93.6 64 102.4l122 70.4V32z" />
                                </svg></span>
                            <p1 v-if="lastnameError" class="text-danger">{{ lastnameError }}</p1>
                        </div>
                    </div>
                    <div class="inputBox-align">
                        <div class="inputBox-dob">
                            <input id="dob" class="inputBox-field" type="date" v-model="Patient.dateOfBirth"
                                @blur="DateOfBirth" @keyup="DateOfBirth">
                            <span>DateOfBirth <svg class="icon-required" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M186 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L330 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L282 339.1V480c0 17.7-14.3 32-32 32H218c-17.7 0-32-14.3-32-32V339.1L64 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7C-4.5 354.8 .7 335.3 16 326.4L138 256 16 185.6C.7 176.7-4.5 157.2 4.3 141.9l16-27.7C29.1 98.8 48.7 93.6 64 102.4l122 70.4V32z" />
                                </svg></span>
                            <p1 v-if="dobError" class="text-danger">{{ dobError }}</p1>
                        </div>
                        <div class="inputBox-csn">
                            <input id="csn" class="inputBox-field" type="text" v-model="Patient.citizenServiceNumber"
                                @blur="CitizenServiceNumber" @keyup="CitizenServiceNumber">
                            <span>CitizenServiceNumber <svg class="icon-required" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M186 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L330 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L282 339.1V480c0 17.7-14.3 32-32 32H218c-17.7 0-32-14.3-32-32V339.1L64 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7C-4.5 354.8 .7 335.3 16 326.4L138 256 16 185.6C.7 176.7-4.5 157.2 4.3 141.9l16-27.7C29.1 98.8 48.7 93.6 64 102.4l122 70.4V32z" />
                                </svg></span>
                            <p1 v-if="csnError" class="text-danger">{{ csnError }}</p1>
                        </div>
                    </div>
                    <div class="inputBox-align">
                        <div class="inputBox-dob">
                            <input class="inputBox-field" type="text" v-model="Patient.adress">
                            <span>Adress</span>
                        </div>
                        <div class="inputBox-csn">
                            <input class="inputBox-field" type="text" v-model="Patient.phone">
                            <span>Phone</span>
                        </div>
                    </div>
                    <div class="inputBox">
                        <input id="email" class="inputBox-field" type="text" v-model="Patient.email"
                            placeholder="example@example.com" @blur="Email" @keyup="Email">
                        <span>Email</span>
                        <p1 v-if="emailError" class="text-danger">{{ emailError }}</p1>
                    </div>
                    <p2 class="details">Insured:</p2><br />
                    <label class="switch">
                        <input type="checkbox" id="isadmin" v-model="Patient.insured">
                        <span class="slider round"></span>
                    </label>
                    <br />
                    <button class="btn-save" type="submit">
                        <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg></span>
                        <span> Save</span>
                    </button>
                </form>
                <a class="btn-cancel" v-on:click="closeEditPatientDetails(null)">
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
            Patient: {
                id: this.currentPatient.id,
                imageUrl: this.currentPatient.imageUrl,
                firstName: this.currentPatient.firstName,
                infix: this.currentPatient.infix,
                lastName: this.currentPatient.lastName,
                dateOfBirth: this.currentPatient.dateOfBirth,
                citizenServiceNumber: this.currentPatient.citizenServiceNumber,
                adress: this.currentPatient.adress,
                phoneNumber: this.currentPatient.phoneNumber,
                email: this.currentPatient.email,
                insured: this.currentPatient.insured,
            },

            imgError: '',
            firstnameError: '',
            lastnameError: '',
            csnError: '',
            emailError: '',
            dobError: '',
        }
    },
    emits: [
        "changeEditPatientDetailsComponent"
    ],
    methods: {
        closeEditPatientDetails(item) {
            this.$emit('changeEditPatientDetailsComponent', item)
        },
        async submitForm() {
            this.Img();
            this.FirstName();
            this.LastName();
            this.CitizenServiceNumber();
            this.Email();
            this.DateOfBirth();

            if (this.imgError == '' && this.firstnameError == '' && this.lastnameError == '' && this.csnError == '' && this.emailError == '' && this.dobError == '') {
                if (await UpdatePatientDetails(this.Patient)) {
                    const id = 1;
                    const message = 'Patient has been updated';
                    AlertMessage(id, message);

                    this.closeEditPatientDetails(this.Patient)
                } else {
                    const id = 2;
                    const message = 'Something went wrong';
                    AlertMessage(id, message);
                }
            }
            else {
                const id = 2;
                const message = 'Please fill in all required forms correctly';
                AlertMessage(id, message);
            }
        },
        Img() {
            this.imgError = checkImg(this.Patient.imageUrl);
        },
        FirstName() {
            this.firstnameError = checkFirstName(this.Patient.firstName);
        },
        LastName() {
            this.lastnameError = checkLastName(this.Patient.lastName);
        },
        CitizenServiceNumber() {
            this.csnError = checkCitizenServiceNumber(this.Patient.citizenServiceNumber);
        },
        Email() {
            this.emailError = checkEmail(this.Patient.email);
        },
        DateOfBirth() {
            this.dobError = checkDateOfBirth(this.Patient.dateOfBirth);
        }
    }
}
</script>


<style scoped>
@import '../styles/components/editpatientdetails.css';
</style>