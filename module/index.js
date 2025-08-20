// const addtocart = require("./module");

const { addtocart, changeqty } = require("./module");

console.log('pal');
let l = ['rajan', 'pal', 'bhadohi'];
l.forEach((value, index) => {
    console.log(value, index);
})
console.log(addtocart());
console.log(changeqty());
// console.log(addtocart());