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

    import jQuery from "jquery";
    const $ = jQuery;
    window.$ = $;

    var count = 0;
    var currentElement;

    function addElement(tag, name, newID, currentElement) {
        let element = document.createElement(tag);
        element.innerHTML = `[New ${name} element created]`;
        element.id = `${name}${newID}`;
        if (currentElement) {
            $(element).insertAfter(`#${currentElement}`);
        }
        else {
            document.querySelector('#import_box').appendChild(element);
        }
    }

    window.onload = function() {

        // Adding the new element that was clicked
        $('#new a').click(function() {
            count++;
            addElement($(this).attr('id'), $(this).attr('value'), count, currentElement);
        });

        $(document).on('click', '#import_box *', function() {
            $('#import_box *').removeClass('current');
            currentElement = $(this).attr('id');
            $(this).addClass('current');
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
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.current {
    background: grey;
}

</style>
