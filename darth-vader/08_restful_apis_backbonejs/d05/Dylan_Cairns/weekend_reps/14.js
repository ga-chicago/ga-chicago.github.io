// jquery script hurrrr 

$.ajax({
    url: 'http://www.omdbapi.com/?t=edward+scissorhands&y=&plot=short&r=json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        var keylist = Object.keys(data);
        for (var i = 0; i < keylist.length; i++) {
            var attr = String(keylist[i]); 
            console.log(keylist[i] + ': ' + data[attr]); 
        };
    }
});