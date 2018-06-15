// event handling

/** its when you attach a function or something to an event is JS

html page
<html>
<body>
<button id='somebtn'>Some button</button>
<script>
  var button = document.getElementById('somebtn');
  button.addEventListener('click', functionName);
  function functionName(){
    alert('click');
  }
</script>

**/

//Immediate Functions

//syntax to immediately fire a function as soon as its declared

(function(){
  console.log('something has happened');
}());

//or...

(function(){
  console.log('i, too, am an immediate function');
})();

//passing args into an immediate function
var arg1 = 7;
var arg2 = 'hi';
(function (p1, p2){
  console.log('immediate func 3');
})(arg1, arg2);

// a common practice is incorporating the global variable into an arg
//this creates a copy of the global inside the function which allows for faster lookup times

// (function (global){
//   console.log(window);
//   console.log(global);
// })(window);

//some benefits
/**
reduces the num of global vars and mitigates var pollution
features are self contained units, resulting in ewasier testing
**/

//example code
var a = 'hi';
var b =38;
function test(){
  console.log(add([b,b]));
  console.log(a);
}
function add(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
test();

//or.......

(function(){
  var a = 'hi';
  var b = 38;
  function test(){
    console.log('imm func', add([b,b]));
  }
  function add(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
  test();
}());

//closures

//a function that is returned from another function. it makes for some interesting behaviour

//example

function Outer(){
  //count is function scoped var
  var count = 0;
  //this is the inner function that does stuff the logs it
  function inner(){
    count++;
    console.log(count);
  }
  return inner;
  //return the inner function bc we can!!!!!!!!11!11
}

var counter = Outer();

counter();
counter();
for ( let i = 0; i < 10; i +=2){
  counter();
}

//console.log(count); //this will be undefined as its outside the global scope

/** so what happened was that the count var was instantiated when the outer func was called
but since we return the 'inner' func, it stored the data in 'counter' function instead of 'count' var
now every time we call the counter function it saves the return value without resetting the variable
**/
//currying

// its the idea that you only run part of a function, its functional programming as opposed to object oriented programming

//example: unccurried
function ninBelt(nin, bColor){
  console.log('ninja ' + nin + ' has earned a ' + bColor + ' belt.');
}
ninBelt('Stef', 'Black');

//example: curried
function ninjaBelt(nin){
  return function belt(beltColor){
    console.log('ninja ' + nin + ' has earned a ' + beltColor + ' belt.')
  }
}
ninjaBelt('lucas')('red');
