var cats = ['Mulgrew Miller', 'McCoy Tyner', 'Hampton Hawes', 'Oscar Peterson'];
cats.push('Herbie Hancock');
cats.unshift('Bill Evans');

var lengthOfArray = cats.length;
for (var i=0; i < lengthOfArray; i++) {
  console.log('i=' + i, 'length of array = ' + lengthOfArray);
  console.log('Have you listened to...' + cats[i]);
//  cats.pop();
}
