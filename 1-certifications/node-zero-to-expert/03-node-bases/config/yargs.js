const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    // demandOption: true,
    default: false,
    describe: 'It shows the table in console',
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: '10',
    describe: 'Multiplication table until...',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'Base must be a number';
    }
    return true;
  }).argv;

module.exports = argv;
