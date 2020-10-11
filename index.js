const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())
app.use(express.json())

require('./routes')(app)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });    
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on Port 5000")
})
