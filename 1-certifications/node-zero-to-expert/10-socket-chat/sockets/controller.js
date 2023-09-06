const { Socket } = require( 'socket.io' );
const { findJWT } = require( "../helpers" );

const socketController = async ( socket = new Socket() ) =>
{
    const user = await findJWT( socket.handshake.headers['x-token'] );
    if ( !user ) return socket.disconnect();

    console.log( `${user.name} has connected` );
};

module.exports = { socketController };