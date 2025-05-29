
// const var1 = require("./file-1")
// const { a, add } = require("./file-1")

import { a } from "./file-1.mjs"
// import add from "./file-1.mjs"
import addKoro from "./file-1.mjs"
// const { a: a3, add: add3, b: b3 } = require("./file-3") // renamed the variables for naming conflict. 
import { a as A3, b as B3, add as Add3 } from "./file-3.mjs"
// console.log(var1) // output: { a: 10, add: [Function: add] }

console.log(a)
// console.log(add(2, 3))

// console.log(addKoro(2, 3))
console.log(addKoro.add(2, 3))
console.log(addKoro.c)

console.log(A3)
console.log(Add3(2, 3, 6))
console.log(B3)

// console.log(module) we will not get any module here since IIFE is not present here. 