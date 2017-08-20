
var breed=["pomeranian",
'germanshepard',
'pitbull',
'dalmatian',
'dachshund',
'hound'
];


$(document).ready(function() {
breed=breed.sort();
    for(var i=0;i<breed.length; i++)
    {
        var sel=document.getElementById("pupBreed");
        var opt = document.createElement('option');
        opt.value = breed[i];
        opt.innerHTML = breed[i];
        console.log(opt);
        sel.options.add(opt);
    }

});