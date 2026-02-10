// if ("0")
if ("0") {
  alert("Hello");
}

// Official name of JavaScript
let answer = prompt('What is the "official" name of JavaScript?', '');
if (answer === 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don’t know? ECMAScript!");
}

// Show the sign
let number = prompt("Enter a number", 0);
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// if → ?
let a = 1, b = 2;
let result = (a + b < 4) ? 'Below' : 'Over';

// if..else → ?
let login = prompt("Enter login", "");
let message =
  (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
alert(message);
