// This .js file loads the global navbar at the beginning of every
// .html page
$(document).ready(function() {
    $('body').prepend($('<div>').load('header.html'));
});