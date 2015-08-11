$(document).ready(function(event){
  console.log("all things are loaded");

  var btns = $('button');  // var btns = document.getElementsByTagName("button");

  console.log(btns);

  var btn = $(btns)[0];
  var list = $('#todo-items');
  var input = $('input[name="todo"]')[0];

  $(btn).on('click', function() {
    console.log(this);
    var html = $(list).html(); // return current html

    var currentValue = $(input).val();
    $(list).html(html + "<li>" + currentValue + "</li>");




  });

});

//window.onload = function() {

  // console.log(btns);

  // var btn = btns[0];
//   console.log(btn);
//
//   var list = document.getElementById("todo-items");
//
//   var input = document.getElementsByName("todo")[0];
//   // add a way to LISTEN to this button being clicked...
//   btn.addEventListener('click', function()
//   {
//     //console.log("Clicked!");
//   list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
//   });
//
//
//
// }
