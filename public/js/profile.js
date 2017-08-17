$(document).ready(function() {

var img=getUrlVars()["ProfileImage"];
console.log(window.location.href);
var me = getUrlVars()["Interests"];
console.log("before:"+me);
me=me.replace(/%20/gi," ");
console.log("after:"+me);
$("#Name").html(getUrlVars()["Name"]);
$("#Age").html(getUrlVars()["Age"]);
$("#Pack").html(getUrlVars()["Breed"]);
$("#Interests").html(me);
$("#profileImage").attr("src",img)
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}