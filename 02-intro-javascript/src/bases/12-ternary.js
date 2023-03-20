const active = true;

// Conditional if
let message = "";
if (active) {
  message = "Active";
} else {
  message = "Inactive";
}
console.log(message);

// Ternary operator #1
const message2 = active ? "Active" : "Inactive";
const message3 = !active ? "Active" : null;

console.log(message2);
console.log(message3);

// Ternary operator #2
const message4 = active && "Active";
const message5 = !active && "Active";
const message6 = !active === false && "Inactive";

console.log(message4);
console.log(message5);
console.log(message6);
