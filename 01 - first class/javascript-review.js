// FUNCTIONS

// Arrow function
const arrowAddOne = (number) => {
  const result = ++number;
  return result;
};
console.log(arrowAddOne(5));

// Traditional function
const traditionalAddOne = function (number) {
  const result = number + 1;
  return result;
};
console.log(traditionalAddOne(6));

// TEMPLATE LITERALS
function sayHello(text) {
  return `Hello ${text}!`;
}
console.log(sayHello("React")); // Hello React!

// TERNARY OPERATORS
const result = null ? "TRUE" : "FALSE";
console.log(result);
