<template>
    <div v-if="activeClass == 1" class="middle" id="success-alert">
        <div class="alert alert-success" v-on:click="closeAlert()">
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg></span>
            <strong>{{ message }}</strong>
        </div>
    </div>
    <div v-if="activeClass == 2" class="middle" id="danger-alert">
        <div class="alert alert-danger" v-on:click="closeAlert()">
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg></span>
            <strong>{{ message }}</strong>
        </div>
    </div>
</template>

<script>
import { currentAlert } from '../assets/global'
export default {
    data() {
        return {
            activeClass: 0,
            message: '',
        }
    },
    mounted() {
        window.addEventListener('Alert', () => {
            var obj = currentAlert;
            this.setAlert(obj.id, obj.message)
        })
    },
    methods: {
        setAlert(id, message) {
            this.activeClass = id;
            this.message = message;

            this.closeAlertTimer();
        },
        closeAlertTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(async () => {
                this.closeAlert();

            }, 4000);
        },
        closeAlert() {
            this.activeClass = 0;
        },
    }
}
</script>

<style scoped>
:root {
    --main-colour: #10BBE5;
    --secundary-colour: #EEA47FFF;
    --white: #fff;
    --text-background: #E8E8E8;
    --black: #000000;
    --background: #ccc;
    --darkbackground: #383838;
}

.middle {
    margin-left: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon {
    width: 28px;
    margin-right: 5px;
    margin-left: -5px;
    fill: var(--main-colour);
}

.alert {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 50px;
    position: fixed;
    opacity: 0.95;
    top: 85px;
    z-index: 5;
}

.alert-success {
    border: 1px solid #4CAF50;
}

.alert-danger {
    border: 1px solid #f44336;
}</style>