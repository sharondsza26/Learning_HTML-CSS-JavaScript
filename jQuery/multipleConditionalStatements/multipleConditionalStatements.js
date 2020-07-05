$(".temperature-button").click(function() {
    let temperature = parseInt($(".temperature-input").val());
    
    if(temperature <= 50) {
        $(".output").text("Wear a winter jacket");
    }
    else if(temperature <= 70){
        $(".output").text("Wear a light jacket");
    }
    else if(temperature <= 80){
         $(".output").text("Wear a t-shirt jacket");
    }
     else if(temperature >= 81){
         $(".output").text("Wear shorts");
    }
   
});