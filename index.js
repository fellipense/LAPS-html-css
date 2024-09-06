var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

const app = express();

const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.redirect('index.html')
})

app.get('/index', (req, res) => {
    res.redirect('index.html')
})

app.get('/index.html', (req, res) => {
    res.render('index');
})