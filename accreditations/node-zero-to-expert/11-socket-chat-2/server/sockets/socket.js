const { Users } = require( "../classes/users" );
const { io } = require( '../server' );
const { createMessage } = require( "../utils/utils" );

const users = new Users();

io.on( 'connection', ( client ) =>
{
    client.on( 'enterChat', ( data, callback ) =>
    {
        if ( !data.name || !data.room )
        {
            return callback
                ( {
                    error: true,
                    message: 'Name/Room are mandatory'
                } );
        }
        client.join( data.room );
        users.addPerson( client.id, data.name, data.room );
        client.broadcast.to( data.room ).emit( 'personList', users.getPeopleByRoom( data.room ) );
        callback( users.getPeopleByRoom( data.room ) );
    } );

    client.on( 'createMessage', ( data ) =>
    {
        let person = users.getPerson( client.id );
        let message = createMessage( person.name, data.message );
        client.broadcast.to( person.room ).emit( 'createMessage', message );
    } );

    client.on( 'disconnect', () =>
    {
        let deletedPerson = users.deletePerson( client.id );
        client.broadcast.to( deletedPerson.room ).emit( 'createMessage', createMessage( 'Admin', `${deletedPerson.name} has left the chat` ) );
        client.broadcast.to( deletedPerson.room ).emit( 'personList', users.getPeopleByRoom( deletedPerson.room ) );
    } );

    
} );