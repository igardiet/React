console.log( 'Program start' );

setTimeout( () =>
{
  console.log( 'First Timeout' );
}, 3000 );

setTimeout( () =>
{
  console.log( 'Secont Timeout' );
}, 0 );

setTimeout( () =>
{
  console.log( 'Third Timeout' );
}, 0 );

console.log( 'Program end' );
