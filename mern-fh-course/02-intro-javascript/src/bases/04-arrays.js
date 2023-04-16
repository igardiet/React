// ARRAYS: collection of information inside a varable
// const array = new Array(100) // only use this way to create an array with predefined values
// IT IS NOT RECOMMENDED TO USE .PUSH() BECAUSE IT MODIFIES THE PRINCIPAL OBJECT
// USE SPREAD (...) OPERATOR TO INSERT A VALUE INTO AN ARRAY

const array = [1, 2, 3, 4];
let array2 = [...array, 5];

const array3 = array2.map(function (numero) {
  return numero * 2;
});

console.log(array);
console.log(array2);
console.log(array3);
