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
        client.broadcast.emit( 'personList', users.getPerson() );
        callback( people );
    } );

    client.on( 'disconnect', () =>
    {
        let deletedPerson = users.deletePerson( client.id );
        client.broadcast.emit( 'createMessage', { user: 'Admin', message: `${deletedPerson} left the chat` } );
        client.broadcast.emit( 'personList', users.getPerson() );
    } );
} );