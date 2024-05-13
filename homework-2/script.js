console.log(typeof 42);
console.log(typeof "Hello, world!");
console.log(typeof true);
console.log(typeof { key: "value" });
console.log(typeof undefined);
console.log(typeof function () { });
if (typeof Symbol !== 'undefined') {
  console.log(typeof Symbol());
}




const userInput1 = prompt("Введіть перший рядок:");
const userInput2 = prompt("Введіть другий рядок:");
const userInput3 = prompt("Введіть третій рядок:");

console.log(`${userInput2} ${userInput3} ${userInput1}`);



let number = 10369;
let digits = number.toString().split('').join(' ');

console.log(number);
console.log(digits);