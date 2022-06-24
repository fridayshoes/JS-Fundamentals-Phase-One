class User {
  constructor(name) {
    this.name = name;
  }

  // A method.
  getName() {
    return this.name;
  }

  // A method.
  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}


class UserBase {
  constructor(users) {
    this.users = users;
  }
  
  
  count(users) {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => {
      return user.name;
    });
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction();
    });
  }

}


// -- Run following tests --

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);

console.log(userBase.count());
// returns 3

console.log(userBase.getNames());
// returns [ 'Uma', 'Josh', 'Ollie' ]

console.log(userBase.getIntroductions());
// returns
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]