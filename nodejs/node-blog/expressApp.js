const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI =
  'mongodb+srv://inaki:030298@nodern.di5qnsh.mongodb.net/nodern?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.warn(err));

// register view engine ALWAYS DOWN EXPRESS APP
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//   // create new blogs
//   const blog = new Blog({
//     title: 'new blog 3',
//     snippet: 'about new blog',
//     body: 'more about new blog',
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.warn(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   // find all blogs
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.warn(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('643011209bdbf0552bf550d8') // find blog by id
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.warn(err);
//     });
// });
