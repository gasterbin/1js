class Vehicle {
    constructor (dimensions, brand, model, manufactureDate) {
        this.dimensions = dimensions;
        this.brand = brand;
        this.model = model;
         this.manufactureDate = new Date(manufactureDate);
    }

    getFullInfo() {
        return `${this.brand} ${this.model} вік: ${new Date().getFullYear() - this.manufactureDate.getFullYear()} років`;
    }

    get age() {
        return new Date().getFullYear() - this.manufactureDate.getFullYear();
    }
}

class PassengerTransport extends Vehicle {
    constructor (dimensions, brand, model, manufactureDate, passengerLimit) {
        super(dimensions, brand, model, manufactureDate);
        this.passengerLimit = passengerLimit;
        this.passengerCount = 0;
    }

    addPassenger() {
        return this.passengerCount < this.passengerLimit ? (this.passengerCount++, true) : false;
    }

    getFullInfo() {
        return `${super.getFullInfo()}, максимальна кількість пасажирських місць: ${this.passengerLimit}`;
    }
}

class FreightTransport extends Vehicle {
    constructor (dimensions, brand, model, capacity) {
        super(dimensions, brand, model);
        this.capacity = capacity;
    }

    checkLoadingPossibility(weight) {
        return  weight <= this.capacity;
    }

    getFullInfo() {
        return `${super.getFullInfo()}, вантажопідйомність: ${this.capacity} кг`;
    }
}


const car = new Vehicle({ length: 4.5, width: 1.8, height: 1.5 }, 'Toyota', 'Corolla', '2018-07-01');
console.log(car.getFullInfo()); 
console.log(car.age); 


const bus = new PassengerTransport({ length: 12, width: 2.5, height: 3.8 }, 'Mercedes', 'Sprinter', '2019-03-15', 5);
console.log(bus.getFullInfo()); 
console.log(bus.addPassenger()); 
console.log(bus.addPassenger()); 
console.log(bus.addPassenger()); 
console.log(bus.addPassenger()); 
console.log(bus.addPassenger()); 
console.log(bus.addPassenger()); 

const truck = new FreightTransport({ length: 8, width: 2.6, height: 3.2 }, 'Volvo', 'FH16', 25000);
console.log(truck.getFullInfo()); 
console.log(truck.checkLoadingPossibility(20000)); 
console.log(truck.checkLoadingPossibility(30000)); 