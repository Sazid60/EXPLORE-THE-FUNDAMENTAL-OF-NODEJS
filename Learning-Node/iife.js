let a = 30; // this will not impact the value of a inside the function
((name) => {
    let a = 10; //block scope
    console.log(`Learning ${name}`)
})("node")

console.log(a) // output = 30

console.log(global)
console.log(module)
console.log(__dirname)
console.log(__filename)