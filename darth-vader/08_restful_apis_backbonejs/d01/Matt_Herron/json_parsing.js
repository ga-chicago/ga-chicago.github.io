var race = {
  car: "Honda",
  driver: "Matt Herron",
  model: "Prelude",
  competitors: ["mustang", "trans am", "intruder", "ferrari", "supra"],
  crew_members: {
    pit_master: "Jim Haff",
    crew_chief: "Chris Kim",
    tires_and_wheels: "Dylan Cairnes",
    fuel_manager: "Tom Taylor"
  },
  stadium: "Monoco Internation Road Course",
  event_name: "Grand Prix of WDI",
  televised: true,
  open_event: false,
  sanctioned_F1: false
}


//convert obj to JSON
var race_JSON = JSON.stringify(race);

console.log("Here is the value of the JSON:");
console.log(race_JSON);

//convert JSON back to an object
var race_parsed = JSON.parse(race_JSON);

console.log("Here is the value back as an object:");
console.log(race_parsed);

//Loop through the converted object
for (key in race_parsed) {
  console.log(key + ": " + race_parsed[key]);
}
