$(document).ready(function(){
    $(".fa-search").click(function(){
      $(".container_search, .input").toggleClass("active");
      $("input[type='text']").focus();
    });   
  });