const url = ( window.location.hostname.includes( 'localhost' ) )
    ? 'http://localhost:8080/api/auth/'
    : 'http://localhost:8080/api/auth/';

let user = null;
let socket = null;

const txtUid = document.querySelector( '#txtUid' );
const txtMessage = document.querySelector( '#txtMessage' );
const ulUsers = document.querySelector( '#ulUsers' );
const ulMessages = document.querySelector( '#ulMessages' );
const btnExit = document.querySelector( '#btnExit' );

const validateJWT = async () =>
{
    const token = localStorage.getItem( 'token' ) || '';

    if ( token.length <= 10 )
    {
        window.location = 'index.html';
        throw new Error( 'There is no token in server' );
    }
    const answer = await fetch( url,
        {
            headers: { 'x-token': token }
        } );
    const { user: userDB, token: tokenDB } = await answer.json();
    localStorage.setItem( 'token', tokenDB );
    user = userDB;
    document.title = user.name;

    await connectSocket();
};

const connectSocket = async () =>
{
    socket = io(
        {
            'extraHeaders':
            {
                'x-token': localStorage.getItem( 'token' )
            }
        } );

    socket.on( 'connect', () => console.log( 'Sockets online' ) );

    socket.on( 'disconnect', () => console.log( 'Sockets offline' ) );

    socket.on( 'receive-messages', drawMessages );

    socket.on( 'active-users', drawUsers );

    socket.on( 'private-message', () => '' );
};

const drawUsers = ( users = [] ) =>
{
    let usersHtml = '';
    users.forEach( ( { name, uid } ) =>
    {
        usersHtml +=
            `
            <li>
                <p>
                    <h5 class="text-success">${name}</h5>
                    <span class="fs-6 text-muted">${uid}</span>
                </p>
            </li>
        `;
    } );
    ulUsers.innerHTML = usersHtml;
};

const main = async () =>
{
    await validateJWT();
};

main();