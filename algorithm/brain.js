var brain = require("brain.js")

const net = new brain.NeuralNetwork()
 
net.train([
  { input: [1,1,0,0,1,0,0], output: { present: true } },
  { input: [1,1,0,0,1,0,0], output: { present: true } },
  { input: [1,1,0,0,1,0,0], output: { present: false } },
])
 
const output = net.run([1,1,0,0,1,0,0]);
console.log(output);