<script setup>

defineProps({
    getPatientaddhistory: {
        required: true,
    },
    currentPatient: {
        required: true,
    },
});
</script>

<template>
    <section v-if="getPatientaddhistory">
        <div class="container">
            <div class="box2">
                <h1>Add patient history</h1>
                <button v-bind:disabled="enableBtn" class="btn-return" v-on:click="switchAddHistoryComponent">
                    <span class="icon-btn-return"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg></span>
                </button>
                <hr />
                <p class="p-trunc">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg></span>
                    Patient details:
                </p>

                <div v-if="Patient.imageUrl">
                    <img class="img" :src="Patient.imageUrl">
                </div>
                <div v-else>
                    <img class="img" src="./icons/stockprofileImage.png">
                </div><br />
                <p1 class="description">
                    <p2 class="details">Name: </p2> {{ Patient.firstName }} {{ Patient.infix }} {{ Patient.lastName }}
                </p1><br />
                <p1 class="description">
                    <p2 class="details">Insured: </p2>
                    <span v-if="Patient.insured" class="icon-insured-true"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg></span>
                    <span v-else class="icon-insured-false"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg></span>
                </p1>
            </div>
            <div class="box">
                <h2>Add new history</h2>

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


                <div class="align-txt-btn">
                    <div class="inputBox">
                        <input class="inputBox-imageurl" type="text" v-model="imageUrl" @blur="HistoryTitle"
                            @keyup="HistoryTitle">
                        <span>imageUrl</span>
                        <p1 v-if="titleError" class="text-danger">{{ titleError }}</p1>
                    </div>
                    <button class="btn-add" v-on:click="addImageToImageArray()">
                        <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                            </svg></span>
                        <span> Add</span>
                    </button>
                </div>


                <div class="img-array" v-for="item in PatientHistory.imageUrlList">

                    <div class="container2">
                        <img class="img-evidence" :src="item.imageUrl">
                        <div class="overlay">
                            <a v-on:click="removeImageFromArray(item.id)" class="icon-container" title="User Profile">
                                <span class="icon-remove"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg></span>
                            </a>
                        </div>
                    </div>
                </div>


                <button class="btn-save" type="submit">
                    <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg></span>
                    <span> Save</span>
                </button>
                <a class="btn-cancel" v-on:click="switchAddHistoryComponent">
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
                insured: this.currentPatient.insured,
            },

            PatientHistory: {
                doctor: '',
                title: '',
                description: '',
                imageUrlList: [],
                patientId: '',
            },

            imageUrl: '',
            titleError: '',
            descriptionError: ''
        }
    },
    emits: [
        "changePatientAddHistory"
    ],
    methods: {
        switchAddHistoryComponent() {
            this.$emit('changePatientAddHistory', true)
        },
        addImageToImageArray() {
            let generatedId = Math.random().toString(36).substr(2, 5);
            this.PatientHistory.imageUrlList.push({ id: generatedId, imageUrl: this.imageUrl })
        },
        removeImageFromArray(id) {
            let newList = this.PatientHistory.imageUrlList.filter((el) => el.id !== id);
            this.PatientHistory.imageUrlList = newList;
        }
    }
}
</script>

<style scoped>
@import '../styles/components/addpatienthistory.css';
</style>