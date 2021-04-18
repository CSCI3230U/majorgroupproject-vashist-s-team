<template>
        <div>
            <section class="hero has-background-link-light is-fullheight">
                    <div class="box my-5 mx-4">
                        <div class="section is-large my-6" id="import_box" >

                        </div>
                    </div>
            </section>
        </div>    
</template>


<script>
 
// function temp(){
//             console.log("sdf");
//             const fileInput = document.querySelector("#import_box");
//             return fileInput.innerHTML= this.$store.state.code;
//         }
//         temp();
export default({
    mounted(){
        const fileInput = document.querySelector("#import_box");
        fileInput.innerHTML= this.$store.state.code;
        // eslint-disable-next-line no-unused-vars
        this.$store.commit('setNavTrue');
    }
});
</script>

<style >
.box{
    width:98%;
    /* background-color:blanchedalmond!important; */
    /* background-color: red!important; */
    /* box-shadow:2rem!important; */
}
#import_box{
    position: relative;
    padding:0;
}
</style>