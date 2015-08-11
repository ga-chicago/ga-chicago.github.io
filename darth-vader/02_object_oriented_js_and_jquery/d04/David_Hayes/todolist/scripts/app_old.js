window.onload = function() {
    console.log("all this things are here");

    var btns = document.getElementsByTagName("button");
    console.log(btns);
    var list = document.getElementById("todo-items");

    var input = document.getElementsByName("todo")[0];

    var btn = btns[0];
    console.log(btn);
    btn.addEventListener('click',
      function() {
        list.innerHTML = list.innerHTML + "<li>" +
        input.value + "</li>";
      });




}
