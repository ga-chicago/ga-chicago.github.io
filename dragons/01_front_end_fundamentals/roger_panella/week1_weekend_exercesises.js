// Round 1
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var lengthOfNames = [];

function stringLen(arr) {
    for (i = 0; i < arr.length; i++) {
        lengthOfNames.push(arr[i].length);
    }
}
stringLen(beatles);
console.log(lengthOfNames)

// Round 1 - Version 2

/* var arrayOfStrings = ['John', 'George', 'Ringo', 'Paul'];
var lengthOfNames = [];
function stringLen() {
    for (i = 0; i < arrayOfStrings.length; i++) {
    lengthOfNames.push(arrayOfStrings[i].length);
  }
}
stringLen();
console.log(lengthOfNames); */

// Round 2
function transmogrifier(a, b, c) {
    var d = (a * b);
    var e = Math.pow(d, c);
    return e;
}

// Round 3
function toonify(accent, sentence) {
    if (accent == 'daffy') {
        var sentence = sentence.replace(/s/g, 'th');
        return sentence;
    } else if (accent == 'elmer') {
        var sentence = sentence.replace(/r/g, 'w');
        return sentence;
    } else {
        return sentence;
    }
}
toonify('daffy', 'roger is super radical');

// Round 4
function wordReverse(a) {
    var arrayOfStrings = a.split(" ");
    var inReverse = arrayOfStrings.reverse();
    var reverseString = inReverse.join(' ');
    return reverseString;
}
wordReverse("Oh shit that is awesome");

// Round 5
function backwardsString(x) {
    var n = [];
    for (var i = x.length - 1; i >= 0; i--) {
        n.push(x[i]);
    }
    var c = n.join('');
    return c;
}

function letterReverse(a) {
    var c = [];
    var b = a.split(' ');
    for (var i = 0; i < b.length; i++) {
        c.push(backwardsString(b[i]));
    }
    var d = c.join(' ');
    return d;
}
letterReverse('damn that is cool');


// Round 6
var beatles = ['John', 'Paul', 'Ringo', 'George'];
var biggestNum = 0;
var longestString = "";

function longest(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].length > biggestNum) {
            biggestNum = a[i].length;
            longestString = a[i];
        }
    }
    console.log(longestString);
}
longest(beatles);

// Round 7
var userSays = prompt("Tell me something, friend.");
var masterReply = masterReply;

function repMaster(a, masterReply) {
    var a = userSays;
    function masterReply(a) {
        console.log(a + ' proves that I am the rep Master!');
    }
    return masterReply(a);
}
repMaster(userSays, masterReply);
