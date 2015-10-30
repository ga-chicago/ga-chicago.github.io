var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var i = 0; i < arr.length; i++){
  console.log('in inc. is: '+ i);
  console.log(arr[i]);
}

//FOR-IN or FOR-EACH loop

for(var pirate in arr){
  console.log(arr[pirate]);
}


//array of places to be

var places2Be = ['Sears Tower', 'Shedd Aquarium', 'Navy Pier', 'Gold Coast', 'OYSY'];

for(var place in places2Be){
  console.log(places2Be[place]);
}

for(i = 0; i < places2Be.length; i++) {
  console.log(places2Be[i]);
  if (i == places2Be.length - 1){
    console.log('last one');
  };

};
