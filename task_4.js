var a = isNaN('11');

console.log(a); // because it is illegal number. 

var b = isNaN(2-10);

console.log(b); // because it is illegal number.

var c = isNaN("Hello");
console.log(c); // because it is not illegal number.