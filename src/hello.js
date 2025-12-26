/**
 * Say hello to someone
 * @param {string} name - The name to greet (default: "World")
 * @returns {string} The greeting message
 */
function sayHello(name = "World") {
  return `Hello, ${name}!`;
}

module.exports = { sayHello };
