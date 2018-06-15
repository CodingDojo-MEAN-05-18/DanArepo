function Ninja(name){
  this.name = name;
  this.getName = function(){
    return name;
  };
  this.sayName = function(){
    console.log(this.name + ' logged to the console');
    return this;
  };
  this.showStats = function(){
    console.log('Name: ' + this.name + ', Health: ' + this.health + ', Strength: ' + this.strength);
    return this;
  };
  this.drinkSake = function(){
    console.log(this.name + ' drank sake and restored 10 health!');
    this.health += 10;
    return this;
  };

}
Ninja.prototype.speed = 3;
Ninja.prototype.strength = 3;
Ninja.prototype.health = 100;
Ninja.prototype.punch = function(ninjaToBeHit){
  if (ninjaToBeHit instanceof Ninja){
    console.log(this.name + ' punched ' + ninjaToBeHit.name + ' for 5 health damage!');
    ninjaToBeHit.health -= 5;
  }
  else{
    console.log("Um... this isn't a ninja...");
  }
  return this;
};
Ninja.prototype.kick = function(ninjaToBeHit){
  if ( ninjaToBeHit instanceof Ninja){
    console.log(this.name + ' kicked ' + ninjaToBeHit.name + ' for 15 health damage!');
    ninjaToBeHit.health -= 15;
  }
  else {
    console.log("Um... this isn't a ninja...")
  }
  return this;
};


var stefNin = new Ninja('Stefanie');
var lukeNin = new Ninja('Luke');

stefNin.sayName();
stefNin.showStats().drinkSake().showStats();
stefNin.punch(lukeNin);
lukeNin.showStats().kick(stefNin);
stefNin.showStats();
