const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroute= require('./Routes/blogroute')


// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://sajid:RY9zWqeMNSQwbfCH@cluster0.1owdxkf.mongodb.net/testblog?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('db connected');
    app.listen(3000)
  })
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // This will allow to read the url
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs'); // Here we redirecting the url to blogs....
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes using here by Middleware fn..............
app.use('/blogs',blogroute);