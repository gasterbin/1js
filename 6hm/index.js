// 1
// class Phone {
//     constructor(brand, model, color, price, year) {
//       this.brand = brand;
//       this.model = model;
//       this.color = color;
//       this.price = price;
//       this.year = year;
//     }

//     calculateAge() {
//       const currentYear = new Date().getFullYear();
//       return currentYear - this.year;
//     }
  
//     setYear(year) {
//       const currentYear = new Date().getFullYear();
//       if (year >= 2000 && year <= currentYear) {
//         this.year = year;
//       } else {
//         console.error("Invalid year of manufacture");
//       }
//     }

//     getYear() {
//       return this.year;
//     }
//   }
  
//   const myPhone = new Phone("Samsung", "Galaxy S20", "Black", 799, 2020);
  
//   console.log(`My phone is ${myPhone.calculateAge()} years old.`);

//   myPhone.setYear(2020);

//   console.log(`Updated year of manufacture: ${myPhone.getYear()}`);

// Налаштування
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Змініть код лише під цим рядком
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop ==! tracks && value ==! '') {
      records[id][prop] = value;
    } else if (prop == tracks && value != '') {
      if (records[id].hasOwnProperty('tracks') === false) {
        records[id][prop] = [];
      } else
      records[id][prop].push(value);
    
    }
    return records;
  
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  