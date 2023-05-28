const { createFile } = require('./helpers/multiply');
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: true,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'Base must be a number';
    }
    return true;
  }).argv;

console.clear();

console.log(argv);

createFile(argv.b, argv.l)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.log(err));

// console.log(process.argv);
// console.log('base: yargs', argv.b);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 5;
