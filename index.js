const express = require( 'express' )

const app = express()
app.use( express.urlencoded( { extended: false } ) )

const list = [];

// send basic html. note there is no content-type
app.get( '/', ( req, res ) => {
    res.send( ( `<html doctype="html">
<head>
    <title>This is my title</title>
</head>
<body>
    <h1>Displaying a List</h1>
    <p>${list}</p>
    <h4>Add</h4>
    <form action="/add" method="POST"><input type="text" name="message" /></br><input type="submit"></form>
    <h4>Update</h4>
    <form action="/update" method="POST"><input type="text" name="message" /></br><input type="submit"></form>
    <h4>Delete</h4>
    <form action="/delete" method="POST"><input type="submit"></form>
</body>
</html>` ) )
} )

// post request
app.post( '/add', ( req, res ) => {
    list.push( req.body.message );
    res.redirect( '/' );
} )

app.post( '/update', ( req, res ) => {
    list[ 0 ] = req.body.message;
    res.redirect( '/' );
} )

app.post( '/delete', ( req, res ) => {
    list.pop();
    res.redirect( '/' );
} )


app.listen( 3000, () => console.log( "server started" ) )