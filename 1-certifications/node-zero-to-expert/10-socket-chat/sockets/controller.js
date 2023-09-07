const { Socket } = require( 'socket.io' );
const { findJWT } = require( "../helpers" );
const ChatMessages = require( "../models/chatMessages" );

const chatMessages = new ChatMessages();

const socketController = async ( socket = new Socket(), io ) =>
{
    const user = await findJWT( socket.handshake.headers['x-token'] );
    if ( !user ) return socket.disconnect();

    chatMessages.connectUser( user );
    io.emit( 'active-users', chatMessages.usersArray );

    socket.on( 'disconnect', () =>
    {
        chatMessages.disconnectUser( user.id );
        io.emit( 'active-users', chatMessages.usersArray );
    } );
};

module.exports = { socketController };