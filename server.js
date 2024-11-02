const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { partials } = require('handlebars');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname,'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/aleman', (req, res) => {
  res.render('aleman');
});

app.get('/golden', (req, res) => {
  res.render('golden');
});

app.get('/pequines', (req, res) => {
  res.render('pequines'); 
});
  
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
