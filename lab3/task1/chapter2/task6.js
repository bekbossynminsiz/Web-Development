let name = "John";
let admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentVisitorName = "Alice";

const BIRTHDAY = '18.04.1982';
const age = 42;

let a = 1, b = 1;
let c = ++a;
let d = b++;
alert(`a=${a}, b=${b}, c=${c}, d=${d}`);

let a2 = 2;
let x = 1 + (a2 *= 2);
alert(`a2=${a2}, x=${x}`);

alert("" + 1 + 0);
alert("" - 1 + 0);
alert(true + false);
alert(6 / "3");
alert("2" * "3");
alert(4 + 5 + "px");
alert("$" + 4 + 5);
alert("4" - 2);
alert("4px" - 2);
alert("  -9  " + 5);
alert("  -9  " - 5);
alert(null + 1);
alert(undefined + 1);
alert(" \t \n" - 2);

let num1 = +prompt("First number?", 1);
let num2 = +prompt("Second number?", 2);
alert(num1 + num2);

alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));

alert(1 && null && 2);
alert(alert(1) && alert(2));

alert(null || 2 && 3 || 4);

let ageCheck = 20;
if (ageCheck >= 14 && ageCheck <= 90) {
  alert("Age is in range");
}
if (!(ageCheck >= 14 && ageCheck <= 90)) {
  alert("Outside range");
}
if (ageCheck < 14 || ageCheck > 90) {
  alert("Outside range");
}

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');

let login = prompt("Who are you?");
if (login === "Admin") {
  let password = prompt("Password?");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (login === "" || login === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

let a3 = 1, b3 = 2;
let result = (a3 + b3 < 4) ? 'Below' : 'Over';
alert(result);

let login2 = "Employee";
let message = (login2 == 'Employee') ? 'Hello' :
              (login2 == 'Director') ? 'Greetings' :
              (login2 == '') ? 'No login' :
              '';
alert(message);
