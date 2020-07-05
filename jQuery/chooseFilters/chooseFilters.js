let selectedFilter;

$(".applyFilter").click(function() {
    let filter = $("input").val();
    
  

    if(filter === "Harlem"){
        $("img").css("filter", "contrast(115%) brightness(120%)");
    }
    // Below is the code block we want to execute if the user types Bushwick in the input. 
    if(filter === "Bushwick"){
        $("img").css("filter", "contrast(50%) brightness(180%)");
    }
    // Below is the code block we want to execute if the user types SOMA in the input. 
    if(filter === "SOMA"){
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    }
    // Below is the code block we want to execute if the user types Sunset in the input. 
    if(filter === "Sunset"){
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    }
    
});

$(".reset").click(function() {
    $("img").css("filter", "");
});
