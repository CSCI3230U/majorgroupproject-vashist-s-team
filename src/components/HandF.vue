
<template>

    <body id="loginBody">
        <nav class="navbar is-dark">

            <div id="navbarHeader" class="navbar-menu">
                <div class="navbar-start">
                    <a href="homePage.html">
                        <h1 id="Zing" class="title has-text-white my-2 mx-3">Zing!</h1>
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div v-if="userToken">
                            <div class="button" v-on:click="logout()">
                                <!-- <router-link to="/logout" class="button is-light">Logout</router-link> -->
                                Logout
                                
                            </div>
                        </div>
                        <div v-else>
                            <div class="buttons">
                                <router-link to="/login" class="button is-light">Login</router-link>
                                <router-link to="/signup" class="button is-light">Signup</router-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    
    <div class ="bottom-nav" id="bottom">
        <div class ="navbar is-dark">
            <div class ="navbar-start">
                <div class ="control is-size-5 has-icons-left has-icons-right my-3 mx-3">
                    <span class="icon-text is-small ">
                        <i class ="fas fa-copyright">
                        </i>
                        
                    </span>
                    <span>2021</span>
                </div>
            </div>
            <div class ="navbar-end">
                <div class ="control is-size-5 has-icons-right my-3 mx-3" id ="FAQ">
                    <a class ="links" id="FAQ" target="_blank">
                        <span class="icon-text is-small">
                            <i class ="far fa-question-circle">
    
                            </i>
                        </span>
                        <span >FAQ</span>
                    </a>
                </div>
                <div class ="control is-size-5 has-icons-right my-3 mx-3" >
                    <a class ="links" id="twit" href="https://twitter.com" target="_blank">
                        <span class="icon-text is-small">
                            <i class ="fab fa-twitter">
    
                            </i>
                        </span>
                        <span >Twitter</span>
                    </a>
                </div>

                <div class ="control is-size-5 has-icons-right my-3 mx-3">
                    <a class ="links" id="yt" href="https://youtube.com" target="_blank">
                        <span class="icon-text is-small">
                            <i class ="fab fa-youtube">
    
                            </i>
                        </span>
                        <span >Youtube</span>
                    </a>
                </div>


            </div>

        </div>
    </div>
    </body>
               
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
    methods:{
       async logout(){
            await axios.post('http://localhost:4000/logout')
            .then((response)=>{
                console.log("User logged out!");
                sessionStorage.setItem("token",response["data"]);
                this.$store.commit('setToken',response["data"]);
                this.$store.commit('setCode'," ");
                //route to homepag btw
                this.$router.push("/homepage");
                },
                (error) =>{
                    console.log(error);
                });
        }

                    
    },


}
</script>

<style>
 @import '../assets/styles/HandF.css';

</style>
