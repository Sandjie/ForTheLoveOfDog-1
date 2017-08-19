$(document).ready(function() {
$("#user").val(sessionStorage.getItem("userID"));
refreshNewsFeed();
var myProfileImage=""
var myid=sessionStorage.getItem("userID") *1234;
$.get("/myprofile/"+myid, function(mydata){
    console.log(mydata);
    myProfileImage=mydata.ProfileImage;
    console.log(myProfileImage);
    $("#MyProfilePic").attr("src",myProfileImage);
});

    // $("#MyProfilePic").attr("src",myProfileImage);

    // $("#bark").on("click", postBark);
});

function postBark()
{
    var newB={
        PostText:$("#txt").val().trim(),
        UserId: sessionStorage.getItem("userID")
    };
    console.log("new post: "+ newB)
    $.post("/newPost", newB, function() {
        //$("#bName").val("");
      refreshNewsFeed();
    });
}


function refreshNewsFeed()
{
    $("#allBarks").empty();
    $.get("/allPosts", function(data){
        console.log(data);
        for(var i=0; i<data.length; i++)
        {
            createFeed(data[i]);
        }
        
    });
    $("#Message").val("");
}

function createFeed(data)
{

    var div1=$("<div/>");//<div class="post">
    div1.addClass("post");
    var div2=$("<div/>");//  <div class="row">
    div2.addClass("row");
    var div3=$("<div/>");// <div class="col-sm-6 col-sm-push-3">
    div3.addClass("col-sm-6 col-sm-push-3");
    var img=$("<img/>"); //<img class="" src="assets/profilePic.png" alt="Roscoe's Profile Picture">
    img.addClass("profilePictureEdit");
    img.attr("height","27%");
    img.attr("width","27%");
    img.attr("src",data.User.ProfileImage); 
    img.appendTo(div3);
    div3.appendTo(div2);
    div2.appendTo(div1);

    //making the name appear next to image
    //  var name=$("<h1/>"); //         <h1 class="nameTag"><em class="changeToCaps">Roscoe</em> the Pomeranian</h1>
    // name.addClass("nameTag");
    // name.html("<em class='changeToCaps'>"+data.User.Name+"</em> the " + data.User.Pack);
    // name.appendTo(div3);
    

    var div4=$("<div/>");  //   <div class="row">
    div4.addClass("row");
    var div5=$("<div/>");  //     <div class="col-sm-2 col-sm-push-7">
    div5.addClass("col-sm-2 col-sm-push-7");
    var name=$("<h1/>"); //         <h1 class="nameTag"><em class="changeToCaps">Roscoe</em> the Pomeranian</h1>
    name.addClass("nameTag");
    name.html("<em class='changeToCaps'>"+data.User.Name+"</em> the " + data.User.Pack);
    name.appendTo(div5);
    div5.appendTo(div4);
    div4.appendTo(div1);

    var div6=$("<div/>");  //   <div class="row">
    div6.addClass("row");
    if(data.PostImage!==null)
    {//col-md-6 col-md-push-4 col-sm-6 col-sm-push-3
        var div7=$("<div/>"); //  <div class="overlayBox">
        div7.addClass("col-md-6 col-md-push-4 col-sm-6 col-sm-push-3");
        var div7_5=$("<div/>"); //  <div class="overlayBox">
        div7_5.addClass("overlayBox");
        var PostImg=$("<img/>");    //  <img src="assets/picturePost.png" alt="Roscoe's picture post" class="image">
        PostImg.addClass("image");
        PostImg.attr("src",data.PostImage);
        var bark=$("<div/>");   //      <h2 class="roscoeStatus">Why do humans have belly buttons & my owner can not find mine? like really we are so confused right now!</h2>
        bark.addClass("overlay");
        var barkdiv=$("<div/>");
        barkdiv.addClass("pictureText");

        barkdiv.html(data.PostText);
        barkdiv.appendTo(bark);
        PostImg.appendTo(div7_5);
        bark.appendTo(div7_5);
        div7_5.appendTo(div7);
    }
    else
    {   
        var div7=$("<div/>");  //     <div class="col-sm-6 col-sm-push-4">
        div7.addClass("col-sm-2 col-sm-push-4");
        var bark=$("<h1/>");   //      <h2 class="roscoeStatus">Why do humans have belly buttons & my owner can not find mine? like really we are so confused right now!</h2>
        bark.addClass("roscoeStatus");
        bark.html(data.PostText);
        bark.appendTo(div7);
    }
    
    div7.appendTo(div6);
    div6.appendTo(div1);

    var div8=$("<div/>");  //   <div class="row">
    div8.addClass("row");
    var div9=$("<div/>");  //     <div class="col-sm-6 col-sm-push-8">
    div9.addClass("col-sm-6 col-sm-push-8");
    var barkImg=$("<img/>");    //         <img class="commentIcon" src="assets/barkIcon.png" alt="Comment Icon">
    barkImg.addClass("commentIcon");
    barkImg.attr("src","assets/barkIcon.png");
    barkImg.attr("alt","Comment Icon");
    barkImg.appendTo(div9);
    var spaceDiv=$("<div/>");   //         <div class="commentNumber"></div>
    spaceDiv.addClass("commentNumber")
    spaceDiv.html("")
    spaceDiv.appendTo(div9);
    div9.appendTo(div8)
    

    

    var div10=$("<div/>");  //  <div class="col-sm-6 col-sm-push-2">
    div10.addClass("col-sm-6 col-sm-push-2");
    var barkLike=$("<img/>"); 
    barkLike.addClass("likeIcon");
    barkLike.attr("src","assets/pawIcon.png");
    barkLike.attr("alt","Like Icon");
    barkLike.appendTo(div10);
    div10.appendTo(div8);
    div8.appendTo(div1);

//         <div class="likeNumber"></div>

// </div>

    div1.appendTo("#allBarks");
}