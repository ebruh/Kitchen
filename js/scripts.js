$(document).ready(function() {
  $("#sbmtBtn").click(function(){
    var inp = $("#userEmail").val();
    $("#userEmail").val("");
    alert(inp + " has been successfully added to our Email list");
  })
  
  $("#navmenu").click(function() {
    $(".hidenmenu").show();
  });

  $(".close").click(function() {
    $(".hidenmenu").hide();
  });
});