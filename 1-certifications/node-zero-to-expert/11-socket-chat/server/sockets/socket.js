const { Users } = require( "../classes/users" );
const { io } = require( '../server' );

const users = new Users();

io.on( 'connection', ( client ) =>
{
    client.on( 'enterChat', ( data, callback ) =>
    {
        if ( !data.name )
        {
            return callback
                ( {
                    error: true,
                    message: 'Name is mandatory'
                } );
        }
        let people = users.addPerson( client.id, data.name );
        callback( people );
    } );
} );