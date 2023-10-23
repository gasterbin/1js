// 1
const set1 = new Set([1, 2, 3]);

console.log('set1.has(3) :>>', set1.has(3), 'set1.has(4) :>>', set1.has(4));

set1.add(4).add(5);

for (const item of set1) {
    console.log(item);
}

let sum = 0;
set1.forEach(item => (sum += item));
console.log('Сума :>>', sum);

set1.delete(2);

set1.clear();

//2

const array1 = [1,6,9,4,9,1,5,6];
const array2 = [5,10,11];

const uniqueArray1 = [...new Set(array1)];
console.log('Перший масив унікальних значень:>>', uniqueArray1);

const uniqueArray2 = [...new Set([...array1, ...array2])];
console.log('Другий масив унікальних значень:>>', uniqueArray2);

// 3 

const messages = [
    { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
  ];

const uniqueUsers = [...new Set(messages.map(message => message.name))];

const userMessagesMap = new Map();

uniqueUsers.forEach(userName => {
  const userMessages = messages
    .filter(message => message.name === userName)
    .map(({ message, date }) => ({ message, date }));
  userMessagesMap.set(userName, userMessages);
});

console.log("Масив унікальних імен користувачів:");
console.log(uniqueUsers);
console.log("Мапа імен користувачів та їх повідомлень:");
console.log(userMessagesMap);
