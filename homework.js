// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = (callback) => {
//     const name = prompt("Введіть своє ім'я");
//     if (name.trim() === "") {
//         return
//     }
//     callback(name);
// };
// function greet(name) {
//     console.log("Привіт " + name);
// };

// letMeSeeYourName(greet)

// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
// `let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const result = studentRecords.reduce((acc, item) => {
//     return acc + item.marks;
// }, 0)

// console.log(result)`

// const User = function ({ userName, age, numbersOfPost }) {
//   (this.userName = userName),
//     (this.age = age),
//     (this.numbersOfPost = numbersOfPost);
// };

/*
Реалізуйте  функцію MyString, в прототип додай методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді,
метод ucFirst(), який параметром приймає рядок та повертає цей же рядок,
зробивши його першу літеру заголовком і метод ucWords,
який приймає рядок і робить великою першу літеру кожного слова цього рядка.
 */

// const MyString = function () {

// };

// MyString.prototype.reverse = function(str) {
//     return str.split("").reverse().join("");
// }

// MyString.prototype.ucFirst = function (str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// MyString.prototype.ucWords = function (str) {
//     const words = str.split(" ");
//     const _this = this;
//     return words.map(function (word) {
//         console.log(_this)
//         return _this.ucFirst(word);
//     }).join(" ");
// }

// const str = new MyString();
// console.log(str.reverse("abcde")); //выведет 'edcba'
// console.log(str.ucFirst("abcde")); //выведет 'Abcde'
// console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde

/*
    Є об'єкти користувачів та функція changeSalary.
    Необхідно змінити зарплату користувачів з допомогою цієї функции:
    Марку збільшити на 100, а Джеку зменшити на 200.
*/

// const worker1 = {
// name: "Mark",
// salary: 1300,
// };

// const worker2 = {
// name: "Jack",
// salary: 2500,
// };

// function changeSalary(value) {
//     this.salary += value;
// };

// changeSalary.call(worker1, 100)
// console.log(worker1)

// changeSalary.call(worker2, -200)
// console.log(worker2)

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// class Worker{
//     constructor(name, surname, rate, days){
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//     }

//     getSalary() {
//        return this.rate * this.days;
//     }

//     get getFullName() {
//         return `${this.name} ${this.surname}`
//     }

// }

// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31
//-----------------------------------------------------------------------------//
// function NameMe(first, last) {
// this.firstName = first;
// this.lastName = last;

// return {
//     name: this.firstName + " " + this.lastName,
//     firstName: first,
//     lastName: last,
// };

// }

// var n = new NameMe("John", "Doe");
// console.log(n.firstName); //Expected: John
// console.log(n.lastName); //Expected: Doe
// console.log(n.name); //Expected: John Doe

/*
Клієнт
Напиши клас Client який створює об'єкт із властивостями login та email.
login має бути суспільною властивістю, а email приватним.
Доступ до email зроби через геттер та сетер.
Перед тим як змінити емейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'
*/

// class Client {
//   #email;
//   constructor(login, email) {
//     this.login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (this.#validat(newEmail)) {
//       this.#email = newEmail;
//     } else console.log("Email is not valid!");
//   }

//   #validat(newEmail) {
//     return newEmail.includes("@");
//   }
// }
// const client = new Client("A123", "qwerty@mail.com");

// client.email = "aser@mail.com";
// console.log(client.email);
