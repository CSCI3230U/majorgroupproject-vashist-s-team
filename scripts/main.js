$(document).ready(function(){
  $(".dropdown-content a").click(function(){
    $("#content").html($(this).html());
  });
});