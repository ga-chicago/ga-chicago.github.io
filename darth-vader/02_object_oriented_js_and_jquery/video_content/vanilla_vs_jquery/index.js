
// vanilla
document.getElementsByTagName("div");

// jQuery
$('div');

// javascript
var div = document.getElementsByTagName('div')[0];
div.innerHTML = "hi there...";

// jQuery
var div = $('div');
$(div).html("hi there....");


/////// classes
var awesome = document.getElementsByClassName("awesome")[0];
awesome.innerHTML = "everything is awesome";

// jQuery
var awesome = $('.awesome')[0];
$(awesome).html("everything is realllllly awesome");


// IDs????
document.getElementById("winning").innerHTML = "please no charlie sheen jokes";

var winning = $('#winning');

$(winning).html("thank you all very much");


// BY NAME!!!!!!!!


var input = document.getElementsByName("thebest")[0];
input.value = "something";

var input = $('input[name="thebest"]');
$(input).val("cecelious");
