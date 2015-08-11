var sideA = document.getElementById('sideA');
var sideB = document.getElementById('sideB');
var sideC = document.getElementById('sideC');

var form = document.getElementById('pythagoreanForm');

form.onsubmit = function() {

  var result;

  if (sideA.value) {
    if (sideB.value) {
      result = Math.pow(sideA.value, 2) + Math.pow(sideB.value, 2);
      sideC.value = Math.sqrt(result);
      return false;
    } else if (sideC.value) {
      result = Math.pow(sideA.value, 2) + Math.pow(sideC.value, 2);
      sideB.value = Math.sqrt(result);
      return false;
    }
  }

  if (sideB.value) {
    if (sideA.value) {
      result = Math.pow(sideA.value, 2) + Math.pow(sideB.value, 2);
      sideC.value = Math.sqrt(result);
      return false;
    } else if (sideC.value) {
      result = Math.pow(sideB.value, 2) + Math.pow(sideC.value, 2);
      sideA.value = Math.sqrt(result);
      return false;
    }
  }

  // alert('the missing side is: ' + Math.sqrt(result));

  return false;
}
