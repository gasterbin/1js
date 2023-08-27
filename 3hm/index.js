//1
const home = {
    city: 'Mykolayiv',
    street: 'Sadova',
    apartmen: '15a',
};
const customer = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    isMale: check(true),
    phone: '+380960503482',
    changePhone (newphone) {
        this.phone = newphone;
    },
    email: 'ivan@gmail.com',
    password: 'qwerty',
    addres: home,
};

customer.changePhone('+380976998567');

function check(Male) {
    return Male === true ? 'Male': 'Female';
};

console.log(customer.addres);
delete customer.addres;
console.log(customer);

const customer2 = Object.assign({}, customer);
console.log('customer2 :>>', customer2);

const customer3 = { ...customer};
console.log('customer3 :>> ' , customer3);

//2
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
};
for (key in cat) {
    console.log('key :>>' , key);
};

//3 
function Book(author, bookname, year, city, publishName, price) {
    this.author = author;
    this.bookname = bookname;
    this.year = year;
    this.publish = { publishName: publishName, city: city};
    this.price = price;
    this.ageOfBook = function () {
        return 2023 - this.year;
    };
    this.changePrice = function (newPrice) {
        this.price = newPrice;
    };
}

const book1 = new Book (
    'Kerstin Gier',
    'Rubinrot',
    2009,
    'London',
    'Arena',
    450
);
console.log('book :>>' , book1);