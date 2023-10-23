// --------------------1--------------------

const array = [[1, "first"], [3, "third"]];
const myMap = new Map(array);

myMap.set(2, "second"); 
myMap.delete(2); 

console.log('myMap :>>', myMap);
console.log('myMap.size :>>', myMap.size);
console.log(myMap.get(3));
console.log("Чи є в мапі числівник для числа 2 :>>", myMap.has(2));
console.log([...myMap.keys()]);
console.log([...myMap.values()]);

// --------------------2--------------------')

function transformer (inputText) {
    return inputText 
    .split(' ')
    .map((w) => 
    !isNaN(w) && myMap.has(parseInt(w)) ? myMap.get(parseInt(w)) : w
    )
    .join(' ');
}


const inputText = "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";
const outputText = transformer(inputText);
console.log(outputText);