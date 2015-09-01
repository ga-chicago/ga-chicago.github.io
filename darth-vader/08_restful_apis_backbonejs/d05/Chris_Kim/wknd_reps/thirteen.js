// 13. AJAXXXXXXXXXXXXXXXX
//
// Use jQuery to create an $.ajax request that gets JSON.
// You will get JSON from Chicago public data.
// Console.log the output.
// Create a success and error function that log out information.
// You do not need to get very detailed; this is a basic function that just fetches and logs out all the data.

// <table>
//   <thead>
//     <tr>
//       <!-- dba_name -->
//       <th>Name</th>
//       <!-- risk -->
//       <th>Risk</th>
//       <!-- address -->
//       <th>Address</th>
//       <!-- results -->
//       <th>Results</th>
//     </tr>
//   </thead>
//   <tbody>
//     <!-- ajax call here -->
//   </tbody>
// </table>

$(document).ready(function(){

  $.ajax({
    url: 'https://data.cityofchicago.org/resource/4ijn-s7e5.json',
    dataType: 'json',
    success: function(data) {
      for (var resto in data)
      $('tbody').append("<tr><td>" + data[resto].dba_name + "</td><td>" + data[resto].risk + "</td><td>" + data[resto].address + "</td><td>" + data[resto].results + "</td></tr>")
    }
    error: function() {
      console.log("something broke...")
    }
  })

});
