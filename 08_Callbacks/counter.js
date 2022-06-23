let counter = 0; // using let, as we want this variable to be modifiable

const increment = () => {
  counter2 = counter++ // counter++ increments by +1
    console.log(counter2 + 1);
}

const executeAfterDelay = (delay, callbackFunction) => {
  setInterval(callbackFunction, delay * 1000);
}

executeAfterDelay(1, increment);


// Expected output

// node counter.js
// 1
// 2
// 3
// (...)