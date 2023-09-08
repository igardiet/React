const socket = io();

const params = new URLSearchParams( window.location.search );

if ( !params.has( 'name' ) )
{
    window.location = 'index.html';
    throw new Error( 'Name is mandatory' );
}

const user =
{
    name: params.get( 'name' )
};

socket.on( 'connect', () =>
{
    console.log( 'Connected to server' );

    socket.emit( 'enterChat', user, ( answer ) =>
    {
        console.log( 'Users connected', answer );
    } );
} );

socket.on( 'disconnect', () => console.log( 'Server connection has been lost' ) );

socket.emit( 'sendMessage', {
    user: 'User',
    message: 'Message'
}, ( answer ) => console.log( 'Server response: ', answer ) );

socket.on( 'sendMessage', ( message ) => console.log( 'Server:', message ) );