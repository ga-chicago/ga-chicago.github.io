var rally = {
  name: "March on Montgomery",
  year: 1963,
  cause: "Allow all children to go to any schoole",
  notable_attendees: ["Martin Luther King, Jr.", "Rosa Parks"],
  result: "40 more years of bullshit"
}

var rallyJSON = JSON.stringify(rally);
console.log(rallyJSON);
var rallyOBJ = JSON.parse(rallyJSON);

for (var item in rallyOBJ) {
  console.log(item + ": " + rallyOBJ[item])
}
