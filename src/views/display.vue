<template>
  <!-- box to display the code in -->
  <body>
    <div>
      <div class="box my-5 mx-4">
        <div class="section is-large my-6" id="displayBox"></div>
      </div>
    </div>
  </body>
</template>


<script>
// the code from the builder page is displayed
export default {
  mounted() {
    console.log("test1");
    const display = document.querySelector("#displayBox");
    display.textContent = this.$store.state.code;
  },
};
</script>

<style >
.box {
  width: 98%;
}

#displayBox {
  padding: 0;
}
</style>