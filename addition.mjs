#!/usr/bin/env zx

// question() - takes input as string
let a = await question("Enter First Number: ");
let b = await question("Enter Second Number: ");

// string to integer
a = parseInt(a);
b = parseInt(b);

let sum = a + b;
console.log("Sum is: " + sum);
