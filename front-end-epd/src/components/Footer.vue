<template>
    <footer>
        <div class="footer-border">
            <!-- <a class="logo">EPD</a> -->
            <!-- <img class="logo-img" src = "./icons/qbBlue.png" alt = "food"> -->
            <p class="text">Copyright © 2023-{{ autodate }} Mattijs Pronk, Inc - All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            autodate: ''
        }
    },
    mounted() {
        this.autoIncrement()
    },
    methods: {
        autoIncrement() {
            this.autodate = (new Date().getFullYear())
        }
    }
}
</script>

<style scoped>
@import '../styles/components/footer.css';
</style>