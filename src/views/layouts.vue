<template>

<body>
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
            </div>
            <div class="navbar-end">
                <!-- write my code here!!! -->
                    <div id="file-js-example" class="file has-name" type="file">
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
</body>

</template>
<script>
    // my js goes here
    window.onload = function(){
    const fileInput = document.querySelector('#file-js-example input[type=file]');
    // fileInput.onchange = () => {
    //     if (fileInput.files.length > 0) {
    //     const fileName = document.querySelector('#file-js-example .file-name');
    //     fileName.textContent = fileInput.files[0].name;
    //     }
    //     console.log("new file selected:");
    //     console.log(fileInput.files[0].name);

        
        
    //     // $('#sample_div').load(fileInput.files[0].name); //takes the filename and loads it in the div tag
    //     // console.log(fileInput);
    // }}

    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-js-example .file-name');
        fileName.textContent = fileInput.files[0].name;
        }
        const reader = new FileReader();
        reader.onload = reading => console.log(reading.target.result);
        reader.readAsText(fileInput.files[0]);
        
        console.log("new file selected:");
        console.log(fileInput.files[0].name);

        // $('#sample_div').load(fileInput.files[0].name); //takes the filename and loads it in the div tag
        console.log(fileInput);
    }}

</script>
<style lang ="scss">

</style>