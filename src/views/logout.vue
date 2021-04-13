<template>
    <div class="login">
        <body id="loginBody">
            <h1>This is the logout page</h1>
        </body>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
    // name: App

   computed:{
        userToken(){
            return this.$store.state.token;
        }

    },



}
</script>

<style>
 @import '../assets/styles/HandF.css';

</style>
