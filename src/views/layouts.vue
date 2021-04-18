<template>
    <div v-show="navType">
        <nav class="navbar is-dark" role="navigation" aria-label= "main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>                               
            </div>
            <div id="navbarLinks" class="navbar-menu">

                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable ">
                        <a class="navbar-link">
                            Add New...
                        </a>
                        <div id="new" class="navbar-dropdown">
                            <a id="h1" value="header" class="navbar-item">
                                Header
                            </a>
                            <hr class="navbar-divider">
                            <a id="p" value="paragraph" class="navbar-item">
                                Paragraph
                            </a>
                            <hr class="navbar-divider">
                            <a id="a" value="link" class="navbar-item">
                                Link
                            </a>                                              
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a id="new-image-link" class="navbar-link">
                            New Image...
                        </a>
                        <div id="image" class="navbar-dropdown">
                            <a id="small-image" class="navbar-item">
                                Small
                            </a>
                            <hr class="navbar-divider">
                            <a id="medium-image" class="navbar-item">
                                Medium
                            </a>
                            <hr class="navbar-divider">
                            <a id="large-image" class="navbar-item">
                                Large
                            </a>                                              
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Text Align...
                        </a>
                        <div id="align" class="navbar-dropdown">
                            <a id="align-left" class="navbar-item">
                                Left
                            </a>
                            <hr class="navbar-divider">
                            <a id="align-centre" class="navbar-item">
                                Centre
                            </a>
                            <hr class="navbar-divider">
                            <a id="align-right" class="navbar-item">
                                Right
                            </a>                                              
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Font...
                        </a>
                        <div id="apply-font" class="navbar-dropdown">
                            <a id="bold-font" class="navbar-item">
                                Bold
                            </a>
                            <hr class="navbar-divider">
                            <a id="italic-font" class="navbar-item">
                                Italic
                            </a>
                            <hr class="navbar-divider">
                            <a id="underline-font" class="navbar-item">
                                Underline
                            </a>                                              
                        </div>
                    </div>

                    <div class="navbar-item has-dropdown is-hoverable ">
                        <a class="navbar-link">
                            Color Selector
                        </a>
                        <div id="new" class="navbar-dropdown">
                            <input type="color" id='Colorchanger' class="input" >                                           
                        </div>
                    </div>

                    

                </div>

                
                <!-- uplaod button -->
                <div class="navbar-end">


                    <div class="navbar-item has-dropdown is-hoverable ">
                        <a class="navbar-link">
                            File
                        </a>

                        <div id="new" class="navbar-dropdown ">
                            <!-- has-name is-dark has-text-warning -->
                            <div class = "navbar-item">
                                <div id="Exporting" class="file is-white" type="file">
                                    <label class="file-label">
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-download"></i>
                                            </span>
                                            <span class="file-label">Export</span>
                                        </span>
                                    </label>  
                                </div> 
                            </div> 

                            <div class= "navbar-item">
                                <div id="file-import" class="file is-white" type="file">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="resume" >
                                        <span class="file-cta">
                                            <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">Choose a file…</span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                        

                        </div>
                        
                        


                    </div>


                    <!-- <button class="button" v-on:click="updateSave()">Save</button> -->

                    <div class="button is-dark">
                        <router-link to="/display" class="has-text-white" v-on:click="updateSave()">Display Code</router-link>
                    </div>

                    

                    <!-- save button -->
                    

                    
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

    </div>

</template>
<script>
    // Importing jQuery
    import jQuery from "jquery";
    const $ = jQuery;
    window.$ = $;
    // A count variable to keep track of all the elements added to the builder page
    var count = 0;
    // A variable to keep track of the currently selected element
    var currentElement;
    // A function that will append a new element to the building space, depending on
    // the currently selected element and the type of element to be added
    function addElement(tag, name, newID, currentElement) {
        // Creating the new element based on the tag that was passed to the function
        let element = document.createElement(tag);
        element.innerHTML = `[New ${name} element created]`;
        element.id = `${name}${newID}`;
        // If there is an element currently selected, append the new element after
        // the currently selected element. Otherwise, append the element to the
        // bottom of the page
        if (currentElement) {
            $(element).insertAfter(`#${currentElement}`);
        }
        else {
            document.querySelector('#import_box').appendChild(element);
        }
    }
    // A function that will append a new image to the building space, depending on
    // the currently selected element
    function addImage(size, url, newID, currentElement) {
        // Creating the new image based on the size that was passed to the function
        let image = document.createElement('img');
        image.src = url;
        image.id = `image${newID}`;
        image.className = `image ${size}`;
        // If there is an element currently selected, append the image after the
        // currently selected element. Otherwise, append the image to the bottom
        // of the page
        if (currentElement) {
            $(image).insertAfter(`#${currentElement}`);
        }
        else {
            document.querySelector('#import_box').appendChild(image);
        }
    }
   
    
  export default({
      
    mounted :function(){
        this.importFile();
        this.exportFile(); 
        this.features();
        this.mobilejs();   
        
        },
    computed:{
            navType(){
                console.log(this.$store.state.navType)
                return this.$store.state.navType;
            }

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
                     var styleSheet = `#import_box h1 {
                                        font-size: 2em;
                                        font-weight: bold;
                                    }
                                    #import_box *:hover {
                                        border: 1px solid black;
                                        border-radius: 5px;
                                    }
                                    #import_box * {
                                        border: 1px solid transparent;
                                        margin-top: 0.5rem;
                                        margin-bottom: 0.5rem;
                                        word-wrap: break-word;
                                    }

                                    /* This class hides an element when it is being edited*/
                                    .hidden {
                                        display: none;
                                    }
                                    /* These classes are used to align text */
                                    .align-left {
                                        text-align: left;
                                    }
                                    .align-centre {
                                        text-align: center;
                                    }
                                    .align-right {
                                        text-align: right;
                                    }
                                    /* This class is used to expand the navbar section when the user inputs a link */
                                    .expand-link {
                                        width: 35rem;
                                    }
                                    /* These classes are used to size different images */
                                    .Small {
                                        width: 33.33%;
                                        height: auto;
                                    }
                                    .Medium {
                                        width: 66.66%;
                                        height: auto;
                                    }
                                    .Large {
                                        width: 100%;
                                        height: auto;
                                    }
                                    /* These classes are used to change the font of an element */
                                    .bold-font {
                                        font-weight: bold;
                                    }
                                    .italic-font {
                                        font-style: italic;
                                    }
                                    .underline-font {
                                        text-decoration: underline;
                                    }
                                    `;
                    const fileInput = document.querySelector("#import_box");
                    var fileName = document.getElementById("usergiven_filename");
                  
                    console.log(fileInput.innerHTML);
                    var button = document.createElement("a");
                    button.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileInput.innerHTML + "<style>" +styleSheet + "</style>"));
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
            
        },
        features(){
             // Adding the new element that was clicked from the bulma navbar menu. If there
        // is a current element selected, append the new element underneath the current
        // element
        $('#new a').click(function() {
            count++;
            addElement($(this).attr('id'), $(this).attr('value'), count, currentElement);
        });
        // When an element is clicked, set it to the current element
        $(document).on('click', '#import_box *', function() {
            $('#import_box *').removeClass('current');
            currentElement = $(this).attr('id');
            $(this).addClass('current');
        });
        // If the delete key (del) is pressed, delete the current element and
        // set the current element to undefined
        $(document).on('keyup', function(key) {
            let keyPressed = key.which;
            if (keyPressed == 46) {
                $(`#${currentElement}`).remove();
                currentElement = '';
            }
        });
        $('#Colorchanger').change(function(){
            console.log($('#Colorchanger').val());
            var color = $('#Colorchanger').val();
            $(`#${currentElement}`).removeClass('current');
            $(`#${currentElement}`).css('background' ,color);
        });
        // Align the selected element's text when one of the options under align is
        // selected in the builder navbar
        $('#align a').click(function() {
            $(`#${currentElement}`).removeClass('align-left align-centre align-right');
            $(`#${currentElement}`).addClass($(this).attr('id'));
        });
        // Apply the specified font to the selected element
        $('#apply-font a').click(function() {
            if ($(`#${currentElement}`).hasClass($(this).attr('id'))) {
                $(`#${currentElement}`).removeClass($(this).attr('id'));
            }
            else {
                $(`#${currentElement}`).addClass($(this).attr('id'));
            }
        });
        // When an element in the builder is double-clicked, add a text field where the
        // user can edit the inner-html of that element
        $(document).on('dblclick', '#import_box *', function() {
            // Checking to see if we already have a text area to prevent duplicate
            // textareas from appearing
            if ($(this).attr('id') != 'tempArea' && $(this).hasClass('image') == false) {
                // Hidding the current element
                let currentElement = $(this);
                currentElement.addClass('hidden');
                // Adding a temporary textarea for editing
                let tempTextArea = document.createElement('textarea');
                tempTextArea.innerHTML = $(this).html();
                tempTextArea.id = 'tempArea';
                tempTextArea.className = "textarea has-fixed-size";
                // Insert the temporary textarea for editing
                $(tempTextArea).insertAfter($(this));
                // If enter is pressed, display the current element with the value from
                // the textarea, and remove the temporary textarea used for editing
                $(tempTextArea).keypress(function(key) {
                    let keyPressed = key.which;
                    if (keyPressed == 13) {
                        currentElement.html($(this).val());
                        $(this).remove();
                        currentElement.removeClass('hidden');
                    } 
                });
            } 
        });
        // Adding a new image from the bulma navbar menu based on the selected size
        $('#image a').click(function() {
            // Checking to see if the element has already been clicked. If the element
            // has been clicked, wait until the new photo is added to the builder page
            if ($(this).hasClass('clicked') == false) {
                // Adding a class to show that the element has been clicked
                $(this).addClass('clicked');
                // A variable to keep track of the original html in the bulma navbar menu
                let currentHTML =  $(this).html();
                // Expanding the bulma navbar "New Image..." link so the user can see the
                // image url that they are entering
                $('#new-image-link').addClass('expand-link');
                // Adding a new input field inside the navbar item for the user to enter
                // their image url
                $(this).html('<input id="tempImgInput" class="input is-small" type="text" placeholder="Enter Image URL">');
                // When enter is pressed, create the new image based on the selected size
                $(this).keypress(function(key) {
                    let keyPressed = key.which;
                    if ((keyPressed == 13) && (typeof $(this).children().val() !== 'undefined')) {
                        console.log($(this).children().val());
                        let url = $(this).children().val();
                        count++;
                        addImage(currentHTML, url, count, currentElement);
                        $('#new-image-link').removeClass('expand-link');
                        $(this).html(currentHTML);
                        $(this).removeClass('clicked');
                    }
                    else if (keyPressed == 13) {
                        $('#new-image-link').removeClass('expand-link');
                        $(this).html(currentHTML);
                        $(this).removeClass('clicked');
                    }
                });
                // Focusing on the input field
                $('#tempImgInput').focus();
            }
        });
        },
        mobilejs(){
            // import jQuery from "jquery";
            $(".navbar-burger").click(function() {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
            // $(".navbar-end").toggleClass("is-active");
            });
            // $(".navbar-end").toggleClass("is-active");
        },

      }
  })
   
</script>
<style lang ="css">


#import_box h1 {
    font-size: 2em;
    font-weight: bold;
}
#import_box *:hover {
    border: 1px solid black;
    border-radius: 5px;
}
#import_box * {
    border: 1px solid transparent;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    word-wrap: break-word;
}
/* The currently selected element */
.current {
    background: rgb(206, 206, 206);
    border-radius: 5px;
}
/* This class hides an element when it is being edited*/
.hidden {
    display: none;
}
/* These classes are used to align text */
.align-left {
    text-align: left;
}
.align-centre {
    text-align: center;
}
.align-right {
    text-align: right;
}
/* This class is used to expand the navbar section when the user inputs a link */
.expand-link {
    width: 35rem;
}
/* These classes are used to size different images */
.Small {
    width: 33.33%;
    height: auto;
}
.Medium {
    width: 66.66%;
    height: auto;
}
.Large {
    width: 100%;
    height: auto;
}
/* These classes are used to change the font of an element */
.bold-font {
    font-weight: bold;
}
.italic-font {
    font-style: italic;
}
.underline-font {
    text-decoration: underline;
}



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
    margin:0;
    margin-right: 7px;  
}
#Exporting, #file-import{
    /* margin:0; */
    /* margin-right: 7px; */
    margin-top:auto;
    margin-bottom:auto;
    /* margin-top:auto%; */
}

.button{
    color: white;
    margin-top:auto;
    margin-bottom:auto;
}
/* #Exporting{
    background-color:black;
} */
</style>
