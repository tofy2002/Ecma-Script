import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle{
    static count = 0;
    constructor(color,width){
        super(color,width,width);
        Square.count++;
    
    }
    calculateArea(){
        return this.getwidth()*this.getwidth();
    }
    calculatePerimeter(){
        return (4*this.getwidth());
    }
     printColor(){
        console.log(`The color of the shape is ${this.getcolor()}`);
    }
    toString(){
        return `color is ${this.getcolor()} , area is ${this.calculateArea()} ,perm is ${this.calculatePerimeter()}` 
    }
    static getcount(){
        return Square.count;
    }
    
 }