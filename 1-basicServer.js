const express = require( 'express' )

const app = express()

// send basic html. note there is no content-type
app.get( '/', ( req, res ) => {
    res.write( "<h1>Hello from express</h1>" )
    res.end()
} )

// write + end = send
app.get( '/1', ( req, res ) => {
    res.send( "<h1>Hello from express on one line</h1>" )
} )

// send json
app.get( '/2', ( req, res ) => {
    res.send( { "key": "this is json" } )
} )

// send a html file. note that specifying the root is required
app.get( '/3', ( req, res ) => {
    res.sendFile( "html/1-basicServer.html", { root: __dirname } )
} )

// for req.body
app.use( express.urlencoded( { extended: false } ) )
    // post request
app.post( '/3', ( req, res ) => {
    res.send( req.body.message )
} )

app.listen( 3000 )