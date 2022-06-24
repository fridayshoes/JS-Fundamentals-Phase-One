const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

// -- Run the following test --

console.log(transform("WHY ARE YOU SHOUTING", lowercaseMessage));