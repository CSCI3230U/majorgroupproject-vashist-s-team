<template>
    <div class="login">
        <body id="loginBody">
<!-- Top navbar dynamically loaded -->

<!-- Middle login form -->
    <div class = "container is-centered">
        <div class ="column is-multiline is-mobile my-6">
            <div class ="column is-4 is-offset-4"> 
                <div class="box" id="box">
                    <!-- Input for Email -->
                    <form @submit.prevent = "sendInfo()" action = "/login" method="post">
         
                        <label class ="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="Email" placeholder="e.g janedoe@gmail.com" v-model ="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <!-- <p class="help is-success">This email is available</p>      -->
                        </div>
                        <!-- Input for Password -->
                        <label class ="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="Password" placeholder="••••••••••••" v-model ="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                            <p class="has-text-danger has-text-weight-bold	" ref="error"></p>
                        </div>
                        <div class ="column has-text-centered">
                            <button id="loginSubmitButton" class ="button my-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            
        </div>
    </div>




</body>
    </div>
</template>
<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
    data(){
        return{
            Email: '',
            Password: ''
                
        }
    },computed:{
        userInfo(){
            return this.$store.state.token;
        }

    },methods: {
        async sendInfo(){

            await axios.post('http://localhost:4000/login',{
                email: this.Email,
                password: this.Password
                

            })
                .then((response)=>{
                    console.log(response["data"]["error"]);
                    if(response["data"]["error"]){
                        this.$refs.error.innerText = response["data"]["error"];
                        console.log("hi");
                    }else{
                        sessionStorage.setItem("token",response["data"]);
                        sessionStorage.setItem("type",true);
                        this.$store.commit('setNavTrue');
                        this.$store.commit('setToken',response["data"]);
                     
                        this.$router.push('/builderPage');

                    }

                });

        }
    }


}

</script>
<style lang ="scss">
</style>