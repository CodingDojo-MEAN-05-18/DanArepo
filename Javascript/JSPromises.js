var isMomHappy = true;

var willIGetNewPhone= new Promise (
  function (resolve, reject){
    if (isMomHappy){
      var phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve (phone);
    } else {
      var reason = new Error('Mom is not happy');
      reject(reason);
    }
  }
);


var askMom = function(){
  console.log('before');
  willIGetNewPhone
  .then(showOff)
  .then(function(fulfilled){
    console.log(fulfilled);
    //output will read {brand 'samsung, color: 'black' }
  })
  .catch(function(error){
    console.log(error.message);
  });
  console.log('after');
};

var showOff = function(phone){
  // return new Promise(
  //   function(resolve, reject){
  //     var message = 'hey friend check out my new phone';
  //     resolve(message);
  //   }
  // )
  var mes = 'yay new phone';
  return Promise.resolve(mes);
}

askMom();
