// 0
let isWorkingAge = function (age) {
    return age >= 16 && age <= 65 ? true : false;
};

console.log(isWorkingAge(20));
console.log(isWorkingAge(15));
console.log(isWorkingAge(66));

//1 
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
};

console.log(isPrime(13));
console.log(isPrime(12));

// 2
function checkMultiplicity(first, second) {
    return first % second === 0 ? true : false;
};

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

// 3 
var triangle = function (linef, lines, linet) {
    return linef + lines > linet ? true : false;
};

console.log(triangle(12, 4, 10));
console.log(triangle(12, 4, 30));

var arearectangle = function (a, b) {
    return a * b;
};

console.log(arearectangle(12, 2));
console.log(arearectangle(6, 4));