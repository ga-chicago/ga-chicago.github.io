window.onload(){
  var food = ['apple', 'banana', 'cow', 'tuna'];

  for (var i = 0; i < food.length; i++) {
    console.log(food[i]);
  }

  var x = document.getElementById('button');

  if (x = true) {
    console.log('My button is working');
  }

  var sam = {
    height: '5\'9\"',
    weight: 170,
    hairColor: 'Brown',
    runningSpeed: 'Slower than a cheetah, faster than most babies',
    familyMembers: ['Andy', 'Jenna', 'Nick', 'Joellyn', 'Andy Sr.'],
  }
  function printArray() {
        for (var i = 0; i < sam.familyMembers.length; i++) {
          console.log('The element of the array is: ' + sam.familyMembers[i]);
        }
    }
  printArray();


  // using javascript console.log my button is working when it is clicked
  //Invoke your objects method using your button by passing in the object property that includes its arrray

}
