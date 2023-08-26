const TicketControl = require( '../models/ticketControl' );

const ticketControl = new TicketControl();

const socketController = socket =>
{
  socket.emit( 'last-ticket', ticketControl.last );
  socket.on( 'next-ticket', ( payload, callback ) =>
  {
    const next = ticketControl.next();
    callback( next );
  } );

  socket.on( 'attend-ticket', ( { desktop }, callback ) =>
  {
    if ( !desktop )
    {
      return callback( {
        ok: false,
        msg: 'Desktop is mandatory',
      } );
    }
    const ticket = ticketControl.attendTicket( desktop );

    // TODO: Notify change in last4

    if ( !ticket )
    {
      callback( {
        ok: false,
        msg: 'there are no more pending tickets',
      } );
    } else
    {
      callback( {
        ok: true,
        ticket,
      } );
    }
  } );
};

module.exports = {
  socketController,
};
