console.log('----------1----------');
//0
const numbers = [6, 3, 2, 8, 10, 9];
console.log("Масив :>>", numbers);
//1
numbers.pop();
numbers.shift();
numbers.unshift(5);
numbers.push(11);
//2
console.log("Довжина масиву :>>", numbers.length);
//3
const numberscopy = Array.from(numbers);
console.log("Копія :>>", numberscopy);

console.log('----------2----------');
//4
const numbers2 = [3, 73, 0, 27, 66, 0, 2];

console.log('Масив 2 :>>', numbers2);

console.log('Елементи з парними індексами:>>');

for (let index = 0; index <= numbers2.length; index += 2 ) {
    console.log(numbers2[index]);
};
//5

console.log('Парні елементи:>>');
for (let i = 0; i < numbers2.length; i++)
{
  if ((numbers2[i] % 2) === 0)
  {
  	console.log(numbers2[i]);
  }
};

//6

console.log('Індекси нульових елементів:>>');
for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] === 0) {
        console.log(i);
         }
 };

 //7

let count = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 0) {
    count++;
  }
}
console.log('Кількість нульових елементів:>>', count);

console.log('----------3----------');

const numbers3 = [-1, 5, 0, 9, -10];

//8

function isNull(item) {
        return item != 0 ? true: false;
};

const numbers3Null = numbers3.filter(isNull);

console.log('Масив без нулей :>>', numbers3Null);

//9
 const numbers4 = [99, 5, 0, 9, 30];
function Mapped(item) {
        return item / 100;
};

const numbers4Mapped = numbers4.map(Mapped);

console.log('Масив "поділенні на 100":>>', numbers4Mapped);

//10 

const numbers5 = [2, 8, 11, 5, 23];

console.log('Масив "піднести до кубу" :>>', numbers5)

function toCube(item, index, array) {
        console.log(index, ':', item ** 3);
};

numbers5.forEach(toCube);

//11

const numbers6 = [3, 54, 10, 39, 17, 29];
 console.log('Масив з елементом, квадрат якого дорівнює 100:>>', numbers6)
function Equals100(item) {
        return item ** 2 === 100;
};

const numbers6foundIndex = numbers6.findIndex(Equals100);
console.log('Індекс елементу:>>',numbers6foundIndex);

numbers6.splice(numbers6foundIndex, 1);

//12

function isPrime(item) {
        return item % 2 === 0 ? true: false;
};

const numbers6isPrime = numbers6.every(isPrime);
console.log('Чи є усі числа парними:>>',numbers6isPrime);

//13 

function hasNegative(item) {
        return item < 0 ? true: false;
};

const numbers6hasNegative = numbers6.some(hasNegative);
console.log('Чи є відвід`ємний елемент:>>',numbers6hasNegative);