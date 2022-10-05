'use strict';
/*типы данных 
console.log('rge srhrth')
alert(234234)
console.log(null)
console.log(100.4)
console.log(100n)
console.log(true)
console.log(false)
console.log(undefined)
console.log({ value1: 123 })
*/
/*переменные
let string
string = 'test'

let myName = 'mv'
console.log(string)
console.log(myName)

// тестовая задача с переменными
let a = 'one'
console.log(a)
a = 'two'
console.log(a)

const b = 'one'
console.log(b)
b = 'two'
console.log(b)

console.log(a, b)
*/
/*Экранирование
// разные кавычки 3 штуки
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
const text = "Somebody told me: 'False'"
console.log(text)
const text = "Somebody told me: \n 'False'"
console.log(text)*/
/*Операторы и операнды
// 10%3=1 остаток
// 5**2=25 в степень
// (-1)**2 отрицательное в степень

// пример
let num = 5
console.log(num)
num++
console.log(num)

++num
console.log(num)

// console.log(++num); сначала делает потом дает
// console.log(num++); сначала дает  потом делает

console.log(num)

// пример
let num = 10
num = num + 5
num += 5
console.log(num)

// пример
let value = -5
let strange = true

console.log((value += strange))

let verdict = -5
console.log(!verdict)

// Задача
const a1 = 15
const b1 = 10
const res1 = a1 * b1
console.log(res1)

const a2 = 15
const b2 = 10
const res2 = a2 / b2
console.log(res2)

const a3 = 15
const b3 = 10
const res3 = a3 % b3
console.log(res3)

const a4 = '0x500'
console.log(+a4)

const a5 = '300 / 5 + 27* -3 + 21'
console.log(!!a5)

let num = 10
num += 5
num /= 3
num *= 50
num -= 15
console.log(num)

// Сравнение строк по символьно и по юникоду

// Сравнение
// автоматически делает приведение равенства
// 10==10 10 равно 10  - тру
// 10!=5 10 не равно 5 - тру
// 10==строка 10 тру
// 10 === 10 строго равно
// Использовать всегда строго

NaN === NaN - false
// isNan() для проверки нан ли в скобках

// And &&
// x     y      res
// true  true  true
// true false false
// false true false
// false false false

// QR ||
// x     y      res
// true  true  true
// true false true
// false true true
// false false false

const number = 100
number > 20
number < 50
// console.log(20<number<50) - true
// console.log(number>20 && number<50) - false

// || возвращает первую правду или последнюю ложь
// && возвращает первую ложь или последнюю правду
// пример
// 100 || 0 - 100
// 100|| 20000 - 100

// // 0|| false - false
// // 0|| false||null - null

// 0&&10 -10
/*typeof и запятая
typeof null - object

/////////////////////rest 
function subtract(...numbers) {
  return numbers.reduce((res, currentNumber) => res - currentNumber);
}
subtract(20, 5, 1); //14

////////////spread
const arr = [1, 2, 3, 4, 56];
subtract(...arr); //spread operator оператор расширения. разбивает массив

const maleName = ['Anton', 'Ivan', 'Artem'];
const fameleNames = ['Inna', 'Anna', 'Nastya'];
const names = [...maleName, ...'null', ...fameleNames]; // ['Anton', 'Ivan', 'Artem', 'n', 'u', 'l', 'l', 'Inna', 'Anna', 'Nastya']

const user = {
  firstName: 'test',
  age: 12,
};
const fullUser = {
  lastName: 'Testenko',
  ...user,
}; //lastName: 'Testenko', firstName: 'test', age: 12}

function someFunc(option) {
  const defaultOption = {
    amount: 10,
    data: 'test',
  };
  const finalOption = {
    ...defaultOption,
    ...option,
  };

  return finalOption;
}
*/
/*Функции
// const data =console.log(123353); возвращает андефаинд
// const name1 = prompt(); промт просить внести данные  и возвращает стринг

const name1 = prompt('Enter your name');
alert(name1);
alert('Hello '+name1);

const num1=+prompt("Enter first number");
const num2=Number(prompt("Enter second number"));
const res=num1+num2;

||
const num1=prompt("Enter first number");
const num2=prompt("Enter second number");
const res=+num1+ Number(num2);

const mes=num1 +'' + '+'+ num2 + '=' +res;

||
const num1=prompt("Enter first number");
const num2=prompt("Enter second number");

const mes=num1 +'' + '+'+ num2 + '=' +(+(+num1+ Number(num2)));

alert(mes);


// Как вызывать функцию. 
// Функциональное выражение 
// functional expression

const myFirstFunction= function () {
  console.log (true);
};
myFirstFunction ();

// Другие виды
// functional declaration
// arrow functional 


// Калькулятор суммы функциями
const input1=prompt("Enter first number");
const input2=prompt("Enter second number");

const getSumOfTwo= function (num1, num2) {
  const result = +mun1 + +mun2;
  return result;
};
const result = getSumOfTwo (input1, input2);

// Приветсвие промт+алерт
const greetings= function () {
  const userName=prompt("Enter name");
  alert('Hello '+userName);
  return userName;
};
const userName = greetings ();

// Приветсвие
const greetings= function (userName) {
  const mes='Hello '+ userName;
  return mes;
};


// if ... else  - switch case
// if (условие) {
// если правда результат
// }

// какое число больше
const bigNumber =function (num1, num2) {
  if(
    typeof num1=== 'number'&& 
  typeof num2=== 'number' &&
  !isNaN(num1)&&
  !isNaN(num2)
  ){
  if (num1>num2){
    const  res=num1;
    return res;
  } else if (num1<num2){
    const  res=num2;
    return res;
  }
  else{
    console.log ('First number is equal second number');
  }
}else{
  console.log ('You didn\'t enter a number');
}
}


// Суммирование только чисел

const getSumOfTwo= function (num1, num2) {
if(
  typeof num1=== 'number'&& 
typeof num2=== 'number' &&
// или
!isNaN(num1)&&
!isNaN(num2)
){
  const result = num1 + num2;
  return result;
}else{
    alert('Beda');
    return Nan;
}
}

// или
const getSumOfTwo= function (num1, num2) {
if(
isNaN(num1)||isNaN(num2)
){
  alert('Beda');
  return Nan;
}else{
  const result = num1 + num2;
  return result;
}
}

//---------------------------------------
// Функция высшего порядка
//принимает другую функцию
//возвращает функцию

const highOrderFunction1 = function (func) {
  // if{}
  const secret = "Secret data";
  func(secret);
};
highOrderFunction1(alert); //алерт не вызывает при этом алерт работает


const highOrderFunction2 = function () {
  console.log(5);
  return function () {
    console.log("inner");
  };
};
const innerFunc = highOrderFunction2();
innerFunc();


// -----------------------------------------------
// function declaration - можно вызывать до написания тела функции

function getSumOfTwo(num1, num2) {
  return num1 + num2;
}


// ---------------
// Детерминированная которая при
// тех же входных данных дает один и тот же результат

function sum(num1, num2) {
  return num1 + num2;
}

//функция с побочным эффектом
// Побо́чный эффе́кт читать и модифицировать значения глобальных переменных,
// осуществлять операции ввода/вывода,
// реагировать на исключительные ситуации, вызывать их обработчики.

// получил колбасу и хлеб сделал бутерброт
console.log();
let test = 1;
function sum2(num1, num2) {
  test++;
  return num1 + num2;
}
// test 1
// sum2(2,2) 4
// test 2

//Чистая функция:
// детерменированая и не обладает побочными эффектами.


//----------------
//arrow functiom

const sum = (num1, num2) => num1 + num2;
const square = (n) => n * n;
const testObj = () => ({});
const testFunc = () => this; //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const betterSum = (numbers) => {
  const sum = numbers.reduce((sum, number) => {
    return sum + number;
  });
  return sum;
};
const betterSum2 = (numbers) => numbers.reduce((sum, number) => sum + number);
const res1 = betterSum([1, 2, 3, 4, 5, 6]);

const newsPaper = {
  name: 'Теленеделя',
  articles: [
    { name: 'article1', text: 'text1', author: 'anton' },
    { name: 'article2', text: 'text2', author: 'ivan' },
  ],
  showArticles: function () {
    this.articles.forEach(function (article) {
      console.log(
        `Newspapper ${this.name} Articles ${article.name} Text ${article.text} Author ${article.author} `
      );
    }); //недостучаться до Newspapper ${this.name}
  },
  showArticles2: function () {
    const that = this;
    this.articles.forEach(function (article) {
      console.log(
        `Newspapper ${that.name} Articles ${article.name} Text ${article.text} Author ${article.author} `
      );
    });
  },
  showArticles3: function () {
    const callback = function (article) {
      console.log(
        `Newspapper ${this.name} Articles ${article.name} Text ${article.text} Author ${article.author} `
      );
    };
    this.articles.forEach(callback.bind(this));
  },
  betterShowArticles: function () {
    this.articles.forEach((article) =>
      console.log(
        `Newspapper ${this.name} Articles ${article.name} Text ${article.text} Author ${article.author} `
      )
    );
  },
};


//рекурсивная функция которая вызывает сама себя
function recursive(number) {
  console.log(number);
  if (number > 0) {
    recursive(number - 1);
  }
  return 'start';
}
// вывести числа в диапазоне
function range(num1, num2) {
  if (num2 < num1) {
    range(num2, num1);
  }
  if (num1 < num2) {
    console.log(num1);
    range(num1 + 1, num2);
  }
  if (num1 === num2) {
    console.log(num1);
  }
  return 'end range';
}
function range2(num1, num2) {
  const minNubber = Math.min(num1, num2);
  const maxNubber = Math.max(num1, num2);
  console.log(minNubber);
  if (minNubber < maxNubber) {
    range(minNubber + 1, maxNubber);
  }
  return 'end range';
}
//tree
const tree = {
  value: 8,
  left: {
    value: 3,
    left: { value: 1 },
    right: {
      value: 6,
      left: { value: 4 },
      right: { value: 7 },
    },
  },
  right: {
    value: 10,
    right: { value: 14, left: { value: 13 } },
  },
};
function reduceTree(tree) {
  //1 yzel
  let result = tree.value;
  //sum left yzel
  if (tree.left) {
    result += reduceTree(tree.left);
  }
  //sum right yzel
  if (tree.right) {
    result += reduceTree(tree.right);
  }
  return result;
}
const easyTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
    },
    right: {
      value: 4,
    },
  },
  right: {
    value: 10,
  },
};

function toPower(num, exp) {
  if (exp === 1) {
    return num;
  } else if (exp === 0) {
    return 1;
  }

  // //2
  // if (exp > 0) {
  //   return num * toPower(num, exp - 1);
  // }
  // //-1
  // if (exp < 0) {
  //   return 1 / (num * toPower(num, Math.abs(exp) - 1));
  // }
  return exp > 0
    ? num * toPower(num, exp - 1)
    : 1 / (num * toPower(num, Math.abs(exp) - 1));
}


*/
/*Строгий режим
// 'use strict';

function getSumOfTwo2(num1, num2) {
  this.alert = 10;
  return num1 + num2;
}
*/
/*debugger*/
/*switch
// только строгое равенство
// без брейка все будет выводить ы том числе дефолт

const input = +prompt('Choose your fighter: \n1-Sub-Zero\n2-Scorpion \n3-Raiden');

switch (input) {
  case 1: {
    alert('You picked Sub-Zero');
    break;
  }
  case 2: {
    alert('You picked Scorpion');
    break;
  }
  case 3: {
    alert('You picked Raiden');
    break;
  }
  default: alert('This fighter doesent exist');
}

// строчка и число без +промт

const input = prompt('Choose your fighter: \n1-Sub-Zero\n2-Scorpion \n3-Raiden');

switch (input) {
  case '1': 
  case 1: {
    alert('You picked Sub-Zero');
    break;
  }
  case '2': 
  case 2: {
    alert('You picked Scorpion');
    break;
  }
  case '3':
  case 3: {
    alert('You picked Raiden');
    break;
  }
  default: alert('This fighter doesent exist');
}

// Калькулятор свитч
const input = +prompt(
  'Choose your operation: \n1-summation\n2-subtraction \n3-multiplication \n4-division'
)
  const num1 = prompt('Enter first number')
  const num2 = prompt('Enter second number')
  if (!isNaN(num1) && !isNaN(num2)) {
    switch (input) {
      case 1: {
        alert(num1 + num2)
        break
      }
      case 2: {
        alert(num1 - num2)
        break
      }
      case 3: {
        alert(num1 * num2)
        break
      }
      case 4: {
        alert(num1 / num2)
        break
      }
          default: alert('invalid number')
    }

  } else {
    alert('invalid number')
  }

//Улучшенный калькулятор
const sum = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null
  }
  return num1 + num2
}
const subtraction = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null
  }
  return num1 - num2
}
const multiplication = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null
  }
  return num1 * num2
}
const division = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null
  }
  return num1 / num2
}
const calc = function (num1, num2, operator) {
  switch (operator) {
    case '+': {
      return sum(num1, num2)
    }
    case '-': {
      return subtraction(num1, num2)
    }
    case '*': {
      return multiplication(num1, num2)
    }
    case '/': {
      return division(num1, num2)
    }
    default:
      result = null
  }
  return result
}

*/
/*Тернарный оператор
// expression ?1:2

const test = 0
if (test > 0) {
  console.log(1)
} else if (test < 0) {
  console.log(2)
} else {
  console.log(3)
}

test > 0 ? console.log(1) : test > 0 ? console.log(2) : console.log(3)

// Пример 2
let userName = 'Test'
let message = ''
const isGreeting = false

if (isGreeting) {
  message = 'Hello ' + userName
} else {
  message = 'Bye ' + userName
}

let message2 = isGreeting ? 'Hello ' + userName : 'Bye ' + userName

// Пример 3
isVerdict = false;
isVerdict?alert('Hello world'):console.log(NaN);
*/
/*шаблонная строка
const str = ``;
alert(`recepi:
        flour - 10
    sugar - a lot of`);

const num1 = +prompt("first number");
const num2 = +prompt("second number");
if (isNaN(num1 - num2)) {
  alert("bad input");
} else {
  const sum = +prompt(`${num1} + ${num2} = ?`);
  if (isNaN(sum)) {
    alert("bad input");
  } else
    alert(`${num1} + ${num2} ${num1 + num2 === sum ? "===" : "!=="} ${sum}`);
}

*/
/*Циклы
// while

// бесконечно
нельзя i в глобальной области
while(true){
  console.log(1)
}

let i=0;
while (i<20){
  i++;
  console.log(i);
}
// пример брейк
let i = 0
while (true) {
  i++
  console.log(i)
  if (i >= 20) {
    break
  }
}
// пример confirm
let shouldContinue = true
i = 0

while (shouldContinue) {
  console.log(i)
  i++
  shouldContinue = confirm('shouldContinue?')
}
// пример четные
let i = 0
while (i < 20) {
  i++
  if (i % 2 === 0) {
    console.log(i)
  }
}
// или интерация 2
let i = 0
while (i < 20 ) {
  i+=2
    console.log(i)
}
// или континью
let i = 0
while (i < 20) {
  i++
  if (i % 2 !== 0) {
  continue
  }
  console.log(i)
}
// ===================================================

// do while
// запустится хотя бы один раз
do{
console.log ('true')
}while(false);

/////////////////////////////////////////
// for
// for(let i=0, k=0, l=true;)

for (let i = 0; i < 10; i++) {
  console.log('for loop')
  console.log(i)
}
бесконечные циклы
// for(let i=0; i<-1; i--)
for (;;)
// пример с возведением в степень
const pow = function (x, n) {
  let res = x
  for (let i = 1; i < n; i++) {
    res *= x
  }
  return res
}


*/
/*Объект
const obj = {
  display: 'flex',
  lineHeith: 1.5,
  opacity: 0,
  'background color': 'red',
}
const phone = {
  color: 'blue',
  model: 'Moto G Plus',
  switchOn: function () {
    // method
    alert('switched on')
  },
}
console.log(obj.lineHeith)
console.log(obj.lineHeith + obj.opacity)

как создавать 
const obj1={} - litteral obj BEST
const obj2=Object{} - litteral obj
const obj3=new Object{} - litteral obj

const phone = {
  color: 'blue',
  model: 'Moto G Plus',
  switchOn: function () {
    // method
    alert('switched on')
  },
  cpu: {
    model: 'Qualcon Snapdragon 730',
    frequency: 4,
    frequencyUnit: 'GHz',
  },
  test: 'test',
}
console.log(phone)
// Update
phone.color = 'black'
// Add
phone.battery = 4000
// Delete
delete phone.test


console.log(phone)

пример

const house = {
  door: 4,
  floor: 3,
  color: 'red',
  kitchen: {
    fridge: 'lg',
    sink: 'grey',
  },
  greeting: function () {
    console.log('hello')
  },
}
console.log(house)

house.roof = 'black'
house.color = 'blue'
delete house.kitchen.sink
console.log(house)

создание нового объекта

const user1 = {
  name: 'Ivan',
  lastName: 'Borisov',
  age: 23,
  greeting: function () {
    console.log('Brushing teeth')
  },
}
const User = function (name, lastName, age) {
  this.name = name
  this.lastName = lastName
  this.age = age
  this.greeting= function () {
    console.log('Brushing teeth')
  }
}

const user4 = new User('Anton', 'Antonovich')
пример 2
const Message = function (name, text, amountLike, amountDislike, editMessage) {
  this.name = name;
  this.text = text;
  this.amountLike = amountLike;
  this.amountDislike = amountDislike;
  this.editMessage = function () {
    console.log(editMessage);
  };
};
const message1 = new Message("Anton", "test text", 2, 4, "test");

// //////////

// Link obj
const test1 = "Anton";
const test2 = "Anton";
// test1 === test2;
const obj1 = {
  name: "Anton",
  age: 20,
};
const obj2 = {
  name: "Anton",
  age: 20,
};
// obj1 !== obj2;
const obj3 = obj1;
// obj1===obj3
obj3.age = 100;
// obj1.age=100;

// квадратые скобки - внутри только цифры или строка в кавычках. квадратные могут делать вычисления
// с математикой не может одновременно вычислить и присвоить
const user100 = {
  test: 123,
  10: 345,
  "first name": "Anton",
};
user100[12345] = 10 * 10;
user100["test"] = 321;
user100[10] = 150;
user100.test2 = 70 + 25;
user100[5 + 5];
// user100[15 + 5]; - не присваивает новый ключ

const key = "first name";
// user100[key]; - Anton
const user101 = {
  [key]: "Anton",
  // {first name: 'Anton'}
  [key]: key,
  {first name: 'first name'}
};

// пример запросить ключ из объекта
const user = {
  isAdmin: true,
  age: 23,
};
const key = prompt("enter key");
alert(`your key is ${user.[key]} `);


//заранее задать значение конструктору
function User(name, age, isLoggedin = 'false') {
  this.name = name;
  this.age = age;
  this.isLoggedin = isLoggedin;
}

const user1 = new User(1, 2); //{name: 1, age: 2, isLoggedin: 'false'}
const user2 = new User(1, 2, 3); //{name: 1, age: 2, isLoggedin: 3}
*/
/*Массив
const userEmailsArr = new Array("test1", "test2", "test3");
const arr = [25, "test", NaN, false, null, undefined];
arr.toString(); // '25,test,NaN,false,,'
const emptyArray = [];
const emptyArray2 = new Array();
arr[0]; // 25
arr.length; // 6

// Добавляет и удаляет с первых и последних строк
// push, pop, shift,unshift
arr.push(10, 105); // add im end
const deletedFromEnd = arr.pop(); // delete in end 1 shtuka // deletedFromEnd = 105
arr.unshift(12, 11, 20); // add im end
const deleteInBigin = arr.shift(); // delete in end 1 shtuka // deleteInBigin = 12

// Пример
const cars = ["mazda", "bmv", "audi"];
cars.push("lada", "opel", "kia");
const carKia = cars.pop();
cars.unshift("lexus");
cars.unshift("acura");
const carAcura = cars.shift();


// Массив в масииве
const arr=[
  [1 ,2 , 3],
  [4 ,5 , 6],
  [7 ,7 , 9],
];
// arr[1][2] - 6


// Splice Добавляет и удаляет с нужного места
const cars = ["car1", "car2", "car3", "car4", "car5"];

// const carSplice = cars.splice(3); 
// ['car1', 'car2', 'car3'] 
// удаляет с 3 [2] элемента все 

// const carSplice = cars.splice(3,1); 
// 'car1', 'car2', 'car3', 'car5'] 
// удаляет с 3 [2] элемента 1 элемент

// const carSplice = cars.splice(3,2, "car6", "car7"); 
// ['car1', 'car2', 'car3', 'car6', 'car7'] 
// удаляет с 3 [2] и  2 элемента  и вставляет  2 элемента

// const carSplice = cars.splice(3,0, "car6", "car7"); 
// ['car1', 'car2', 'car3', 'car6', 'car7', 'car4', 'car5']



// Slice копирование


const cars = ["car1", "car2", "car3", "car4", "car5"];
cars.push([1, 2, 3]);
const copy = cars.slice(); //create copy
cars === copy; ///false
cars[5] === copy[5]; //true
cars[4] === copy[4]; //true
const copy2 = cars.slice(2); //['car3', 'car4', 'car5', Array(3)]
const copy3 = cars.slice(2, 4); //['car3', 'car4']


// includes() есть ли в массиве элемент


const cars = ["car1", "car2", "car3", "car4", "car5"];
cars.includes(); //false
cars.includes("car1"); //true

// indexofначиная с какого индекса искать


// если не нашет возвращет -1: первое что нашел то и выводит
cars.indexOf("car2"); //1



// concat  создает новый массив и в него вносит все что в скобках если массив то он разбирается
const test = cars.concat(1, 2, 3);




// Revers переворачивает массив



const cars = ["car1", "car2", "car3", "car4", "car5"];
const carReverse = cars.reverse(); //['car5', 'car4', 'car3', 'car2', 'car1']
cars === carReverse; //true



// Flat  - раскрывает уровни вложенных массивов. infinity - бесконечно


const arr=[
  [1 ,[2 , 3]],
  [[4 ,5] , 6],
  [7 ,[7 , 9],]
];
const flat = arr.flat(2); 



// Join  - преобразует массив в строку. Можно указать разделитель


const cars = ["car1", "car2", "car3", "car4", "car5"];
const arr=[
  [1 ,[2 , 3]],
  [[4 ,5] , 6],
  [7 ,[7 , 9],]
];
const carJoin = cars.join(); 
const carJoin2 = cars.join("-"); //'car1-car2-car3-car4-car5'
const arrJoin = arr.join();  //'1,2,3,4,5,6,7,7,9'
const arrJoin2 = arr.join("-"); //'1,2,3-4,5,6-7,7,9'
const arrString = arr.toString(); //'1,2,3,4,5,6,7,7,9'

const phone = {
  color: 'blue',
  model: 'Moto G Plus',
  switchOn: function () {
    // method
    alert('switched on')
  },
}
const cars2 = ["car1", "car2", "car3", "car4", "car5", phone];
const car2Join = cars2.join(); //'car1,car2,car3,car4,car5,[object Object]'
const car2Join2 = cars2.join("-"); //'car1-car2-car3-car4-car5-[object Object]'


// Sort -сортирует по дыбильному


const num = [5, 89, 4, 42, 13, -48, 7];
const sort = num.sort(); //[-48, 13, 4, 42, 5, 7, 89]
// Mutation
const sortFunc= function(currentValue, nextValue){
if (currentValue<nextValue){
  return -1;
}
}
const sort2 = num.sort(sortFunc); // [-48, 4, 5, 7, 13, 42, 89]


// forEach - цикл


const cars = ["car1", "car2", "car3", "car4", "car5"];

const callback=function(currentElenent, index, array){
  console.log('value: ', currentElenent);
  console.log('index: ', index);
  console.log('arr: ');
  console.log(array);
}

cars.forEach(callback);
// value:  car1
//index:  0
// arr: 


//Map - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.


const num = [5, 89, 4, 42, 13, -48, 7];
const map = num.map(function (currentElenent, index, array) {
  return currentElenent * 2;
});
//[10, 178, 8, 84, 26, -96, 14]
const map2 = num.map(function (currentElenent, index, array) {
  const obj ={
    value: currentElenent,
    id: index,
  }
  return obj;
});
//0: {value: 5, id: 0}


// Filter фильтрует по условию true- елемент будет в масиве



const cars = [5, "car1", "car2", "car3", "car4", "car5"];


const filt = cars.filter(function (elem, index, arr) {
  return typeof elem == "string";
}); //['car1', 'car2', 'car3', 'car4', 'car5']



// Find  ищет первый элемент по поиску к примеру первое число <50
//выводит элемент


const cars = [5, "car1", "car2", "car3", "car4", "car5"];
const find = cars.find(function (elem, index, arr) {
  return elem == "car3";
})



// FindIndex  ищет первый индекс по поиску к примеру первое число <50
//выводит индекс



// Some (есть ли) every (каждый ли)  возвращает тру или фолс
const cars = [5, "car1", "car2", "car3", "car4", "car5"];
const isThere = cars.some(function (elem) {
  return elem == "car3";
}) //true
const isEver = cars.every(function (elem) {
  return elem == "car3";
}) //false


Array.isArray([1,2])
*/
/*Создание прототипа
//прототип только объект
//  у объекта только один прототип
// const phone1 = {
//   model: 'Pro',
//   manufacture: 'Apple',
//   //__proto__ :phoneProto, так не делают
// };
// const phone2 = {
//   model: 'Basik',
//   manufacture: 'Google',
// };
const phoneProto = {
  call: function (number) {
    console.log(`${this.manufacture}  ${this.model} is calling ${number}`);
  },
};
const deviceProto = {
  turnOn: function () {
    console.log('device is turned');
  },
};
phoneProto.__proto__ = deviceProto; // пртотип прототипа
// phone1.__proto__ = phoneProto;
// phone2.__proto__ = phoneProto;
// phone1.call === phone2.call; //true

function Phone(model, manufacture) {
  this.model = model;
  this.manufacture = manufacture;
}

Phone.prototype = phoneProto;

const phone1 = new Phone('Pro', 'Apple');
const phone2 = new Phone('Basic', 'Google');
// phone1.call === phone2.call; //false
*/
/* Глобальные штуки только JS
//eval - опасная функция
// isFinite() -проверка на конечность infinity && Nan - false

//parseFloat - преобразует строчку в десятичное число
// parseFloat('123dsfds') - 123
//parseFloat('dfsdf132') - Nan

//parseInt (string, radix(система исчисление 2-36))-
//преобразует целое число  из указаной системы исчисления в  10 число
// parseInt(1011,2) - 11
// -------------------------------------------------------------------
//String
// строчка не мутирует в отличии от массива
// String(true)  - 'true'
// new String (true)
// String {'true'}
// 0: "t"
// 1: "r"
// 2: "u"
// 3: "e"

const str = 'test';
str.length; //4
str[2]; //s

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
} // выводит каждую букву

str.charAt(2); //s аналог квадратных скобок
str.charCodeAt(2); //115 - юникод s
str.concat('123', 'true', false); //'test123truefalse'
str.includes('t', 2); // true ищет букву начиная со 2 сивола
str.indexOf('s'); //2 ищет индекс у первой строки
str.replace('s', 't'); //'tett' заменяет
str.replace('t', 'x'); //'xest' только первый элемент
str.slice(0, 2); //'te'
str.substring(0, 3); //'tes'- аналог splice
str.toLowerCase();
str.toUpperCase(); //'TEST'
const test1 = '         sfd      ';
const test2 = '         s              fd      ';
test1.trim(); // 'sfd' - убирает проблемы слева и справа
test2.trim(); //'s              fd' внутри не убирает
const test3 = 'one two ten';
const arr = test3.split(' '); // ['one', 'two', 'ten'] разделитель пробел преобразует в массив
arr.join('-'); //('one-two-ten');
test3.split(' ', 1); //['one'] - 1-длина массива

const str = 'test string test test new test';
function toJadenCase(str) {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
  }
  return result.trim();
}//'Test String Test Test New Test'


// Функция которая принимает строку и возвращает количество слов в ней.
const str =
  'Функция которая принимает,           строку и возвращает количество слов в ней';

function wordsCount(str) {
  const words = str.split(' ');
  const deleteSpace = words.filter(function (elem) {
    return elem !== '';
  });
  return deleteSpace.length;
}
//10

// Функция, которая получает строку и возвращает размер самого большого слова в ней
const str2 =
  'Функция, которая получает строку и возвращает размер самого большого слова в ней';

function bigWord(str2) {
  const words = str2.split(' ');
  let j = 0;
  let result;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > j) {
      j = words[i].length;
      result = words[i];
    }
  }
  return result;
}
---------------------------------------------------------------

// Number
Number('253535')//253535 приведение к числу
Number.NEGATIVE_INFINITY //-Infinity
Number.EPSILON  //2.220446049250313e-16
Number.MAX_SAFE_INTEGER //9007199254740991
Number.MIN_SAFE_INTEGER //-9007199254740991
Number.MAX_VALUE //1.7976931348623157e+308
Number.MIN_VALUE //5e-324

const num=123.456789;
num.toFixed(2) //'123.46' округляет до цифра после запятой точки
num.toExponential() //'1.23456789e+2' экспонента
num.toPrecision(2) // '1.2e+2'

// ---------------------------------------
//Math

Math.E; //2.7182818284590
Math.PI; //3.141592653589793
Math.abs(-10); //10 по модулю

Math.cbrt(27); //3 кубический корень
Math.sqrt(9); //3 квадратный корень

Math.round(3.3); //3
Math.round(3.6); //4 округление ближайшее ЦЕЛОЕ

Math.ceil(3.3); //4
Math.ceil(3.6); //4 округление к большему ЦЕЛОЕ

Math.floor(3.3); //3
Math.floor(3.6); //3 округление к меньшему ЦЕЛОЕ

Math.min(3, 5, 10, -1, -10.05); //-10.05
Math.max(3, 5, '10', -1, -10.05); //10

Math.pow(5, 2); //25
Math.pow(-5, 3); //-125
Math.pow(5, -3); //0.008

Math.random(); // случайное число 0-1
*/
/*Ошибки
//Error- базовая ошибка
// RangeError ошибка диапазона. значение не входит в диапазон
// TypeError - ошибка типа

//EvalError - ошибки связаные с Eval -опасная штука редко
// InternalError ошибка в мозиле редко
// ReferenceError - стучаться в несуществующие перменные Reference ссыдка
// SyntaxError - синатксическая ошибка ++i++
// URIError - неправильное ипальзование адреса юрл

// const error = new Error('Vse ploho');
// throw 1234;

function muliplicity(num1, num2) {
  if (
    typeof num1 === 'number' &&
    typeof num1 === 'number' &&
    !isNaN(num1 - num2)
  ) {
    return num1 * num2;
  }
  throw new TypeError('Incorrect parameters, expected two numbers');
}
const user = {
  name: 'test',
  salary: '3000',
  monthsOfPayment: 4,
};
try {
  //пробуем выполнить опасный код
  const newPayment = muliplicity(user.salary, user.monthsOfPayment); //опасный код
  alert(`you have been payed ${newPayment} $`);
} catch (err) {
  alert(err); //TypeError: Incorrect parameters, expected two numbers
  // что делать в случае ошибки
  // alert('vse ploho');
  // alert(err); //TypeError: Incorrect parameters, expected two numbers
  if (err instanceof TypeError) {
    alert('Bad type');
  } else if (err instanceof RangeError) {
    alert('range');
  }
} finally {
  //выполнится в любом случае
  alert('finaly');
}

function factorial(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('number must be a positive integer number');
  }
  if (!Number.isInteger(number)) {
    throw new RangeError('number must be a integer number');
  }
  if (number < 0) {
    throw new RangeError('number must be a positive number');
  }
  return number > 0 ? number * factorial(number - 1) : 1;
}

try {
  factorial(1.5);
} catch (err) {
  alert(err.message);
}
*/
/* Class
class UserClass {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
const betterUser1 = new UserClass('test', 'testovich', 12);

const MIN_ZP = 216;
class Worker {
  #name; //объявить приватное поле
  constructor(name, surname, workDay = 0, salaryInDay = MIN_ZP) {
    this.name = name;
    this.surname = surname;
    this.salaryInDay = salaryInDay;
    this.workDay = workDay;
  }
  // не принимает парамертров и возвращает значения
  get name() {
    return this.#name;
  }
  get surname() {
    return this._surname;
  }
  get workDay() {
    return this._workDay;
  }
  get salaryInDay() {
    return this._salaryInDay;
  }
  get fullName() {
    return `${this.#name} ${this._surname} `;
  }

  //принимает 1 параметр и записывает новое значение
  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('Add name');
    }
    this.#name = newName.trim();
  }
  set surname(newSurnem) {
    if (typeof newSurnem !== 'string' || newSurnem.trim() === '') {
      throw new TypeError('Add surname');
    }
    this._surname = newSurnem.trim();
  }
  set workDay(newWorkDay) {
    if (typeof newWorkDay !== 'number' || isNaN(newWorkDay)) {
      throw new TypeError('Add number');
    }
    if (newWorkDay < 0 || newWorkDay > 30) {
      throw new TypeError('Add number 0-30');
    }
    this._workDay = newWorkDay;
  }
  set salaryInDay(newSalaryInDay) {
    if (typeof newSalaryInDay !== 'number' || isNaN(newSalaryInDay)) {
      throw new TypeError('Add number');
    }
    if (newSalaryInDay < 0) {
      throw new TypeError('Add number>0');
    }
    this._salaryInDay = newSalaryInDay;
  }
  salary() {
    return this._salaryInDay * this._workDay;
  }
  #isAdult() {
    return true;
  }
  isRealyAdult() {
    if (Math.random() > 0.5) {
      return this.#isAdult();
    }
  }
  //статический метод - метод который есть у класса
  static isWorker(obj) {
    return obj instanceof Worker;
  } //Worker.isWorker(worker1) true
  set recursive(value1) {
    this.recursive = value1;
    // this._recursive = value1;//уже не рекурсия
  }
}
const worker1 = new Worker('test', 'Petrov', 20, 5);


class Animal {
  constructor(species, name, color, diet) {
    this.species = species;
    this.name = name;
    this.color = color;
    this.diet = diet;
  }

  eat() {
    return 'this animal eat';
  }
}
const animal1 = new Animal();

//-------------------------наследование
class Squirell extends Animal {
  constructor(name, color) {
    super('squirell', name, color, 'acorn');
  }

  eat() {
    return `${this.name}`;
  }
}
const sq = new Squirell('Gaika', 'brown');

// наследование 
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isBanned = false;
  }
  createMessage() {
    return `${this.email} create message`;
  }
}
const user1 = new User('mail', 12345);

class Moderator extends User {
  constructor(email, password, age) {
    super(email, password);
    this.age = age;
  }
  deleteMessage() {
    return `${this.email} delete message`;
  }
}
const moderator1 = new Moderator('supermail', 987654321, 40);

class Admin extends Moderator {
  constructor(email, password, age, firstname, lastname) {
    super(email, password, age);
    this.firstname = firstname;
    this.lastname = lastname;
  }
  toBan(nameUser) {
    if (nameUser instanceof Admin) {
      throw new Error('Cant ban User');
    }
    return (nameUser.isBanned = true);
  }
  toUnBan(nameUser) {
    return (nameUser.isBanned = false);
  }
}

const admin1 = new Admin('mail', 123, 45, 'Anton', 'Antonovich');

// инкапсуляция
class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    return 'some area';
  }
}
class Triangle extends Figure {
  #a;
  #b;
  #c;
  constructor(a, b, c) {
    super('triangle');
    this.#a = a; //инкапсуляция параметров
    this.#b = b;
    this.#b = c;
  }
  getArea(mode) {
    switch (mode) {
      case 'heigh': {
        return 0.5 * this.#a * this.#b; //инкапсуляция
      }
      case 'gerone': {
        //полиморфизм
        const p = (this.#a + this.#b + this.#c) / 2;
        return Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c));
      }
    }
  }
}
const triangle1 = new Triangle(3, 4, 5);

class Rectangle extends Figure {
  #a;
  #b;
  constructor(a, b) {
    super('rectangle');
    this.#a = a;
    this.#b = b;
  }
  getArea() {
    return this.#a * this.#b;
  }
}
const rectangle1 = new Rectangle(5, 10);

class Rhombus extends Figurefood
  getArea() {
    return (this.#d1 * this.#d2) / 2;
  }
}
const rhombus1 = new Rhombus(5, 10);

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError('not figure');
}
/////////////////////////////////////////////////////////////////////
class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  eat() {
    return `${this.type} ${this.name} is eating `;
  }
  speak() {
    return `${this.type} ${this.name} is speak `;
  }
}

class Cat extends Animal {
  constructor(name, food = 'fish', says = 'myow') {
    super('cat', name);
    this.food = food;
    this.says = says;
  }
  eat() {
    return `${this.type} ${this.name} is eating  ${this.food}`;
  }
  speak() {
    return `${this.type} ${this.name} is speak ${this.says} `;
  }
}
class Snake extends Animal {
  constructor(name, food = 'mouse', says = 'sss') {
    super('snake', name);
    this.food = food;
    this.says = says;
  }
  eat() {
    return `${this.type} ${this.name} is eating  ${this.food}`;
  }
  speak() {
    return `${this.type} ${this.name} is speak ${this.says} `;
  }
}
class Trainer {
  constructor(name) {
    this.name = name;
  }
  eat(animal) {
    return animal.eat();
  }
  speak(animal) {
    return animal.speak();
  }
}
const cat1 = new Cat('Boris');
const snake1 = new Snake('Snape');
const trainer1 = new Trainer('Anton');
*/
/*ООП принципы
//абстракция - объект опсывает максимально достаточно для решения задачи
// инкапсуляция- сокрытие реализация объекта или логики
// наследование - объекты потомки могут наследовать свойства методы а не пересоздовать их
// полиморфизм - позволяет методам схожих классов реализовываться по разному
*/
/*Алгоритмы
// O(2^n) экспоненциальная сложность алгоритма

// O(1) - Константная сложность не зависит от количества входных параметров
const arr = [10, 20, 30, 20];
const res = arr[2];

// O(n) - линейная сложность (циклы)
function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (searchItem === arr[i]) {
      return i;
    }
  }
  return -1;
}

//O(n^2) квадратичная избегать (цикл в цикле)
const arr = [7, 2, 8, 0, 1, 3, 5, 6, 9];
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
}

//O(n*2) цикл а за ним цикл

//O(log (n))Логарифмическая сложность
const arr = [10, 20, 25, 37, 42, 60, 78, 99, 5000, 9000];

function binarySearch(arr, searchItem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);

  while (start <= end) {
    if (searchItem === arr[middle]) {
      return middle;
    } else if (searchItem > arr[middle]) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    } else {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
    }
  }
  return -1;
}
*/
/*Класс - Массив с методами
class MyArray {
  constructor() {
    this.length = 0;
  }
  push(...elems) {
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    } else {
      let deleteElem = this[this.length - 1];
      delete this[--this.length];
      return deleteElem;
    }
  }
  concat(...elems) {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(this[i]);
    }
    for (let i = 0; i < elems.length; i++) {
      if (MyArray.isMyArray(elems[i])) {
        for (let j = 0; i < elems[i].length; j++) {
          newArr.push(elems[i][j]);
        }
      } else {
        newArr.push(elems[i]);
      }
    }
    return newArr;
  }
  [Symbol.iterator]() {
    const context = this;
    let i = 0;
    return {
      next() {
        return {
          done: i >= context.length,
          value: context[i++],
        };
      },
    };
  }

  shift(...elems) {
    for (let i = 0; i <= elems.length; i++) {
      this[i + elems.length] = this[i];
    }    // последний элемент не добавляется
    for (let i = 0; i < elems.length; i++) {
      this[i] = elems[i];
    }
    return (this.length += elems.length);

  }

  unshift() {
    if (this.length === 0) {
      return;
    } else {
      let deleteElem = this[0];
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[--this.length];
      return deleteElem;
    }
  }

  reverse() {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this[[this.length - 1] - i];
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = newArr[i];
    }
    return this;
  }
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}
const arr = new MyArray();
arr.push(1, 2, 3, 5);
*/
/*Symbol уникальный и неизменяемый тип данных
const symbol1 = Symbol('symbol for user 4');
const symbol2 = Symbol('symbol for phone 8');
symbol1 === symbol2; //false даже если одинаковое описание
const obj = {
  [symbol1]: 12345, //Symbol(symbol for user 4): 123
  symbol2: 123, //symbol2: 123
  test: true,
  name: 1234,
  [Symbol('symbol for user 4')]: 59,
};
obj[symbol1]; //123
obj[symbol2]; //undefined
/////// for in - для объекта
for (const value in obj) {
  console.log(value);
} // symbol2   test   name
for (const value in obj) {
  console.log(obj[value]);
} //123   true  1234

/////// for of - по итерируемым объектам 
const phones = ['112', '993', '002'];
const str = 'fsdfs sdfsd dfsdfsd dfsd';
for (const value of phones) {
  console.log(value);
}
for (const value of str) {
  console.log(value);//разбивает по буквам
}

const symbols = Object.getOwnPropertySymbols(obj);
// 0: Symbol(symbol for user 4)
// 1: Symbol(symbol for user 4)
// length: 2
symbol1.description //'symbol for user 4'

const arr = [1, 2, 3, undefined];
const iterator = arr[Symbol.iterator]();
iterator.next();

const multiplication = function (...numbers) {
  let res = 1;
  for (const number of numbers) {
    res *= number;
  }
  return res;
};
const devide = function (...numbers) {
  let res;
  for (const number of numbers) {
    if (res === undefined) {
      res = number;
    } else {
      res /= number;
    }
  }
  return res;
};
*/
/*Set
const set1 = new Set(); //Set(0) {size: 0}
const arr = [1, 2, 3];
set1.add(1);
set1.add('test');
set1.add([1, 2, 3]);
set1.add([1, 2, 3]); //запишет разные ячейки памяти
set1.add(arr);
set1.add(null);
set1.add(null); // повтор не запишет
//{1, 'test', Array(3), null}
set1.add('test1');
// set1.clear();// удаляет весь сет
set1.delete('test'); //удалил конкретный
set1.delete(arr); ///способ удаления массива
set1.has(1); // true  имеет ли set такой элемент
const arr2 = [1, 2, 3, 3, 4];
const set2 = new Set(arr2); // {1, 2, 3, 4}

const regularCustomers = ['anton', 'boris'];
const rareCustomers = ['anton', 'ganna'];
// const unicCustomers = Array.from(new Set(regularCustomers.concat(rareCustomers)));
const unicCustomers = [...new Set([...regularCustomers, ...rareCustomers])];

set2.forEach((value, valueAgaine, set) => {
  console.log(value);
  console.log(valueAgaine);
  console.log(set);
});

const setIter = set2.values();
for (const item of setIter) {
  console.log(item);
}

const setKeys = set2.keys();
for (const item of setKeys) {
  console.log(item);
}//тоже самое что и setIter
*/
/*Map
ключом может быть что угодно 
сохраняет порядок вставки 
нет ключей кроме установленных в нем 
есть итератор
есть свойство размера size
производительнее 
преобразование для передачи по сети вручную
const map1 = new Map();
map1.set('key', 'value');
map1.set(123, 456);
map1.set('123', '456');
map1.set(123, 456); // не запишет
const func = () => console.log('why..');
map1.set(func, true);
map1.set(func, false); //заменил предыдущую запись
map1.get(func); //false gполучать свойства
map1.get(123); //456
// clear, had, delete, foreach - также как и set
const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key4', 'value4'],
]);

const vocabulary = new Map([
  ['вітаю', 'hello'],
  ['собака', 'dog'],
  ['вітаю', 'thanks'],
  ['україна', 'Ukraine'],
  ['осінь', 'autumn'],
  ['навчання', 'study'],
  ['погода', 'weather'],
  ['розробник', 'developer'],
  ['замовник', 'castomer'],
  ['компютер', 'PC'],
]);
const testString = `ЗамоВник собака дякую розробник вітаю компютер Україна`;
const translate = (stringToTranslete, vocab) =>
  stringToTranslete
    .toLowerCase()
    .split(' ')
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(' ');

const user1 = {
  id: 1,
  name: 'Test Test',
};
const user2 = {
  id: 2,
  name: 'Null Null',
};

const message1 = ['hi', 'good', 'bye'];
const message2 = ['hello', 'how are you?', 'bye'];

const userAndMessage = new Map([
  [user1, message1],
  [user2, message2],
]);

const userMessage = (user) => userAndMessage.get(user);*/
/*Map practice
// Даны несколько обьектов клиентов банка со следующими данными
// fullName - ФИО клента
// clientLevel - уровень договора с банком от которого зависят тарифы на определенные услуги
// Также есть обьект банка содержащий следующие данные:
// bankName - название банка
// clientLevels - обьекты со свойствами, являющимися уровнями договора с банком (например basic, pro, platinum, ...). 
// Каждый уровень договора содержит внутри себя свойство discount которое хранит размер скидки в процентах
// clientLevel должен быть связан с обьектом уровня договора через Map
// Реализовать функцию расчета стоимости покупки пользователем торвара, которая принимает пользователя и цену товара и возвращает стоимость товара с учетом скидки.
// Скидку доставать из хранящихся в мапе данных
// В случае если в мапе с уровнем клиента нет своязанного уровня в банке (например там решили убрать этот уровень договора) то можно считать что скидки нет

// Bonus tasks:
// У обьектов клиентов должно быть свойство, показывающее деньги на их счету
// При покупке количество денег на счету должно уменьшится на сумму покупки со скидкой
// При попытке купить товар, на который у пользователя не хватит денег ему должно выкидывать ошибку, в которой указано сколько ему не хватает денег до покупки

const client1 = {
  fullName: 'Borisov Boris Borisovich',
  clientLevel: 'platinum',
  account: 1000,
};
const client2 = {
  fullName: 'Antonov Anton Antonovich',
  clientLevel: 'pro',
  account: 1000,
};
const bank = {
  bankName: 'Super bank',
  clientLevels: {
    basic: {
      discount: 0.1,
    },
    pro: {
      discount: 0.5,
    },
    platinum: {
      discount: 0.7,
    },
  },
};
const contract = new Map([
  [client1, bank.clientLevels[client1.clientLevel].discount],
  [client2, bank.clientLevels[client2.clientLevel].discount],
]);

const pricePurchase = function (client, price) {
  const priceWithDiscount =
    price * (contract.has(client) ? contract.get(client) : 1);
  if (client.account > priceWithDiscount) {
    client.account -= priceWithDiscount;
    return priceWithDiscount;
  } else {
    return `you are missing ${priceWithDiscount - client.account}`;
  }
};
*/
/*Деструктиразация
//Деструктиразация объекта 
const table = {
  material: 'oak',
  color: 'brown',
  dimensions: {
    width: {
      unit: 'sm',
      value: 120,
    },
    height: {
      unit: 'sm',
      value: 100,
    },
    lenght: {
      unit: 'sm',
      value: 250,
    },
  },
  shelves: [
    [{ itemType: 'book', name: 'kobzar', cover: 'solid' }],
    [{ itemType: 'pen', name: 'kobzar', color: 'black' }],
    [{ itemType: 'notepad' }],
    [{ itemType: 'money', amoun: 5000 }],
  ],
};

// const heightTable = `${table.dimensions.height.value} ${table.dimensions.height.unit}`;
// const { dimensions, material } = table;
// const { height } = dimensions;
// const { value, unit } = height;
// const heightTable2 = `${value} ${unit}`;
// const {
//   material,
//   color,
//   dimensions: {
//     height: { value: tableHeightValue, unit: tableHeightUnit },
//     width: { value: tableWidthValue, unit: tableWidthUnit },
//   },
//   dimensions,
// } = table;
// const heightTable = `${tableHeightValue} ${tableHeightUnit}`;
// const widthTable = `${tableWidthValue} ${tableWidthUnit}`;

const { shelves, dimensions, ...shelfLessTable } = table; // сделать объект без shelves

const { height, ...restDimensions } = dimensions;
shelfLessTable.dimensions = restDimensions;
//Деструктаризация массива
const arr1 = [1, 2, 3, 45, 5, 78, 6];
// const [, , , fourth] = arr1; //45
const [, , ...newArr] = arr1; //3, 45, 5, 78, 6]

// const fullName = 'Test Testovich';
// const [firstName, lastName] = fullName.split(' ');

const {
  shelves: [firstShalf, [pen]],
} = table;

const user = {
  firstName: `User`,
  lasrName: `Userenko`,
};

function greetUser(user) {
  const { firstName, lasrName } = user;
  return `hello ${firstName} ${lasrName}`;
}
*/
/*Замыкания
let i = 0;
function counter() {
  i++;
  return i;
}

console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }
  return incrementCounter;
}

const increment1 = makeCounter();
console.log(increment1());
console.log(increment1());
console.log(increment1());
const increment2 = makeCounter();
console.log(increment2());
console.log(increment2());

function makeCounter() {
  let counter = 0;
  return {
    increment: function () {
      return ++counter;
    },
  };
}
const counter1 = makeCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

const createAdder = (num) => (num2) => (num += num2);
const adder = createAdder(50);
*/