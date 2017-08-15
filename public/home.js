// Javascript
// <!-- Slide comments down when BARK COMMENT BUTTON is clicked
//  -->
<script>
 $(document).ready(function() {
    $('#slidenav').animate({
        top: '-440px'
    }, 200);
    $('#open a').toggle(
        function(){
            $('#slidenav').animate({
                top: '0'
            }, 500);
        },
        function(){
            $('#slidenav').animate({
                top: '-440px'
            }, 500);
    });
    });

	// <!--  Paw Like Button -->
	var clicks = 0;
	    function pawLike() {
	        clicks += 1;
	        document.getElementById("pawLike").innerHTML = clicks;
	    };

 //  <!--   Changes color of PAW LIKE BUTTON on click
 // -->
 		function changeColor() {
        document.getElementById("id").style.color = "light-blue";
    }   


// <!-- Toggles between showing div of comments and hiding (maybe use slidenav below?) -->

$(document).ready(function(){
    $("#submit").click(function(){
        $("bark").toggle();
    });
});

// <!-- Comments in post need to be id="slidenav" -->



// use id for the blog post in order to submit onclick
  //Add picture file to form upload SUBMIT Button
document.getElementById("#submit").submit();

// dynamically prepend post to top of page

var newDiv= document.getElementById('#message');
document.getElementsByTagName('#message')[0].insertBefore('#message');



// Add date and time to each post

  var datetime = document.getElementById('datetime');
  var monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  var formatted = monthname[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();

  datetime.innerHTML = formatted;






</script>