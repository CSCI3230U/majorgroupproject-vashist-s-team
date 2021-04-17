<template>



    <nav class="navbar is-dark" role="navigation" aria-label= "main navigation">
        <div class="navbar-brand">
                               
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
            </div>
             <div class="navbar-end">
                    <div id="file-js" class="file has-name" type="file">
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
                            <span class="file-name">
                                No file uploaded
                            </span>
                        </label>
                    </div>
            </div>

        </div>
    </nav>


</template>
<script>
    // my js goes here
    // window.onload = function(){
    // const fileInput = document.querySelector('#file-js input[type=file]');
 
    // fileInput.onchange = () => {
    //     if (fileInput.files.length > 0) {
    //     const fileName = document.querySelector('#file-js .file-name');
    //     fileName.textContent = fileInput.files[0].name;
    //     }
    //     const reader = new FileReader();
    //     var test = (document.querySelector('#import_box'));
    //     reader.onload = reading => test.innerHTML=(reading.target.result);
    //     reader.readAsText(fileInput.files[0]);
        
    //     console.log("new file selected:");
    //     console.log(fileInput.files[0].name);
    //     // test.innerHTML = fileInput;
    //     }
    // }

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

    window.onload = function() {

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

        // When an element in the builder is double-clicked, add a text field where the
        // user can edit the inner-html of that element
        $(document).on('dblclick', '#import_box *', function() {

            // Checking to see if we already have a text area to prevent duplicate
            // textareas from appearing
            if ($(this).attr('id') != 'tempArea') {

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
    }


  export default({
      
      mounted :function(){
          this.importFile();
      },
      methods: {
          importFile(){
             const fileInput = document.querySelector('#file-js input[type=file]');
             fileInput.onchange = () => {
             if (fileInput.files.length > 0) {
                 const fileName = document.querySelector('#file-js .file-name');
                 fileName.textContent = fileInput.files[0].name;
                 }
            const reader = new FileReader();
            var test = (document.querySelector('#import_box'));
            reader.onload = reading => test.innerHTML=(reading.target.result);
            reader.readAsText(fileInput.files[0]);
            console.log("new file selected:");
            console.log(fileInput.files[0].name);
  
        }
        }
      }
    
  })
   
</script>
<style lang ="scss">

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

.current {
    background: rgb(206, 206, 206);
    border-radius: 5px;
}

.hidden {
    display: none;
}

</style>
