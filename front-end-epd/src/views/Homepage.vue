<script setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import Alert from '../components/Alert.vue';

import { SignalRHub } from '../assets/SignalR';
</script>

<template>
    <Header/>
    <Alert/>
    <Sidebar/>
    <Footer/>
</template>



<script>
export default{
    mounted(){
        this.signalr = new SignalRHub()
    }
}
</script>

<style scoped>

</style>