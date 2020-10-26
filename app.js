const express = require('express');
const data = '/data.json';
const path = require('path');

const app = express();

app.set('view engine', 'pug');

// serve the static files located in the public folder
app.use('/static', express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

// Project route
app.get('/project', (req, res) => {
  res.render('project');
});

app.listen(3000, () => {
  console.log('The application is running on Localhost:3000!');
});
