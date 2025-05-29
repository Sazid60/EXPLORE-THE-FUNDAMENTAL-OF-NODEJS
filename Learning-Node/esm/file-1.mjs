const a = 10;

const add = (param1, param2) => param1 + param2
const c = 50


// this function will replace the object of the module

// module.exports = a;

// module.exports = add;
export {
    a
};

export default {
    add, c
}


// console.log(module)