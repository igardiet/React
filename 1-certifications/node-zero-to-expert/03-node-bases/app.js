const { createFile } = require( './helpers/multiply' );
const argv = require( './config/yargs' );
require( 'colors' );

console.clear();

createFile( argv.b, argv.l, argv.u )
  .then( ( fileName ) => console.log( fileName.rainbow, 'created' ) )
  .catch( ( err ) => console.log( err ) );

// COMMANDS TO TEST THIS!
// node app --help        | help
// node app -b 5          | base
// node app -b 7 -l       | list
// node app -b 2 -l -u=20 | until
// ----------------

// console.log(argv);
// console.log(process.argv);
// console.log('base: yargs', argv.b);
