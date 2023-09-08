const socket = io();

socket.on( 'connect', () => console.log( 'Connected to server' ) );

socket.on( 'disconnect', () => console.log( 'Server connection has been lost' ) );

socket.emit( 'sendMessage', {
    usuario: 'User',
    mensaje: 'Message'
}, ( answer ) => console.log( 'Server response: ', answer ) );

socket.on( 'sendMessage', ( mensaje ) => console.log( 'Server:', mensaje ) );