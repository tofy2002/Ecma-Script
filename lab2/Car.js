export default class Car{
    #serial;
    #name;
    #speed;
    static count=0;
    constructor(name,speed){
        this.#serial=Math.floor(Math.random() * 1000000); 
        this.#name=name;
        this.setSpeed(speed);
        Car.count++;
    }
     getSerial() {
    return this.#serial;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setSpeed(speed) {
    if (speed >= 0) {
      this.#speed = speed;
    } else {
      throw new Error("Speed must be positive");
    }
  }

  getSpeed() {
    return this.#speed;
  }
accelerate() {
  this.#speed += 10;
  console.log(`${this.#name} is going at ${this.#speed} km/h`);
}

brake() {
  this.#speed -= 5;

  if (this.#speed < 0) this.#speed = 0; // prevent negative speed

  console.log(`${this.#name} is going at ${this.#speed} km/h`);
}
static getCount() {
  return Car.count;
}
printInfo() {
  console.log(`Car Serial: ${this.#serial}, Total Cars: ${Car.count}`);
}
}