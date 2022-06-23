const fizzbuzzUntil = (number) => {
  for (let i = 1; i <= number ; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // Number divides by 3 and 5 with a remainder of zero
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzbuzzUntil;

// To run, run node and type
// const fizzbuzzUntil = require('./fizzbuzzUntil');
// fizzbuzzUntil(20);
// returns
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz 