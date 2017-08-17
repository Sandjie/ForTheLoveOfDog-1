;$(document).ready(function() {

$("#user").val(sessionStorage.getItem("userID"));
console.log("slideTwo.js: userID: "+sessionStorage.getItem("userID"))


});

function fileSelected()
{
    var selFile=$("#addFile").val();
    var arr=selFile.split("\\");
    console.log(arr);
    selFile=arr[arr.length-1];
    $("#filenm").html(selFile)
}
