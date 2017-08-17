$(document).ready(function() {

// Click events for the edit and delete buttons
  $("#login").on("click",loginUser)
  $("#newUser").on("click", newUser);
  $("#signup").on("click",userSignup1);
  // $("#signup2").on("click",userSignup2);
  $("#signup3").on("click",userSignup3);
  //$("#user").val(sessionStorage.getItem("userID"));


var url = window.location.search;
  
function userSignup1()
{
    var user={
      UserName:$("#userName").val().trim(),
      Email:$("#email").val().trim(),
      Password:$("#password").val().trim()
    }
    $.post("/newUser",user,function(data)
    {
      console.log(data);
      sessionStorage.clear();
      sessionStorage.setItem("userID",data.id);
      console.log("signup1: userID"+sessionStorage.getItem("userID"));
      window.location.href = "/slideTwo.html";
    });
    
}

function userSignup3()
{
  console.log("signup3: userID"+sessionStorage.getItem("userID"));
  var user={
    user:sessionStorage.getItem("userID"),
    Zip:$("#ZipCode").val().trim(),
    Pack:$("#pupBreed").val().trim(),
    Age:$("#birthday").val().trim()
  }
  $.post("/newUser/step3",user, function(data){
    console.log(data);
    window.location.href = "/notindex.html";
  });

}

function loginUser()
{
  alert("hey");
  var user={
    userName:$("#userName").val().trim(),
    password:$("#password").val().trim()
  }
  console.log(user);
  $.get("/UserLogin", user, function(data) {
      //console.log(data);
      if (data!==null) {
        console.log("user ", data.id);
        $("#loginError").text("");
        sessionStorage.clear();
        sessionStorage.setItem("userID",data.id);
        window.location.href = "/notindex.html";  //change name of the html file if needed
      }
      else{
        console.log("wrong cred");
        $("#loginError").text("Wrong credentials, try again.");
      }
  });
}

function newUser()
{
window.location.href = "/signUp.html";  //change name of the html file if needed
}
 
});
