$("#full-name-button").click(function(){
    var firstName=$("#first-name").val();
    var lastName=$("#last-name").val();
    $("#full-name").append(firstName + " " + lastName);
});
$("#hide-button").click(function(){
    var boxNo=$("#box-number").val();
    var newBox="#box"+boxNo;
    $(newBox).hide();
});
$("#show-button").click(function(){
    var boxNo=$("#box-number").val();
    var newBox="#box"+boxNo;
    $(newBox).show();
});