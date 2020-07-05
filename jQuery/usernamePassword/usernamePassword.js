// set the correct username and password combination below
var correctUsername = "codeNation@socialclub";
var correctPassword = "SocialClub";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE

    if(username===correctUsername && password===correctPassword){
        alert("Welcome to Code Nation Social Club!");
    }
	else if(username!==correctUsername || password!==correctPassword){
        alert("Sorry Club Members only!");
    }
    else if(username===null && password===null){
        alert("Please Enter valid Username and password");
    }

});