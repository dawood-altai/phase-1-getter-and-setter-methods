class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(value) {
      this.radius = value / 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    set circumference(value) {
      this.radius = value / (2 * Math.PI);
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }
  

const myCircle = new Circle(5);
console.log(myCircle.radius); 
console.log(myCircle.diameter); 
console.log(myCircle.circumference); 
console.log(myCircle.area); 

myCircle.diameter = 14;
console.log(myCircle.radius); 
console.log(myCircle.diameter); 
console.log(myCircle.circumference); 
console.log(myCircle.area); 

myCircle.area = 50;
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.circumference); 
console.log(myCircle.area); 
