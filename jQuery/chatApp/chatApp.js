$("#send-friends-message").click(function(){
    var friendsMsg=$("#friends-message").val();
    $("#chat-window").append(`<div class="message received">${friendsMsg}</div>`);
    $("#friends-message").val("");
});
$("#send-your-message").click(function(){
    var yourMsg=$("#your-message").val();
    $("#chat-window").append(`<div class="message sent">${yourMsg}</div>`);
    $("#your-message").val("");
});