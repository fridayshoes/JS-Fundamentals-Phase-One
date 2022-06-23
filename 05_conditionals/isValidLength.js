const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

module.exports = isValidLength;

// To run, run node and type
// const isValidLength = require('./isValidLength');
// isValidLength(1122334455);
// returns true