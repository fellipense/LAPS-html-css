var express = require("express");
var ejs = require("ejs");
const path = require("path");
const app = express();
const PORT = 7000;

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use('/', express.static(__dirname + '/'));

app.get('/', async (req, res) => {
    res.sendFile('/index.html');
});

app.get('/index.html', async (req, res) => {
    res.redirect('/');
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})