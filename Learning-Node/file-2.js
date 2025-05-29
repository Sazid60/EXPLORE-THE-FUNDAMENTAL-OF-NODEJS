
const var1 = require("./file-1")
// const { a, add } = require("./file-1")

const { a: a3, add: add3, b: b3 } = require("./file-3") // renamed the variables for naming conflict. 

// console.log(var1) // output: { a: 10, add: [Function: add] }

console.log(var1.a)
console.log(var1.add(2, 3))

console.log(a3)
console.log(add3(2, 3, 6))
console.log(b3)