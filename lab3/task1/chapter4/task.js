let obj = {};
function A() { return obj; }
function B() { return obj; }
let a = new A();
let b = new B();
console.log("a == b:", a == b);

function Calculator() {
  this.read = function() {
    this.a = +prompt("Calculator: Enter a value for a", "");
    this.b = +prompt("Calculator: Enter a value for b", "");
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
console.log("Calculator Sum =", calculator.sum());
console.log("Calculator Mul =", calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("Accumulator: Enter a number to add", "");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log("Accumulator Value =", accumulator.value);
