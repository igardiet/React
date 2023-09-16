let params = new URLSearchParams( window.location.search );

const name = params.get( 'name' );
const room = params.get( 'room' );

const divUsers = $( '#divUsers' );
const sendForm = $( '#sendForm' );
const txtMessage = $( '#txtMessage' );
const divChatbox = $( '#divChatbox' );

const renderUsers = ( people ) =>
{

    let html = '';

    html += '<li>';
    html += '<a href="javascript:void(0)" class="active"><span> ' + params.get( 'room' ) + '</span> Chat</a>';
    html += '</li>';

    for ( let i = 0; i < people.length; i++ )
    {
        html += '<li>';
        html += '<a data-id="' + people[i].id + '" href="javascript:void(0)"><img src="assets/images/users/1.jpg"alt="user-img" class="img-circle"> <span>' + people[i].name + ' <small class="text-success">online</small></span></a>';
        html += '</li>';
    }
    divUsers.html( html );
};

const renderMessages = ( message ) =>
{
    let html =

        html += '<li class="animated fadeIn">';
    html += '    <div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /> </div>';
    html += '    <div class="chat-content">';
    html += '        <h5>' + message.name + '</h5>';
    html += '        <div class="box bg-light-info">' + message.message + '</div>';
    html += '    </div>';
    html += '    <div class="chat-time">10:56 am</div>';
    html += '</li>';

    divChatbox.append( html );
};

divUsers.on( 'click', 'a', () =>
{
    const id = $( this ).data( 'id' );
    if ( id )
    {
        console.log( id );
    }
} );

sendForm.on( 'submit', function ( e )
{
    e.preventDefault();
    if ( txtMessage.val().trim().length === 0 )
    {
        return;
    }

    socket.emit( 'createMessage',
        {
            name,
            message: txtMessage.val()
        }, ( message ) =>
    {
        txtMessage.val( '' ).focus();
        renderMessages( message );
    }
    );
} );