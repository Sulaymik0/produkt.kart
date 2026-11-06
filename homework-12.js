class Porshe {
    constructor(brand, model, black) {
        this.brand = brand;
        this.model = model;
        this.black = black;
    }

    getBrand() {
        return this.brand;
    }
}

class Car extends Porshe {
    constructor(brand, model, color) {
        super(brand, model, color);
    }
}

const Car911 = new Car ("Porshe", 911, "Black");

console.log(Car911);
console.log(Car911.getBrand());