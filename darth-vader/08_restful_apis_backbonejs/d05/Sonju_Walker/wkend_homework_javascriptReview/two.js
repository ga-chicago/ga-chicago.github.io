2. Array Manipulation

Create an array.
Add 3 places you have visited in your life.
Remove two of them from the front of the array.
Add 3 places that you would like to travel to.
Remove one of them from the end of the array.


  var myTrips = ['Trinidad', 'Timor-Leste', 'Zanzibar'];
  var removeTrip = myTrips.shift();
  console.log(myTrips);
  // can't find the method to remove more than 1 attribute?


  var addCountries = myTrips.push('Papua New Guninea', 'Eypgt', 'India')
  console.log(myTrips);

  var removeOne = myTrips.pop();
  console.log(myTrips);
