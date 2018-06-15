class User{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(this.name);
  }
  parentFunction(){
    return 'parent message';
  }
}
class age extends User{
  constructor(name, age){
    super(name);
    this.age = age;
  }
  childFunction(){
    const mess = super.parentFunction();
    console.log(mess);
  }
}

let var1 = new age('John', 18);
// var1.sayHi();
// var1.childFunction();

class Pizza{
  constructor(radius, slices){
    this.radius = radius;
    this._slices = slices;
  }
  get slices(){
    return this._slices;
  }
  set slices(slices){
    this._slices = slices;
  }
};//?what

// const pie = new Pizza(12, 6);
// console.log(pie.slices);
// pie.slices = 12;
// console.log(pie.slices);

class Circle{
  constructor(x,y,radius){
    this.x = x;
    this.y=y;
    this.radius=radius;
  }
  get diameter(){
    return this.radius * 2;
  }
}
const cir1 = new Circle(1,2,5);
console.log(cir1.diameter);
