// Create a script file in 'w08.../d01/..yourname/'
// Call it 'json_parsing.js'
// The contents should include...

// A new Object in Javascript - this object can be anything with at least 5 attributes! You set the values. Remember the ideation from this morning?
// Use the JSON object and the methods parse and stringify
// Convert the object back and forth! Console.log out your results both times.
// Finally... loop through the object after it has been converted to JSON then back... and output in each line key: + value


// New JavaScript Object:
var bikes = {
  brand: "Cannondale",
  type: "road bike",
  color: "black",
  size: "medium",
  groupset: "SRAM Red",
  weight_lbs: 15,
  cost_USD: 2800
}

// Conversion to JSON by using the stringify method of the JSON
var bikes_json = JSON.stringify(bikes);
// Conversion back to a JS Object by using the parse method of JSON
var bikes_obj = JSON.parse(bikes_json);


// Loop through the object after converting it to JSON
for (var attr in bikes_obj) { console.log(attr + ":" + bikes_obj[attr])};
