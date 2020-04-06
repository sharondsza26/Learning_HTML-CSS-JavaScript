$(".mole1").dblclick(function(){
    $(".mole1").hide();
    $(".moleTwo").show();
    $(".thirdMole").show();
});
    
$(".moleTwo").mouseenter(function(){
    $(".moleTwo").hide();
    $(".mole1").show();
    $(".thirdMole").show();
}); 
    
$(".thirdMole").mouseleave(function(){
    $(".thirdMole").hide();
    $(".mole1").show();
    $(".moleTwo").show();
});
    
$("button").click(function(){
    $(".mole1").show();
    $(".moleTwo").show();
    $(".thirdMole").show();
});