$(".submit").click(function() {
    let inputValue = $(".password").val();
    if(inputValue === "Open Sesame"){
    	alert("OK!");
    }
    else{
        alert("Try Again");
    }
});