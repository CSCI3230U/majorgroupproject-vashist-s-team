<template>
<head>
</head>
    <body>
        <div>

            <div class="box my-5 mx-4">
                <div class="section is-large my-6" id="boxxx">
                    <p id="displaying"></p>
                </div>
            </div>
        </div>    
    </body>
</template>


<script>
export default({
      
      mounted :function(){
          this.display_code();
          
          },
      methods: {
          display_code(){
                const fileInput = document.querySelector('#file-js input[type=file]');
                fileInput.onchange = () => {
                    const reader = new FileReader();
                    var test = (document.querySelector('#boxxx'));
                    reader.onload = reading => {
                        test.outterHTML=(reading.target.result)
                        const filelist =(reading.target.result)
                        console.log(filelist);
                        document.getElementById("displaying").textContent = ""+filelist+"";
                    };
                    reader.readAsText(fileInput.files[0]);
                    // console.log(fileInput.files[0]);
                    console.log("new file selected:");
                    console.log(fileInput.files[0].name);
                }
            }
      }
  })


// window.onload = function(){
//     const fileInput = document.querySelector("#import_box");
//     // var displaying = document.getElementById("displaying");
//     // displaying.innerHTML = fileInput.innerHTML
//     console.log(fileInput.innerHTML);
// }
</script>

<style >
.box{
    width:98%;
    /* background-color:blanchedalmond!important; */
    /* background-color: red!important; */
    /* box-shadow:2rem!important; */
}

#import_box{
    padding:0;
}

</style>