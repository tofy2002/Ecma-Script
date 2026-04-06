import Car from "./Car.js";

export default class ElectricalCar extends Car{
    #charge;
constructor(name,speed,charge){
    super(name,speed);
    this.#charge=charge
}
    chargeBattery(chargeTo){
        if(chargeTo>0 && chargeTo<=100)
        this.#charge=chargeTo
    }
    accelerate(){   
       this.setSpeed(this.getSpeed() + 20);
        this.#charge--;
        console.log(`${this.getName()} is going at ${this.getSpeed()} km/h, with a charge of ${this.#charge}%`); 
    }
    brake(){
        super.brake();
    }

}
