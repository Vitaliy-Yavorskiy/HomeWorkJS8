// Завдання 4
// Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// Приклад роботи:
// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
// Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.

let mySite = 'https://www.google.com';
let myDomen = mySite.slice(8) ;
console.log(myDomen);

let mySite1 = 'http://www.w3schools.com';
let myDomen1 = mySite1.slice(11) ;
console.log(myDomen1);
