$(document).ready(function() {
var myid=sessionStorage.getItem("userID");
var fakeID=myid*1234;
console.log("me : "+ myid);
$.get("myprofile/"+fakeID, function(data){
    console.log(data);
    $("#Name").html(data.Name);
    $("#Age").html(data.Age);
    $("#Pack").html(data.Pack);
    $("#Interests").html("i like all thing dog...");
    $("#profileImage").attr("src",data.ProfileImage);

});

});