// Wait until the window has loaded
window.onload = function() {
  statusReport("hey hey hey");
  var question = ["Input a NOUN","Input an -ing VERB","Input a pural NOUN",
              "Input an -ly ADJECTIVE","Input an -ing VERB","Input a NAME",
              "Input YOUR NAME","Input a NOUN"];
  var word = [];
  var contentContainer = document.getElementById("content");

  for (var idx = 0; idx < question.length; idx++) {
    word[idx] = prompt(question[idx]);
    if (word[idx] === null) {
      contentContainer.innerHTML = "MadLibs: Performance-Enhancing Drugs Apology <br>" +
                                    "...Wait, you didn't finish!";
      return;
    }
  }

  contentContainer.innerHTML = "MadLibs: Performance-Enhancing Drugs Apology <br>" +
  "<br> I would like to take this <i><u>" +  word[0] + "</u></i> to say that I am truly" +
  " sorry for <i><u>" + word[1] + "</u></i> the trust of my coaches, <i><u>" +
  word[2] + "</u></i>, family and, most <i><u>" + word[3] + "</u></i>, my fans. " +
  "While I am not at liberty to discuss exactly what I am <i><u>" + word[4] +
  "</u></i> for, or why I have decided to fire <i><u>" + word[5] + "</u></i>, " +
  "as my trainer, I can, in fact, make comment on the on the <i><u>" + word[6] +
  "</u></i> Foundation, which is a charitable <i><u>" + word[7] +
  "</u></i> I just so happen to be starting."

  //contentContainer.innerHTML = username + " is on a mission to " + mission;

}

// Send up messages
function statusReport(message) {
  console.log(message);
  return message;
}
