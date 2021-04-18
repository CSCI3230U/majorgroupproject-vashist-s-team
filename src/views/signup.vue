<template>
    <div class="signup">
        <body>
            <!-- Top navbar dynamically loaded -->
            <!-- Middle login form -->
                    <div class ="column is-multiline is-mobile my-6" >
                        <!-- <div class="column is-one-third"><div class="box">hi</div> -->
                        <div class ="column  is-4 is-offset-4">
                            <div class="box ">
                                <form @submit.prevent = "sendInfo()" action = "/signup" method="post">
                                    <!-- Input for Email -->
                                    <label class ="label">Email</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" placeholder="e.g janedoe@gmail.com" v-model ="Email">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <p class="has-text-danger has-text-weight-bold" ref="emailError"></p>

                                        <!-- <p class="help is-success">This email is available</p>      -->
                                    </div>
                    
                                    <!-- Input for Name -->
                                    <label class ="label">Full Name</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input" type="name" placeholder="e.g Jane Doe " v-model="Fullname">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                        <!-- <p class="help is-success">This email is available</p>      -->
                                    </div>
                    
                                    <label class ="label">Address</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input" type="address" placeholder="e.g 2000 Simcoe St N" v-model="Address">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-map-marker "></i>
                                        </span>
                                        <!-- <p class="help is-success">This email is available</p>      -->
                                    </div>
                                    
                                    <!-- Input for Password -->
                                    <label class ="label">Password</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input" type="password" placeholder="••••••••••••" v-model="Password">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                        <p class="has-text-danger has-text-weight-bold	" ref="passwordError"></p>

                                    </div>
                                    <div class ="column has-text-centered">
                                        <button id="signupSubmitButton" class ="button my-4">
                                            Submit
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
            <!-- bottom navbar -->

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
            Fullname: '',
            Address: '',
            Password: ''
                
        }
    }, methods: {
        async sendInfo(){

            await axios.post('http://localhost:4000/signup',{
                email: this.Email,
                name: this.Fullname,
                address: this.Address,
                password: this.Password
            })
                .then((response)=>{
                    this.$refs.emailError.innerText = " "
                    this.$refs.passwordError.innerText = " ";

                    if(response["data"]["email"]){
                        this.$refs.emailError.innerText = response["data"]["error"];
                        console.log("hi2");
                    }else if(response["data"]["password"]){
                        this.$refs.passwordError.innerText = response["data"]["error"];
                        console.log("hi1");
                    }else{
                    sessionStorage.setItem("token",response["data"]);
                    this.$store.commit('setNavTrue');
                    this.$store.commit('setToken',response["data"]);
                     
                    this.$store.commit('setToken',response["data"]);
                    this.$router.push('/homepage')
                    }

                }, (error) =>{
                    console.log(error);
                });

        }
    }


}

</script>
<style lang ="scss">
</style>