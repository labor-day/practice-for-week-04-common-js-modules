const messages = require('../messages/say-message');
const sayMessage = messages.sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports.sayHelloTo = sayHelloTo;
