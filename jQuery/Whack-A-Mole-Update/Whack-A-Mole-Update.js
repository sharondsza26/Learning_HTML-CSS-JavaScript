$(".mole1").click(function(){
    $(".mole1").hide();
    $(".moleTwo").show();
    $(".thirdMole").show();
});
    
$(".moleTwo").click(function(){
    $(".moleTwo").hide();
    $(".mole1").show();
    $(".thirdMole").show();
}); 
    
$(".thirdMole").click(function(){
    $(".thirdMole").hide();
    $(".mole1").show();
    $(".moleTwo").show();
});
    
$("button").click(function(){
    $(".mole1").show();
    $(".moleTwo").show();
    $(".thirdMole").show();
});