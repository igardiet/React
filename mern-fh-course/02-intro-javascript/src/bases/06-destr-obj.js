// Object destructuring

const person = {
  name: "Harry",
  age: 18,
  key: "Wizard",
};

// const {name, age, key,} = person

// console.log(name)
// console.log(age)
// console.log(key)

const USECONTEXT = ({ name, age, range = "Catcher", key }) => {
  // console.log(name,age,range)
  return {
    keyName: key,
    years: age,
    latlng: {
      lat: 38.4982,
      lng: -12.9382,
    },
  };
};

// nested destructuring
const {
  keyName,
  years,
  latlng: { lat, lng },
} = USECONTEXT(person);

console.log(keyName, years);
console.log(lat, lng);
