function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }


  User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  
  const users = [];
  
  for (let i = 0; i < 100; i++) {
    const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() > 0.5,
      `useremail${i}@gmail.com`,
      Math.random() > 0.5
    );
    users.push(user);
  }

//1
    function  isNotSubscribed(user) {
        return !user.isSubscribed;
    }
  const notSubscribed = users.filter(isNotSubscribed);
  
//2
function isFemaleschoolAge(user, isMale, age) {
    return user.isMale === false && user.age >= 6 && user.age <= 18 ? true: false;
};
const femaleSchoolAge = users.filter(isFemaleschoolAge);



//3 
const emailToDelete = "useremail5@gmail.com";

const indexOfUserToDelete = users.findIndex(user => user.email === emailToDelete);

if (indexOfUserToDelete !== -1) {
  users.splice(indexOfUserToDelete, 1);
}

//4

const emailToCheck = "useremail99@gmail.com";
  
function IsThatMail(user, email) {
    return user.email === email;
}

const hasUserWithEmail = users.some(IsThatMail);


//5 

function isUserSubscribed(user) {
    return user.isSubscribed;
}

const userSubscribed = users.every(isUserSubscribed);

console.log(users,
    'Не підписані користувачі:>>',
    notSubscribed, 
    'Користувачі жіночої статі шкільного віку:>>',
    femaleSchoolAge, 
    'Чи є користувач з email99:>>',
    hasUserWithEmail,
    'Чи всі підписані:>>',
    userSubscribed);