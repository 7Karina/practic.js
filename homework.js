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

///    30.09 субота

/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

<div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
</div>
*/

// const buttonRef = document.querySelector("#alertButton");
// const inputRef = document.querySelector("#alertInput");
// buttonRef.addEventListener("click", showAlert);
// function showAlert() {
//   alert(inputRef.value.trim());
// }

// 2 task

//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  /* <div class="item"> 
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div> */
}
{
  /* <button class="add-btn">add</button>
  <div class="container"></div> */
}
// варіант 1
// const containerEl = document.querySelector(".container");
// const btnEl = document.querySelector(".add-btn");

// btnEl.addEventListener("click", addMarkup);

// function addMarkup() {
//   const div = document.createElement("div");
//   const h3 = document.createElement("h3");
//   const p = document.createElement("p");
//   h3.textContent = "Title";
//   p.textContent = "Text Random";
//   div.classList.add("item");
//   div.append(h3, p);
//   containerEl.append(div);
// };

//варінт 2

// function addMarkup() {
//   const markup = `
// <div class="item">
// <h3>Заголовок</h3>
// <p>текст текст текст</p>
// </div> `;
//   containerEl.insertAdjacentHTML("afterbegin", markup);
// }

//task 3
/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/

// const btnRef = document.querySelector("#swapButton");
// const inpOneRef = document.querySelector("#leftSwapInput");
// const inpTwoRef = document.querySelector("#rightSwapInput");

// btnRef.addEventListener("click", handlerClick);
//варіант 1
// function handlerClick() {
//   const value = inpOneRef.value;
//   inpOneRef.value = inpTwoRef.value;
//   inpTwoRef.value = value;
// };
//варіант 2 (дескрутурізація)
// function handlerClick() {
//   [inpOneRef.value, inpTwoRef.value] = [inpTwoRef.value, inpOneRef.value];
// }

//task 4

/* Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

<div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>
*/

// const passwordRef = document.querySelector("#passwordInput");
// const btnRef = document.querySelector("#passwordButton");

// btnRef.addEventListener("click", oneClick);

// function oneClick() {
//   if (passwordRef.type === "text") {
//     passwordRef.type = "password";
//     btnRef.textContent = "Розскрити";
//   } else {
//     passwordRef.type = "text";
//     btnRef.textContent = "Приховати";
//   }
// }

//варіант 2 (скороченний код)
// function oneClick() {
//   const flag = passwordRef.type === "text";
//   passwordRef.type = flag ? "password" : "text";
//   btnRef.textContent = flag ? "Розскрити" : "Приховати";
// }

//task 5

//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

{
  /* <button class="add-btn">add</button>
    <div class="play"></div> */
}
{
  /* <style>
  .play {
    background: pink;
    width: 100px;
    height: 100px;
  }
</style> */
}

// const btnRef = document.querySelector(".add-btn");
// const divRef = document.querySelector(".play");

// btnRef.addEventListener("click", handlerClick);

// let opacity = 1;

// function handlerClick(event) {
//   opacity -= 0.1;
//   divRef.style.opacity = opacity;
// }

//task 6

// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

{
  /* <ul class="list"></ul> */
}
const markup = [];

let result = null;
const ulRef = document.querySelector(".list");

do {
  result = prompt("Твоє прізвище");
  if (result) {
    const li = `<li>${result}</li>`;
    markup.push(li);
  }
} while (result);

ulRef.insertAdjacentHTML("afterbegin", markup.join(""));
