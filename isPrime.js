/**
 * Checks if a number is a prime number.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if the number is prime, otherwise false.
 */

/**
 * Checks if a number is prime.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * This function uses a simple algorithm to check for primality by testing divisibility from 2 up to n-1.
 *
 *
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const result = isPrime(8);
console.log(result);

function isPrimeOptimised(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const result1 = isPrimeOptimised(7);
console.log(result1);
