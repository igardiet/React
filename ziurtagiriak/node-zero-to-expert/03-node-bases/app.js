// const { createFile } = require('./helpers/multiply');
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 5;

// createFile(base)
// .then((fileName) => console.log(fileName, 'created'))
// .catch((err) => console.log(err));
