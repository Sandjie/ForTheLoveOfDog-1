// Javascript
// <!-- Slide comments down when BARK COMMENT BUTTON is clicked
//  -->

 $(document).ready(function() {

    // $('#slidenav').animate({
    //     top: '-440px'
    // }, 200);
    // $('#open a').toggle(
    //     function(){
    //         $('#slidenav').animate({
    //             top: '0'
    //         }, 500);
    //     },
    //     function(){
    //         $('#slidenav').animate({
    //             top: '-440px'
    //         }, 500);
    // });
    // });

	// <!--  Paw Like Button -->
	var clicks = 0;
	    function pawLike() {
	        clicks += 1;
	        document.getElementById("pawLike").innerHTML = clicks;
	    };

 //  <!--   Changes color of PAW LIKE BUTTON on click
 // -->
 		function changeColor() {
        document.getElementById("pawLike").style.color = "light-blue";
    }   


// <!-- Toggles between showing div of comments and hiding (maybe use slidenav below?) -->

    $("#submit").on("click", function(){
        $("bark").toggle();
    });


// <!-- Comments in post need to be id="slidenav" -->



// use id for the blog post in order to submit onclick
  //Add picture file to form upload SUBMIT Button
$(".barkIt").on('click', function(){
  var post = $("#Message").val().trim();
  console.log(post);
  //var imageUrl 
  $('.posts').prepend(
    '<div class="post">'+
    '<div class="row">'+
      '<div class="col-md-6 col-md-push-3 col-sm-6 col-sm-push-3">'+
        '<img class="" src="assets/profilePic.png" alt="Roscoe\'s Profile Picture">'+
      '</div>'+
    '</div>'+
    '<div class="row">'+
      '<div class="col-md-2 col-md-push-7 col-sm-6 col-sm-push-3">'+
          '<h1 class="nameTag"><em class="changeToCaps">Roscoe</em> the Pomeranian</h1>'+
      '</div>'+
    '</div>'+
    '<div class="row">'+
      '<div class="col-md-6 col-md-push-4 col-sm-6 col-sm-push-3">'+
        '<div class="overlayBox">'+
        '<img src="'+ imageUrl + '" alt="Roscoe\'s picture post" class="image">'+
        '<div class="overlay">'+
          '<div class="pictureText">'+ post +'</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
      '<div class="col-sm-6 col-md-push-8 col-sm-6 col-sm-push-3">'+
          '<img class="commentIcon" src="assets/barkIcon.png" alt="Comment Icon">'+
          '<div class="commentNumber"></div>'+
      '</div>'+
      '<div class="col-sm-6 col-md-push-2 col-sm-6 col-sm-push-3">'+
          '<img class="likeIcon" src="assets/pawIcon.png" alt="Like Icon">'+
          '<div class="likeNumber"></div>'+
      '</div>'+
    '</div>'+
  '</div>')
  return false;
})

// dynamically prepend post to top of page





// Add date and time to each post

  var datetime = $('dateTag');
  var monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  var formatted = monthname[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();

  datetime.innerHTML = formatted;
});






