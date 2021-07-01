const express = require('express');
const path = require('path');
const app = express();


app.set("port",process.env.PORT || 3000)

const publicPath = path.resolve('public');



app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/register.html', function(req, res) {
    res.sendFile(path.resolve('./views/register.html'));
});
app.post('/register', function(req, res) {
    res.send(req.body);
});

app.get('/login.html', function(req, res) {
    res.sendFile(path.resolve('./views/login.html'));
});
app.post('/login', function(req, res) {
    res.send(req.body);
});


app.listen(process.env.PORT || 3000, function(){
    console.log('Server running port 3000')
});