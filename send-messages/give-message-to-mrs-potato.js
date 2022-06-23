const { sayHelloTo } = require("./say-hello-to.js");

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

exports.giveMessageToMrsPotato = giveMessageToMrsPotato;
