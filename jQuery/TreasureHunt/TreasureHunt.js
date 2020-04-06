$(".clue1").click(function() {
    $(".envelope").show();
    $(".clue1").text("Click on the envelope");
});

$(".envelope").click(function() {
    $(".envelope").hide();
    $(".c2").show();
    $(".c2").css("background-color", "yellow");
});

$(".clue3").hover(function() {
    $(".c3").show();
});

$(".c3").click(function(){
    $(".map").fadeToggle();
    $("body").css("background-color","black");
    $(".clue2").hide();
    $(".clue1").hide();
    $(".clue4").show();
    $("h1").text("Double click X on the map");
});

$(".map").dblclick(function(){
    $("body").css("background-color","#80bfff");
    $(".map").hide();
    $(".clue1").hide();
    $(".clue2").hide();
    $(".clue3").hide();
    $(".clue4").hide();
    $("h1").hide();
    $(".c5").show();
});