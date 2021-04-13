<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <HandF />
    <router-view/>    

  </div>
</template>


<script>

import HandF from './components/HandF.vue'
export default {
  components:{HandF},
  name: 'App'
}
</script>

<style>

</style>
