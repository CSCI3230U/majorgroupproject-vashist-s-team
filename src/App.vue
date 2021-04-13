<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <HandF />
    <div v-if="userToken">
          <functionLayout/>
    </div>
    <router-view/>    

  </div>
</template>


<script>

import HandF from './components/HandF.vue'
import functionLayout from './views/layouts.vue'
export default {
    computed:{
      userToken(){
          return this.$store.state.token;
      }
  },
  components:{HandF, functionLayout},
  name: 'App'
}
</script>

<style>

</style>
