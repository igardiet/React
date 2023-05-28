const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

console.clear();

createFile(argv.b, argv.l)
  .then((fileName) => console.log(fileName.rainbow, 'created'))
  .catch((err) => console.log(err));

// COMMANDS TO TEST THIS!
// node app --help
// node app -b 7 -l
// ----------------

// console.log(argv);
// console.log(process.argv);
// console.log('base: yargs', argv.b);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 5;
