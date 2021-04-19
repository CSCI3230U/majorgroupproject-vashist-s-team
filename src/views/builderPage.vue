<template>
  <!-- box to build the website in -->
  <div>
    <section class="hero has-background-link-light is-fullheight">
      <div class="box my-6 mx-5">
        <section class="section is-large my-6" id="import_box"></section>
      </div>
    </section>
  </div>
</template>


<script>
export default {
    // load fucntions
  mounted() {
    const fileInput = document.querySelector("#import_box");
    fileInput.innerHTML = this.$store.state.code;
    // eslint-disable-next-line no-unused-vars
    this.$store.commit("setNavTrue");
  },
};
</script>

<style >
.box {
  width: 98%;
}
#import_box {
  position: relative;
  padding: 0;
}
</style>