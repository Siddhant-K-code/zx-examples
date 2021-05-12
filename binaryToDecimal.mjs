#!/usr/bin/env zx

// question() - takes input as string
let n = await question("Enter a Binary Number: ");

// Binary To Decimal
let decimal = parseInt(n, 2);

console.log("Decimal of " + n + " is: " + decimal);
