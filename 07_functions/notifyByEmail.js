const notifyByEmail = (address) => {
  return `Email sent to: ${address}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
}

const notify = (input, sendIt) => {
  return sendIt(input);
}

// -- Run the following test --

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));