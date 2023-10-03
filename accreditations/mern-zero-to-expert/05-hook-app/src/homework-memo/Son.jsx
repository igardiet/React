import React from 'react';

export const Son = React.memo( ( { number, increment } ) =>
{
  console.log( '  I re-rendered :(  ' );

  return (
    <button className='btn btn-danger mr-3' onClick={() => increment( number )}>
      {number}
    </button>
  );
} );
