import Shape from './Shape.js';
export default class Rectangle extends Shape {
    #width;
    #height;
    static count = 0;
    constructor(color, width, height) {
        super(color);
       this.setwidth(width);
       this.setheight(height);
            if (this.constructor === Rectangle) {
                 Rectangle.count++;
}
    }
    setwidth(value){
        if(value > 0){
            this.#width = value;
        } else {
            throw new Error("Width must be a positive number");
        }

    }
    static getcount(){
        return Rectangle.count;
    }
    getwidth(){
        return this.#width;
    }
    getheight(){
        return this.#height;
    }
    setheight(value){
        if(value>0){
            this.#height=value;
        }
        else{
            throw new Error('width must be a positive number');
        }
    }
    calculateArea(){
        return this.getheight()*this.getwidth();
    }
    calculatePerimeter(){
        return 2*(this.getheight()+this.getwidth());
    }

}
