// Array destructuring

const characters = ["Mario", "Luigi", "Bowser"];
const [, , p3] = characters;
console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

// Task
const USESTATE = (value) => {
  return [
    value,
    () => {
      console.log("Hello World");
    },
  ];
};
const [name, setName] = USESTATE("Mario");
console.log(name);
setName();
