<script setup>

</script>

<template>
    <header>
        <a href="/" class="logo">EPD</a>
        <nav class="navbar">
            <ul>
                <li>
                    <p class="text-time">{{ timestamp }}</p>
                </li>
                <li v-on:click="switchDarkLightMode()">
                    <span class="icon" v-if="lightmode == true"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                        </svg></span>
                    <span class="icon" v-if="lightmode == false"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                        </svg></span>
                    <label class="switch">
                        <input type="checkbox" id="isadmin">
                        <span class="slider round"></span>
                    </label>
                </li>
                <li><a href="#"><img src="./icons/hasbullah.png" class="profile"> <span class="text">Profile</span><span
                            class="dropdown-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg></span></a>

                    <ul>
                        <li>
                            <p><img src="./icons/hasbullah.png" class="profile-menu"> Hasbulla Magomedov</p>
                        </li>
                        <li>
                            <hr><br />
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                    </svg></span>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                    </svg></span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg></span>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            lightmode: true,
            timestamp: ''
        }
    },
    props: [
        'getLightmode'
    ],
    mounted() {
        this.lightmode = JSON.parse(localStorage.getItem('darkmode'));
        var cb = document.getElementById("isadmin");
        cb.checked = this.lightmode;

        this.switchDarkLightMode();
    },
    created() {
        setInterval(this.getCurrentDateTime, 5000);
    },
    methods: {
        getDarkLightMode() {
            var cb = document.getElementById("isadmin");

            if (cb.checked == true) { this.lightmode = true }
            else { this.lightmode = false }
        },
        switchDarkLightMode() {
            this.getDarkLightMode();
            if (this.lightmode == true) {
                document.documentElement.style.setProperty('--main-colour', '#BB86FC');
                document.documentElement.style.setProperty('--white', '#181818');
                document.documentElement.style.setProperty('--black', '#fff');
                document.documentElement.style.setProperty('--background', '#242526');
                document.documentElement.style.setProperty('--text-background', '#242526');
                document.documentElement.style.setProperty('--darkbackground', '#181818');
                this.lightmode = false;
                localStorage.setItem('darkmode', !this.lightmode)
            }
            else {
                document.documentElement.style.setProperty('--main-colour', '#10BBE5');
                document.documentElement.style.setProperty('--white', '#fff');
                document.documentElement.style.setProperty('--black', '#000000');
                document.documentElement.style.setProperty('--background', '#ccc');
                document.documentElement.style.setProperty('--text-background', '#E8E8E8');
                document.documentElement.style.setProperty('--darkbackground', '#383838');
                this.lightmode = true;
                localStorage.setItem('darkmode', !this.lightmode)
            }
        },
        getCurrentDateTime() {
            const today = new Date();
            let formattedHours = today.getHours().toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            let formattedMinutes = today.getMinutes().toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            this.timestamp = formattedHours + ":" + formattedMinutes;
        }
    }
}
</script>

<style scoped>
@import "../styles/components/header.css";
</style>