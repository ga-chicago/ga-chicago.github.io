var rockets = {
	SaturnV: {
		name: "Saturn V",
		height: 111,
		diameter: 10,
		mass: 2840622,
		stages: 3
	},
	AtlasV: {
		name: "Atlas V",
		height: 62.5,
		diameter: 3.81,
		mass: 21173,
		stages: 2
	},
	SpaceShuttle: {
		name: "Space Shuttle",
		height: 56.1,
		diameter: 8.7,
		mass: 74842.7,
		stages: 1
	},
	DeltaII: {
		name: "Delta II",
		height: 37.8,
		diameter: 2.4,
		mass: 231870,
		stages: 2
	}
};

var json = JSON.stringify(rockets);

console.log(json);

var stringObj = JSON.parse(json);

console.log(stringObj);

for (var i in stringObj) {
	for (var j in stringObj[i]) {
		console.log(j + ': ' + stringObj[i][j]);
	}
}