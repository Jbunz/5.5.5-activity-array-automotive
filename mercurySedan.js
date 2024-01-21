//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car extends VehicleModule.Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
  this.maximumPassengers = 5;
  this.passengers = 0;
  this.numberOfWheels = 4;
  this.maximumSpeed = 160;
  this.fuel = 10;
  this.scheduleService = false;
{

  }

  loadPassengers(num) {
    if (this.passengers < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
        }
      this.availableRoom = true;
    }
  

  start() {
    if (this.fuel > 0) {
        console.log("engine has started.");
      return this.started = true
    } else {
        console.log("no fuel");
        return this.started = false;
    }
    }
  

  scheduleService(mileage) {
    if (mileage > 30000) {
      this.timeForMaintenance = true
      return this.timeForMaintenance;
    }
  }
}

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
