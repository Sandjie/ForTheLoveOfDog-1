// Javascript

<script>
// use id for the blog post in order to submit onclick
document.getElementById("form_id").submit();

// dynamically prepend post to top of page

var newDiv= document.getElementById('newDiv');
document.getElementsByTagName('form_id')[0].insertBefore('newDiv');



// Add date and time to each post

  var datetime = document.getElementById('datetime');
  var monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  var formatted = monthname[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();

  datetime.innerHTML = formatted;


</script>