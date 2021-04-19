<template>
  <div>
    <section class="hero has-background-link-light is-fullheight">
      <div class="box my-6 mx-5">
        <section class="section is-large my-6" id="faq_box">
  
          <button class="question">q1</button>
          <div class="answer">
            <p>Lorem iadsfasfasfasfdafdas</p>
          </div>

          <button class="question">q2</button>
          <div class="answer">
            <p>Lorem Lorem iadsfasfasfasfdafdas</p>
          </div>

          <button class="question">q3</button>
          <div class="answer">
            <p>Lorem Lorem iadsfasfasfasfdafdas</p>
          </div>

        </section>

      </div>
    </section>
  </div>
</template>


<script>
export default {
  mounted() {
    // removes the second navbar
    console.log("remving");
    sessionStorage.setItem("type", false);
    this.$store.commit("setNavFalse", false);

    //https://www.w3schools.com/howto/howto_js_accordion.asp
    var ques = document.getElementsByClassName("question");
    for (var i = 0; i < ques.length; i++) {
      ques[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var ans = this.nextElementSibling;
        if (ans.style.display ==="block") {
          ans.style.display="none";
        } else {
          ans.style.display = "block";
        }
      });
    }

  },
};
</script>

<style >
.box {
  width: 98%;
}
#faq_box {
  position: relative;
  padding: 0;
}

.question {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  text-align: middle;
  border: none;
  outline-color: rgb(87, 145, 216);
  font-size: 20px;
}
/* change backgorund colours when the question is clicked on by or hover uponed */
.active, .question:hover {
  background-color: rgb(238,243,252);
}
/* styling for the answer */
.answer {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

</style>