const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];


const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

// This is a variable! Not a function!!!
// const filterLongNumbers = numbers.filter(checkLength);

// This is a function!
const filterLongNumbers = (num) => {
  return num.filter(checkLength);
}

console.log(filterLongNumbers(numbers));
// returns [ '1763687364', '4763687363', '7867867862' ]

console.log(filterLongNumbers(['4763687363', '7867867862']));
// returns [ '4763687363', '7867867862' ]

console.log(filterLongNumbers([]));
// returns []
