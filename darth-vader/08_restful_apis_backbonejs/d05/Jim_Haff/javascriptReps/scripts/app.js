var pie = 3.14159;  //integer
var name = "Jim Haff";  //string
var prime = [2,3,5,7, 11, 13];  //object
var powers = {
  name: 'Jim Haff',
  age: 27,
  handed: 'right'
};  //object



//array manipulation
var places = [];
places.push('Japan', 'Paris', 'Amsterdam');
places.shift();
places.shift();
places.push('alaska', 'spain', 'croatia');
places.pop();

//Objects everywher
var laptop = {
  size: "17in",
  brand: "mac",
  memory: "4gb",
  year: 2013,

};

JSON.stringify(laptop);


//oBjects again
laptop.tellme = JSON.stringify(laptop);
var myKeys = Object.keys(laptop);

for (i=0; i < myKeys.length; i++) {
  console.log(myKeys[i]);
}


//Conditional Trials

function findAge () {

    var whatAge = prompt('how old are you');
    if(whatAge >= 21){
      console.log('You can drink');
    }
    else {
      console.log('No drink for You!')
    }
}

// Loops, Loops, Merry-go-round
var friends = ["Kevo", "fivefour", "Yanny"];

function storyMaker () {

  for (i=0; i < friends.length; i++){

    console.log(friends[i] + " fell off the wagon");
    friends.pop();
  }
}
//Vanilla selectors
$('#vanilla').html();
console.log($('#vanilla').html())


$('#strawberry').html();
console.log($('#vanilla').html())

//functions
function getRoot(number){

  return Math.sqrt(number)
}

//stor Time !
function story(name, place, adjective, verb, thing) {

  console.log(name + " was haning out in " + place + " and he was playing with his " + adjective + " " + thing + " and he was " + verb + " it around the world");

}

//constructor object
var bands = function(members, names, albums, dateFormed){
  this.members= members;
  this.names = names;
  this.albums = albums;
  this.dateFormed = dateFormed;
  this.onTour = true;
}
var phish = new bands("4", "Trey, Mike, Page, Fishman", "Junta", 1988);


//functions strike Backbone
var model = {
  name: 'jim',
  age: '17',
  get: function(propKey){
    return (this[propkey]);
  },
  set: function(propkey, newvalue){
    this[propkey]= newvalue;
    console.log(this[propkey])
  }
}
//end of doc ready
var app = app || {};
$(document).ready(function(){

  $.ajax({
    url: 'https://data.cityofchicago.org/resource/ijzp-q8t2.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for (var i = 0; i <data.length; i++){

    //  $('#strawberry').append("<ul><li>There was a crime on the block of " + data[i].block + " with a crime fitting the description,  '" + data[i].description + "' with a primary type of :" + data[i].primary_type + "</li><ul>");
    }

    },error: function(){

    console.log("an error occurred");
  }
});

  $.ajax({
    url: 'http://www.omdbapi.com/?t=K-Pax&y=&plot=short&r=json',
    dataType: 'json',
    success:function(data){
      console.log(data);
      console.log(data.Title + " was released in " + data.Year + " and is rated " + data.Rated + " and was released in " + data.Released + " having a runtime of " + data.Runtime);
    },
    error: function(){
      console.log('it didnt work');
    }
  });

})

//return of the functions

$('canvas').css('background-color', 'rgba(110, 103, 97, 0.9)');

app.context = $('canvas')[0].getContext("2d");
app.canvas = $('canvas');

app.context.beginPath();
app.context.moveTo(10, 50);
app.context.lineTo(20, 50);
app.context.lineTo(200, 50);
app.context.lineTo(200, 200);
app.context.lineTo(10, 200);
app.context.closePath();
app.context.fillStyle = ('rgb(198, 153, 156)');
app.context.fill();
app.context.lineWidth = 20;
app.strokeStyle = 'black';
app.context.stroke();
