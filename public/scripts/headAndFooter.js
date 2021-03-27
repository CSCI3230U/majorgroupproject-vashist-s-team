// This .js file loads the global navbar at the beginning of every
// .html page
$(document).ready(function() {

    // Creating a variable with the value of the current page's body ID
    let bodyID = $('body').attr('id');

    // Loading the top navbar into a variable and editting the signup/logout
    // button, depending on the current page
    let navbar = $('<div>').load('headAndFooter.html', function() {
                    if (bodyID == "loginBody") {
                        $('#topNavButton').attr('href', '/signupPage.html');
                        $('#topNavButton').html("Sign Up");
                    }
                    else {
                        $('#topNavButton').attr('href', '/loginPage.html');
                        $('#topNavButton').html("Logout");
                    }
                });

    // Adding the top navbar to the page
    $('body').prepend(navbar);

    

});

