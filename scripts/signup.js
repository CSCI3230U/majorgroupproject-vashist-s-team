$(document).ready(function(){
    $("#signinButton").click(function(){
        var validEmail = "False";
        var validPassword = "False"
        var email = $("#loginEmail").val();
        var fullname = $("#fullName").val();
        var address = $("#address").val();
        var password =$("#password").val();
        var checkpassword =$("#re-typePassword").val();

        if (email.includes("@") && ((email.includes(".com")) || (email.includes(".net")) || (email.includes(".ca")) )){
            validEmail = "True"
            $("#loginEmail").attr('class', 'input'); 
        }else{
            validEmail = "False";
            $("#loginEmail").attr('class', 'input is-danger'); 
        }


        if(password == checkpassword){
            validPassword = "True";
            $("#password").attr('class', 'input'); 
        }else{
            validPassword = "False";
            $("#password").attr('class', 'input is-danger'); 
        }
        console.log(validEmail);
        console.log(validPassword);
        // console.log(email);
        // console.log(fullname);
        // console.log(address);
        // console.log(password);
    });
});