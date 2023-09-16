let params = new URLSearchParams( window.location.search );
const divUsers = $( '#divUsers' );

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

