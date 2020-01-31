/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
"use strict";

function factorial(n) {
  let result = 1;

  while (n) {
    result = result * n;
    n--;
  }
  return result;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
