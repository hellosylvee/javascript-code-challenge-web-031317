$(document).ready(function(){
  $('#submitComment').on('click', function(e){
    e.preventDefault();
    console.log("Hey! I am clicked!");
    var comment = $("#userComment").val();
    $('#comment-list').append(`<li>` + comment + `</li>`);
  });
})
