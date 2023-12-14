/* complex_code.js */

// This program calculates the sum of all prime numbers below a given input number

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  if (num % 2 == 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function main() {
  const inputNumber = 100;
  const sum = sumOfPrimes(inputNumber);
  console.log(`The sum of primes below ${inputNumber} is ${sum}`);
}

main();