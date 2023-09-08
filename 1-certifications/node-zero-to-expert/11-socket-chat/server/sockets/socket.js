const { io } = require( '../server' );

io.on( 'connection', ( client ) =>
{
    console.log( 'User connected' );

    client.emit( 'sendMessage', {
        usuario: 'Admin',
        mensaje: 'Welcome to the app'
    } );

    client.on( 'disconnect', () => console.log( 'User disconnected' ) );

    client.on( 'sendMessage', ( data, callback ) =>
    {
        console.log( data );

        client.broadcast.emit( 'sendMessage', data );

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }
    } );
} );