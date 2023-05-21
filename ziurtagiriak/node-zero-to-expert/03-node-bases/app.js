const { createFile } = require('./helpers/multiply');

console.clear();

const base = 5;

createFile(base)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.log(err));
