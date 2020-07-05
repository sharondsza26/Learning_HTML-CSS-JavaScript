let userInputVar;
$(".userInputBut").click(function(){
  userInputVar=$(".userInput").val();
    $(".result").html("''"+userInputVar+"''");
});
$(".userInputNum").click(function(){
   userInputVar=$(".userInput").val();
    $(".result").html(userInputVar);
     $(".result").html(Number(userInputVar));
});
$(".userInput10").click(function(){
   $(".result").html(userInputVar);
     $(".result").html("''"+userInputVar+10+"''");    
});
$(".userInputNum10").click(function(){
   userInputVar=$(".userInput").val();
     $(".result").html(Number(userInputVar)+10);  
});