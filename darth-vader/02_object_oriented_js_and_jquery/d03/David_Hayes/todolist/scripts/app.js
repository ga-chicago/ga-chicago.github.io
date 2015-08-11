window.onload = function() {

    var btns = document.getElementsByTagName("button");
    var list = document.getElementById("todo-items");
    var input = document.getElementsByName("todo")[0];
    var ilst = 1;
    btns[0].addEventListener('click',
      function() {
        list.innerHTML = list.innerHTML + "<li id=item" + ilst + ">" +
        input.value + "</li>";
        ilst++;
        item1 = document.getElementById("item1");
        item2 = document.getElementById("item2");
        item3 = document.getElementById("item3");
        item4 = document.getElementById("item4");
        item5 = document.getElementById("item5");
        item6 = document.getElementById("item6");
        item7 = document.getElementById("item7");
        item8 = document.getElementById("item8");
        item9 = document.getElementById("item9");
        item10 = document.getElementById("item10");
        item11 = document.getElementById("item11");
        item12 = document.getElementById("item12");
        item13 = document.getElementById("item13");
        item14 = document.getElementById("item14");
        item15 = document.getElementById("item15");
        item16 = document.getElementById("item16");
      });

    btns[1].addEventListener('click',
      function() {
        if (item1) item1.innerHTML = "<s>" + item1.innerHTML + "</s>";
      })
    btns[2].addEventListener('click',
      function() {
        console.log("i am here");
        console.log(item2.value);
        if (item2) item2.innerHTML = "<s>" + item2.innerHTML + "</s>"
      })
    btns[3].addEventListener('click',
      function() {
        if (item3) item3.innerHTML = "<s>" + item3.innerHTML + "</s>"
      })
    btns[4].addEventListener('click',
      function() {
        if (item4) item4.innerHTML = "<s>" + item4.innerHTML + "</s>";
      })
    btns[5].addEventListener('click',
      function() {
        if (item5) item5.innerHTML = "<s>" + item5.innerHTML + "</s>";
      })
    btns[6].addEventListener('click',
      function() {
        if (item6) item6.innerHTML = "<s>" + item6.innerHTML + "</s>";
      })
    btns[7].addEventListener('click',
      function() {
        if (item7) item7.innerHTML = "<s>" + item7.innerHTML + "</s>";
      })
    btns[8].addEventListener('click',
      function() {
        if (item8) item8.innerHTML = "<s>" + item8.innerHTML + "</s>";
      })
    btns[9].addEventListener('click',
      function() {
        if (item9) item9.innerHTML = "<s>" + item9.innerHTML + "</s>";
      })
    btns[10].addEventListener('click',
      function() {
        if (item10) item10.innerHTML = "<s>" + item10.innerHTML + "</s>";
      })
    btns[11].addEventListener('click',
      function() {
        if (item11) item11.innerHTML = "<s>" + item11.innerHTML + "</s>";
      })
    btns[12].addEventListener('click',
      function() {
        if (item12) item12.innerHTML = "<s>" + item12.innerHTML + "</s>";
      })

}
