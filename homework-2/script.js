console.log(typeof 42);
console.log(typeof "Hello, world!");
console.log(typeof true);
console.log(typeof { key: "value" });
console.log(typeof undefined);
console.log(typeof function () { });
if (typeof Symbol !== 'undefined') {
  console.log(typeof Symbol());
}