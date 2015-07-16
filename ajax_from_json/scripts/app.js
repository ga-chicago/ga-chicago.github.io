$(document).ready(function() {

  $.getJSON("http://ga-chicago.github.io/ajax_from_json/data.json", function(data) {
    
     //console.log(data);
     console.log(data.students);
  
     for (var student in data.students) {
        
        $('body').append('<li class="student-item">' + data.students[student] + '</li>');
       
     }

  });

});
