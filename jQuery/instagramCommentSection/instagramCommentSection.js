$("button").click(function(){
    let comment;
    comment=$("input").val();
    $(".messages").text(comment);
    alert("Comment Added!");
 });