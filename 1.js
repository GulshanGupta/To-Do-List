$("ul").on("click","li",function(){
  //if color is gray turn it black and non
  if($(this).css("color") === "rgb(128, 128, 128)")
{
  $(this).css("color","black");
  $(this).css("text-decoration","none");

}  //else if it is black turn it gray and line through
else
   {
    $(this).css("color","gray");
    $(this).css("text-decoration","line-through");
  }
  });
$("ul").on("click","span",function(event) {
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
  $("input").on("keypress",function(event){
    if(event.which === 13){
    var toDo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ toDo + "</li>");
  }
});
$(".fa-plus").click(function(){
  $("input").fadeToggle();
});
