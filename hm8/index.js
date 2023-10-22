// ---------------------------------------------------1--------------------------------------------------------------
class Phone {
    constructor(brand, model, color, price, manYear) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.manufacturingYear = manYear;
    }

    calculateAge() {
        return new Date().getFullYear() - this.manufacturingYear;
    }

    set manufacturingYear(year) {
        const currentYear = new Date().getFullYear();
        if (year >= currentYear - 20 && year <= currentYear) {
            this._manufacturingYear = year;
        } else {
            throw new Error('Рік виробництва повинен бути від ' + (currentYear - 20) + ' до ' + currentYear);
        }
    }

    get manufacturingYear() {
        return this._manufacturingYear;
    }
}
try {
    const myPhone = new Phone('Samsung', 'Galaxy S20', 'Black', 800, 2020);
    console.log(`Вік телефона: ${myPhone.calculateAge()} років`);
} catch (error) {
    console.error(error.message);
}

// ---------------------------------------------------2--------------------------------------------------------------
class RangeValidator {
    constructor(from, to) {
        if (from <= to) {
            this._from = from;
            this._to = to;
        } else {
            throw new Error('Помилка! from повинно бути менше або рівне to');
        }
    }

    set from(value) {
        if (value <= this._to) {
            this._from = value;
        } else {
            throw new Error('Помилка! from повинно бути менше або рівне to');
        }
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (value >= this._from) {
            this._to = value;
        } else {
            throw new Error('Помилка! to повинно бути більше або рівне from');
        }
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to];
    }

    isValid(number) {
        return number >= this._from && number <= this._to;
    }
}