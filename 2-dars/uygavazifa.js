let a = 4;
let b = 5;

let P = 2 * (a + b);
let S = a * b;

console.log("Perimetri:", P);
console.log("Yuzasi:", S);

let F = 32;
let C = (F - 32) * 5 / 9;

console.log("Natija:", C, "Selsiy");

let num1 = 1;
let num2 = 2;
let num3 = 3;
let kop = num1 * num2 * num3;

console.log("Ko'paytmasi:", kop);

let km = 2;
let meter = km * 1000;
let cm = km * 100000;

console.log("Natija:", meter, "metr,", cm, "santimetr");

let cost = 50000;
let total_price = cost * 1.12;

console.log("Natija:", total_price, "so'm");

let k = 1255;
let ton = k / 1000;
let center = (k % 1000) / 100;
let kg = k % 100;

console.log("Natija:", ton, "tonna", center, "sentner", kg, "kg");

let n = 234;
let d1 = n % 10;
let d2 = (n / 10) % 10;
let d3 = n / 100;

let prod = d1 * d2 * d3;

console.log("Natija:", prod);