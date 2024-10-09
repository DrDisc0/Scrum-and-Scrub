require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.urlencoded({ extended:true }));
app.use('/', require('./route'));
/*app.get('/', function(req, res) {
    res.sendFile('index.html', {root:__dirname});
});*/

app.listen(port, () => {
    console.log('Now listening on port ' + port)
});
