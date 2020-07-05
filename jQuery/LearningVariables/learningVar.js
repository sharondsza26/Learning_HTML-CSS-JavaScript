$("button").click(function(){
    var userName=$("#input").val();
    $("body").append(`<p>Hello ${userName}</p>`);
});
