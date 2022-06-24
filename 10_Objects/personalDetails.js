const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};


// -- Run following tests --

// Prints the attribute associated to city
console.log(person.address.city);
// result
// London


// Prints the attribute associated to 2nd value in hobbies
console.log(person.hobbies[1])
// result
// tennis