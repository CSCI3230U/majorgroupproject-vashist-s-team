

$(document).ready(function(){
    $("#loginButton").click(function(){
        var validEmail = "False";
        var validPassword = "False"
        var password =$("#loginPassword").val();
        var email = $("#loginEmail").val();
        var checkpassword;

        if (email.includes("@") && ((email.includes(".com")) || (email.includes(".net")) || (email.includes(".ca")) )){
            validEmail = "True"
            $("#loginEmail").attr('class', 'input'); 
        }else{
            validEmail = "False";
            $("#loginEmail").attr('class', 'input is-danger'); 
        }


        if(password == checkpassword){
            validPassword = "True";
            $("#loginPassword").attr('class', 'input'); 
        }else{
            validPassword = "False";
            $("#loginPassword").attr('class', 'input is-danger'); 
        }

        console.log(password);
        console.log(email);

    });
});