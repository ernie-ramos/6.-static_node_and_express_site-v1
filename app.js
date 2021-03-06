const express = require('express');
const { projects } = require('../6. static_node_and_express_site-v1/data.json');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

// serve the static files located in the public folder
app.use('/static', express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('index', { projects });
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

// Project route
app.get('/project:id', (req, res) => {
  res.render('project');
});

// Error route
app.get('/error', (req, res) => {
  res.render('error');
});

// 404 route
app.get('/page-not-found', (req, res) => {
  res.render('page-not-found');
});

app.listen(3000, () => {
  console.log('The application is running on Localhost:3000!');
});
