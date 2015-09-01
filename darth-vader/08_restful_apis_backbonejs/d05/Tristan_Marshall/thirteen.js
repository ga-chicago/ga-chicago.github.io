// 13. AJAXXXXXXXXXXXXXXXX
//
// Use jQuery to create an $.ajax request that gets JSON.
// You will get JSON from Chicago public data.
// Console.log the output.
// Create a success and error function that log out information.
// You do not need to get very detailed; this is a basic function that just fetches and logs out all the data.

$.ajax({
  url: "https://data.cityofchicago.org/api/views/xzkq-xp2w/rows.json?accessType=DOWNLOAD",
  type: 'POST',
  dataType: 'JSON',
  success: function(){
    alert("This is a success alert!");
  },
   error: function(){
     alert("this is an error alert!");
   }
});
