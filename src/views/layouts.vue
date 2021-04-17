<template>

    <nav class="navbar is-dark" role="navigation" aria-label= "main navigation">
        <div class="navbar-brand">
                               
        </div>
        <div id="navbarLinks" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable ">
                    <a class="navbar-link">
                        Link 1
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 1
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 2
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 3
                        </a>                                              
                    </div>
                </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 2
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 21
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 22
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 23
                        </a>                                              
                    </div>
                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 3
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 31
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 32
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 33
                        </a>                                              
                    </div>
                </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Link 4
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Sublink 41
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 42
                        </a>
                        <hr class="navbar-divider">
                         <a class="navbar-item">
                            Sublink 43
                        </a>                                              
                    </div>
                </div>
                
                <div class="buttons">
                    <router-link to="/display" class="button is-light" >Display Code</router-link>
                </div>
  
            </div>
            <!-- uplaod button -->
             <div class="navbar-end">
                 <button class="button" v-on:click="updateSave()">Save</button>

                 <!-- save button -->
                     <div id="Exporting" class="file has-name" type="file">
                        <label class="file-label">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-download"></i>
                                </span>
                                <span class="file-label">
                                    Export
                                </span>
                            </span>
                        </label>  
                    </div>

                    <div id="file-import" class="file has-name" type="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" >
                            <span class="file-cta">
                                <span class="file-icon">
                                <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>
   
            </div>
            
            <div id="myModal" class="modal">
                <div class="modal-content" id="content">
                    <input class="input" type="text" id="usergiven_filename">
                    <button class="button" type="save" id="save">Save</button>
                    <button class="button" id="cancel">Cancel</button>
                </div>
            </div>
            

        </div>
    </nav>


</template>
<script>
    
  export default({
      
      mounted :function(){
          this.importFile();
          this.exportFile();    
          
          },
      methods: {
          importFile(){
                const fileInput = document.querySelector('#file-import input[type=file]');
                fileInput.onchange = () => {
                    const reader = new FileReader();
                    var test = (document.querySelector('#import_box'));
                  
                    reader.onload = reading => {
                        test.innerHTML=(reading.target.result);
                     console.log(reading.target.result);
                     }
                   
                    reader.readAsText(fileInput.files[0]);
                    console.log("new file selected:");
                  
                    console.log(fileInput.files[0].name);
                }
            },
        exportFile(){
            const testButton = document.querySelector('#Exporting');
            testButton.onclick = () => {
                var modal = document.getElementById("myModal");
                var save = document.getElementById("save");
                var cancel = document.getElementById("cancel");
                modal.setAttribute("class","modal is-active");
                modal.style.display = "block";

                cancel.onclick = function(){
                    modal.style.display = "none";
                }
                save.onclick = function(){
                    
                    const fileInput = document.querySelector("#import_box");
                    var fileName = document.getElementById("usergiven_filename");
                  
                    console.log(fileInput.innerHTML);
                    var button = document.createElement("a");
                    button.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileInput.innerHTML));
                    button.setAttribute('download',fileName.value+".html");
                    button.click();
                    
                    modal.style.display = "none";
                   
                }
            
            }
        },
        updateSave(){
           
            console.log("testuing");
            const fileInput = document.querySelector("#import_box");
            this.$store.commit('setCode',fileInput.innerHTML);
            
        }
      }
  })
   
</script>
<style lang ="css">
.modal {
  background-color: rgba(0, 0, 0, 0.4);

}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
  
}

#content{
    margin-top:30%;
}

#file-import{
    margin-right: 7px;  
}
#Exporting, .button{
    margin-right: 7px;
}
</style>
