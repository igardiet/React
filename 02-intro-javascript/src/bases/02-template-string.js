const name = "Inaki";
const surname = "Dietze";

// const fullName = name + ' ' + surname
const fullName = `${name} ${surname} ${1 + 1}`;
console.log(fullName);

function getGreet(name) {
  return "Hello " + name;
}
console.log(`This is a text: ${getGreet(name)}`);
