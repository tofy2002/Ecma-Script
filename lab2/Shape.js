export default class Shape {
    #color;
    constructor(color) {
        this.#color = color;
    }
    get color(){
        return this.#color;
    }
    set color(value){
        this.#color = value;
    }
    printColor(){
        console.log(`The color of the shape is ${this.#color}`);
    }
    calculateArea(){
        return 0;
    }
    calculatePerimeter(){
        return 0;
    }
}