require( 'dotenv' ).config();
const express = require( 'express' );
const hbs = require( 'hbs' );
const app = express();
const port = process.env.PORT;

// Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials' );

app.use( express.static( 'public' ) ); // Serve static content middleware

app.get( '/', ( req, res ) =>
{
  res.render( 'home', {
    name: 'George Lucas',
    title: 'Star Wars',
  } );
} );

app.get( '/generic', ( req, res ) =>
{
  res.render( 'generic', {
    name: 'George Lucas',
    title: 'Star Wars',
  } );
} );

app.get( '/elements', ( req, res ) =>
{
  res.render( 'elements', {
    name: 'George Lucas',
    title: 'Star Wars',
  } );
} );

app.get( '*', ( req, res ) =>
{
  res.sendFile( __dirname + '/public/404.html' );
} );

app.listen( port, () =>
{
  console.log( `App listening at http://localhost:${port}` );
} );
