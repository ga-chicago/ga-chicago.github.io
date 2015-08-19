var park = {
  name: "Redwood National Park",
  state: "California",
  latlong: "41° N, 124° W",
  miles_of_trails: 200,
  size: 133000,
  has_campground: true,
  has_events: true
}

json = JSON.stringify(park)
console.log(json)

objtwo = JSON.parse(json)
console.log(objtwo)

for (var key in objtwo) { console.log(key + ": " + objtwo[key]) }
