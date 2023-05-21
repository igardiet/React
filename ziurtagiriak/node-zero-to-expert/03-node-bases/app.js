const fs = require('fs');

console.clear();

const base = 5;

console.log('===============');
console.log(`Table of: ${base}`);
console.log('===============');

let exit = '';

for (let i = 1; i <= 10; i++) {
  exit += `${base} * ${i} = ${base * i}\n`;
}

console.log(exit);

fs.writeFile(`table-${base}.txt`, exit, (err) => {
  if (err) throw err;
  console.log(`table-${base}.txt successfully created!`);
});
