// while-Oson

// 1

// let i = 2
// while (i <= 50){
//     console.log(i);
//     i+= 2;
// }

// 2

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log("Yig'indi:", sum);

// 3 

// let n = 7;
// let i = 1;
// while (i <= 10) {
    // console.log(`${n} x ${i} = ${n * i}`);
    // i++;
// }

// 4

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 5 
// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// 6
// function isPrime(n) {
//     if (n <= 1) return false;
//     let i = 2;
//     while (i <= Math.sqrt(n)) {
//         if (n % i === 0) {
//             return false; 
//         }
//         i++;
//     }
//     return true;
// }

// let n = 7;
// console.log(`${n} tub sonmi?`, isPrime(n)); 

// for
 // 1

//  for (let i = 5; i <= 100; i += 5) {
//     console.log(i);
// }

// 2

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 3 

// for (let i = 1; i <= 50; i++) {
//     console.log(i * i); 
// }

// 4
// let sum = 0;
// for (let i = 1; i <= 100; i += 2) {
//     sum += i;
// }
// console.log("Toq sonlar yig'indisi:", sum);

// 5
// let n = 24; 
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// console.log(`${n} sonining bo'luvchilar soni:`, count);