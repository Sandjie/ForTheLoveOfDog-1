$(document).ready(function() {
    
$.get("/getBreed/pomeranian", function(data)
    {
        console.log(data);
        if(data.length>0)
        {
            for(var i=0; i<data.length;i++)
            {   
                // console.log("images/ProfileImages/"+data[i].Name);
                // var img="images/ProfileImages/"+data[i].Name+".jpg";
                var x=i+1;
                $("#"+x).attr("src",data[i].ProfileImage);
                $("#"+x).attr("data",data[i].id);
                var fakeid=data[i].id*1234
                $("#a"+x).attr("href","profile/"+fakeid);
            }
        }
    });

});

