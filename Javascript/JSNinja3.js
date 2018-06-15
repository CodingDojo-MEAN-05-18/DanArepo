class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(this.name);
  }
  showStats(){
    console.log(this.name, this.health, this.speed, this.strength);
  }
  drinkSake(){
    this.health += 10;
    console.log(`${ this.name } drank sake and regained 10 health`);
  }
}
class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log('Wisdom wisdom wisdom')
  }
}

const sensei = new Sensei('Master Splinter');
sensei.speakWisdom();
sensei.showStats();
