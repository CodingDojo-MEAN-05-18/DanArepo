// //challenge 1
//
console.log(hello);
var hello = 'world';
//
// //output will be undefined
//
// //challenge 2
//
var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}
//
// //output will be magnet
//
// //challenge 3
//
var brendan = 'super cool'
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
//
// //output will be 'super cool' bc the function was never called
//
// //challenge 4
//
var food = 'chicken';
console.log(food); //output = 'chicken'
eat();
function eat(){
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}
//
// //output will be 'chicken' then 'half-chicken'
//
// //challenge 5
//
mean();
console.log(food);
var mean = function() {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
}
console.log(food);
//
// //output will be a function error
//
// //challenge 6
//
console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
  genre = 'rock';
  console.log(genre);
  var genre = 'r&b';
  console.log(genre);
}
console.log(genre);

//output will be 'undefined', 'rock', 'r&b', 'disco'

//challenge 7

dojo = 'san jose';
console.log(dojo);//output will be san jose
learn();
function learn(){
  dojo = 'seattle';
  console.log(dojo);//output will be seattle
  var dojo = 'burbank';
  console.log(dojo);//output will be burbank
}
console.log(dojo);//output will be san jose
