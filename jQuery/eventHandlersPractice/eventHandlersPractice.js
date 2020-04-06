$(".top-left").click(function(){
    $(".top-left").css("background-color","green");
    $(".clickBox").text("Thank you for clicking on me!");
});

$(".top-right").dblclick(function(){
    $(".top-right").css("background-color","blue");
    $(".dblClickBox").text("Thank you for double clicking on me!");
});

$(".bottom-left").hover(function(){
    $(".bottom-left").css("background-color","yellow");
    $(".hoverBox").text("Thank you for hovering on me!");
});

$(".bottom-right").mouseenter(function(){
    $(".bottom-right").css("background-color","white");
    $(".mouseOnBox").text("Thank you for visiting!");
});
$(".bottom-right").mouseleave(function(){
    $(".bottom-right").css("background-color","red");
    $(".mouseOnBox").text("Come again soon!");
});