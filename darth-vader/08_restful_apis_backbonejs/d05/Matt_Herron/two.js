/*
2. Array Manipulation

Create an array.
Add 3 places you have visited in your life.
Remove two of them from the front of the array.
Add 3 places that you would like to travel to.
Remove one of them from the end of the array.
*/

var places_visited = ['France', 'England', 'St. Maarten'];

//remove the first two from the array
places_visited = places_visited.filter(function(element, index, array) {
	return index > 1 ? true : false;
});

var more_places_to_visit = ['Japan', 'Spain', 'Brazil'];

//remove the last item from array
more_places_to_visit.pop();