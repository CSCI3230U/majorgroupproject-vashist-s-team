
<template>
  <body>
    <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <HandF />
      <div v-if="userToken">
            <functionLayout/>
            <builderPage/>
      </div>
      <router-view/>    

    </div>
  </body>
  <body>
    
    <div class="section is-large my-6">
    </div>
    
  </body>
</template>


<script>

import HandF from './components/HandF.vue'
import functionLayout from './views/layouts.vue'
import builderPage from './views/builderPage.vue'

export default {
    computed:{
      userToken(){
          return this.$store.state.token;
      }
  },
  components:{HandF, functionLayout,builderPage},
  name: 'App'
}
</script>

<style>
body{

    margin:0!important;
    height:100%!important;
    overflow: hidden!important;
    background-color:blanchedalmond!important;

}
</style>
