const express = require( 'express' )
const path = require( 'path' );

const app = express();

// view engine setup
app.set( 'views', path.join( __dirname, 'html' ) );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded( { extended: false } ) )

app.get( '/', function ( req, res ) { res.render( '4-basicServer' ) } );

app.post( '/1', function ( req, res ) { res.render( '4-condValue.ejs', { message: req.body.message } ) } );

app.get( '/1', function ( req, res ) { res.render( '4-basicServer' ) } );

app.listen( 3000, () => console.log( `app Started on port 3000!` ) );