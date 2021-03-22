$(document).ready(function(){
    $("#signinButton").click(function(){
        var email = $("#loginEmail").val();
        var fullname = $("#fullName").val();
        var address = $("#address").val();
        var password =$("#password").val();

        console.log(email);
        console.log(fullname);
        console.log(address);
        console.log(password);
    });
});