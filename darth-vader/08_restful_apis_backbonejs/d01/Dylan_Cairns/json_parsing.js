var font = {
	name : "roboto",
	type : "serif",
	weights : ["light", "medium", "bold"], 
	license : "royalty-free",
	related : { 
		"similar": [
			"trebuchet ms", "sans serif" 
		], 
		"complimentary": [
			"open sans", "verdana"
		]
	}
}

var fontStr = JSON.stringify(font); 
var fontJson = JSON.parse(fontStr); 

for (var key in fontJson) {
	if (key == 'related') {
		for (var keys in fontJson[key]) {
			console.log(keys + ": " + fontJson[key][keys])
		} 
	} else {
	console.log(key + ': ' + fontJson[key]); 
	}
}