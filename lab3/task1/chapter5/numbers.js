let num1 = +prompt("Enter first number", "");
let num2 = +prompt("Enter second number", "");
alert("Sum = " + (num1 + num2));

alert( + (6.35 * 10).toFixed(0) / 10 ); 

function readNumber() {
  let value;
  do {
    value = prompt("Enter a number","");
    if(value === null || value === "") return null;
  } while(!isFinite(value));
  return +value;
}

let i = 0;


function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1,5));
console.log(randomInteger(1,5));
