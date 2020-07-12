
// First Name
function validateFn() {
    var First = document.getElementById("fn").value;
    var reg1 = /^[a-zA-z\s\'\-]{2,15}$/;

    if(reg1.test(First)) {
        document.getElementById("fnPrompt").style.color="green";
        document.getElementById("fnPrompt").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("fnPrompt").style.color="red";
        document.getElementById("fnPrompt").innerHTML="Invalid";
        return false;
    }
}

// Last Name
function validateLn() {
    var Last = document.getElementById("ln").value;
    var reg2 = /^[a-zA-z\s\'\-]{2,15}$/;

    if(reg2.test(Last)){
        document.getElementById("lnPrompt").style.color="green";
        document.getElementById("lnPrompt").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("lnPrompt").style.color="red";
        document.getElementById("lnPrompt").innerHTML="Invalid";
        return false;
    }
}

// Username
function validateUn() {
    var User = document.getElementById("un").value;
    var reg3 = /^[a-zA-z\d]{2,15}$/;

    if(reg3.test(User)){
        document.getElementById("unPrompt").style.color="green";
        document.getElementById("unPrompt").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("unPrompt").style.color="red";
        document.getElementById("unPrompt").innerHTML="Invalid";
        return false;
    }
}

// Password
function validatePass() {
    pswd1 = document.getElementById("pass1").value;
    pswd2 = document.getElementById("pass2").value;

    if (pswd1 === pswd2) {
        document.getElementById("pass2Prompt").style.color = "green";
        document.getElementById("pass2Prompt").innerHTML = "matched";
        return true;
    }else{
        document.getElementById("pass2Prompt").style.color = "red";
        document.getElementById("pass2Prompt").innerHTML = "Not matched";
        return true;
    }
}


// Phone Number
function checkPn() {
    var Phone = document.getElementById("pn").value;
    var reg4 = /^\d{10}$/;
    if(Phone.match(reg4)){
        document.getElementById("pnPrompt").style.color="green";
        document.getElementById("pnPrompt").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("pnPrompt").style.color="red";
        document.getElementById("pnPrompt").innerHTML="Invalid";
        return false;
    }
}

// Theme
function changeToLight() {
    document.body.style.backgroundColor = "#fcf2fc";
}
function changeToDark() {
    document.body.style.backgroundColor = "#3c2b59";
}
function changeToDefault() {
    document.body.style.backgroundColor = "white";
}

// Done
function done() {
    alert("Thank You for signing up!");
}