//reference type
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
object1 === object2; //true
object1 === object3; //false (different objects)
[] === []; //false (different arrays)

//context - tells us where we are within the object
      //'this' is what is to the left of the dot (referring to what           object it is inside of)
const object = {
  a: function() {
    console.log(this);
  }
}

//instantiation - make a copy of an object and reuse the code
      //making 'instances' 

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce () {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}.`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WOW, I'm a ${this.type}.`)
  }
}

const wizard1 = new Wizard('Norah', 'Healer');
const wizard2 = new Wizard('Laura', 'Helper');