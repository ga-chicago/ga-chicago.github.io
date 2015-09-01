friends = [ 'Matt','Tim','James','Isaac','Tom',
    'Jim','Brad','Dylan','Myron','Tristan','Chris','Eric'];
reasons = [
  ' he is late for kazoo lessons!',
  ' he just remembered there\'s s\'mores to be made!',
  ' he got bored with our conversation about closures.',
  ' he has an interview with Ashley Madison\'s security department.',
  ' one of just mentioned a guac off and well...',
  ' this lecture about loops is getting repetitive.',
  ' the weather\'s perfect for sidewalk surfin\'',
  ' we are just having too much fun.',
  ' no longer speak our language.',
  ' can just make home and return with a proper Hawaiian outfit.',
];
do {
  console.log(friends.pop() + ' has to go because'
     + reasons[Math.floor(Math.random()*reasons.length)]);
}
while (friends.length > 0);
