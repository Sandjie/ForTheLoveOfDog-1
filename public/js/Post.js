$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  //var blogContainer = $(".blog-container");
  //var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
 // $("# new post click").on("click", addNewPost);
//   $(document).on("click", "button.delete", handlePostDelete);
//   $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts

var url = window.location.search;
  
var user=sessionStorage.getItem("userID");
console.log("session userid="+user);
// refreshNewsFeed();
function addNewPost()
{
    var newB={
        PostText:$("#post text id").val().trim(),
        UserId: user  //use session variable here
       // PostImage:$("Post image url ").val().trim(),
    };
    console.log("new post: "+ newB)
    $.post("/newPost", newB, function() {
        //$("#bName").val("");
      refreshNewsFeed();
    });
}


function refreshNewsFeed()
{
  $.get("/allPosts",function(data){
    console.log(data);
    createNewsFeed(data);
   console.log("refreshNewsFeed");
  });

}

function createNewsFeed(data)
{
  for(var i=0; i<data.length; i++)
  {
    var postFeedDiv=$("#postFeed");
    var post=$("<div>");
    
    
  }

}
 
});
