const { createFile } = require('./helpers/multiply');

console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

// const base = 5;

createFile(base)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.log(err));
