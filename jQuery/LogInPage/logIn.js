$("button").click(function(){
    let userName=$("input").val();
    alert("Hello "+userName);
    $(".login-text").text("Welcome to your Page"+userName);
    $("input").hide();
    $(".login").hide();
});