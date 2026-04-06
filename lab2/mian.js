import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import ElectricalCar from "./ElectricalCar.js";
let shapes=[new Rectangle("red",10,3),new Square("blue",5),new Square("blue",4)]
shapes.forEach(shape=>{
    console.log(shape.calculateArea());
});
console.log(Rectangle.getcount());
console.log(Square.getcount());

import Car from "./Car.js";

let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);

car1.accelerate(); // 130
car1.brake();      // 125

car2.brake();      // 90
car2.accelerate(); // 100

let ev1=new ElectricalCar("Tesla",120,23);
ev1.accelerate();       