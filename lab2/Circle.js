import Shape from "./Shape.js";

export default class Circle extends Shape {
  #radius;
  #x;
  #y;

  constructor(color, radius, x, y) {
    super(color);
    this.setRadius(radius);
    this.setX(x);
    this.setY(y);
  }

  // radius
  setRadius(value) {
    if (value > 0) {
      this.#radius = value;
    } else {
      throw new Error("Radius must be positive");
    }
  }

  getRadius() {
    return this.#radius;
  }

  // x
  setX(value) {
    this.#x = value;
  }

  getX() {
    return this.#x;
  }

  // y
  setY(value) {
    this.#y = value;
  }

  getY() {
    return this.#y;
  }

  // override toString
  toString() {
    return `Circle → Color: ${this.color}, Radius: ${this.#radius}, Location: (${this.#x}, ${this.#y})`;
  }
}