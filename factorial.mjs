#!/usr/bin/env zx

// question() - takes input as string
let a = await question("Enter a Number: ");

// string to integer
a = parseInt(a);

// checking if number is negative
if (a < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (a === 0) {
  console.log(`The factorial of ${a} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  let i = 1;
  for (i = 1; i <= a; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${a} is ${fact}.`);
}
