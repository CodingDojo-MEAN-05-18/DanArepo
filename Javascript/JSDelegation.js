//callbacks and delegation

function functionName(param1, functionToBeDoneLater){
  //name a function with a parmeter and function to be played after the param is evaluated
  var result = functionToBeDoneLater(param1);
  //declare a variable to hold the result of the callback function
  console.log(result);
  //display results... hopefully it will be better than this nonsense
}

function functionToTest(param1){
  //possible callback function
  var parametersToCheck = {
    'thing':'output is present',
  }
  //create parameters for this function/object
  if (parametersToCheck[param1]){
    return parametersToCheck[param1];
    //if param1 is within parameters to be checked then return the result
  }
  else {
    return 'no match';
    //or say there's no match
  }
}

functionName('thing', functionToTest);
functionName('somethingelse', functionToTest);


function printRes(doSomething) {
  //create a function that runs something
  var res = doSomething;
  //create a var that runs the function or whatever and holds the result
  console.log(res);
  //display the return
}

function showA7(){
  //create a function that does stuff, or not... im not the police
  console.log('function showA7 is running')
  console.log('this should display a 7');
  console.log('it should return a 5');
  console.log('showA7 has finished');
  return 5;
  //create a return for the function
}
printRes(showA7());
//run the function that runs a function


//promises

function getStuffFromDatabase(callback){
  //make a function that takes in another function
  var data;
  //make a variable to hold the return data
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'stef'}];
      callback(data);
      //throw that data into the callback function
    }
  }, 2000);
  //it will take 2 seconds to give back a result
  return data;
}
function requestDataFromDB(){
  var data = getStuffFromDatabase(function myCallback(data){
    console.log(data, 'ASync');
    for (var i = 0; i < data.length; i++){
      console.log(data[i].name);
    }
  });
  console.log(data, 'Sync');
}
function catchFly(){
  console.log('catch a fly');
}
requestDataFromDB();
console.log('pause');
catchFly();
