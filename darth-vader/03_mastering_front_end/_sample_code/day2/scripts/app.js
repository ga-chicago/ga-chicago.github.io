$(document).ready(function() {

  console.log("All resources are loaded");

  // contact submit event handler
  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

    // $.ajax({
    //   type: 'post',
    //   data: formdata,
    //   url: 'http://localhost:8080/submit'
    // });
  });

});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();


  // testing... comment out when done
  //console.log(retJson);

  return retJson;

}
app.sendEmail = function(obj) {

  $.ajax({
    url: "http://imperialholonet.herokuapp.com/api/mail",
    type: 'POST',
    data: obj,
    success: function(data) {

      console.log(data);

    },
    fail: function(error) {

      console.log(error);

    }
  })

}
