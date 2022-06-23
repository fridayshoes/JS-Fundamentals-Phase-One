class User {
  constructor(user) {
    this.user = user;
  }

  // A method.
  getName() {
    return this.user;
  }

  // A method.
  getIntroduction() {
    return `Hi, my name is ${this.user}`;
  }
}


const user = new User('Uma');

console.log(user.getName()); 
// returns 'Uma'

console.log(user.getIntroduction());
// returns 'Hi, my name is Uma'