const getNumberSign = (a) => {

  if (a === 0) {
    return 'zero'
  } else if (a >= 1) {
    return 'postive'
  } else {
    return 'negative'
  }
}

module.exports = getNumberSign;

// To run, run node and type
// const getNumberSign = require('./getNumberSign');
// getNumberSign(5);
// returns 'psotive'