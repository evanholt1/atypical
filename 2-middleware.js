const express = require( 'express' )

const app = express()

app.get( '/', ( req, res ) => {
    res.write( "<h1>Hello from express</h1>" )
    res.end()
} )

// .use is a method which accepts any king of http method(Get,Post,...)
app.use( ( req, res, next ) => {
    console.log( "in middleware" );
    next();
} );

app.get( '/1', ( req, res ) => {
    res.send( "<h1>Hello from express on one line</h1>" )
} )

app.use( ( req, res, next ) => {
    res.send( "ending in this middleware." );
} );

app.get( '/2', ( req, res ) => {
    res.send( { "key": "this is json" } )
} )

app.listen( 3000 )