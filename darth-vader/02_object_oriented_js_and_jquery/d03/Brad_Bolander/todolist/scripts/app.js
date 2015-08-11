//All things loaded
window.onload = function() {
  console.log("All things loaded");

  var btns = document.getElementsByTagName("button");
  console.log(btns);

  var btn = btns[0];
  console.log(btn);

  var list = document.getElementById("todo-items");

  var input = document.getElementsByName("todo")[0];
  // add a way to LISTEN to this button being clicked...
  btn.addEventListener('click', function()
  {
    //console.log("Clicked!");
  list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
  });



}
