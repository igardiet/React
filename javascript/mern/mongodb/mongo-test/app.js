const express = require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

// port
const PORT = 3000;

// init app and middleware
const app = express();
app.use(express.json());

// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`App successfully started on port ${PORT}`);
    });
    db = getDb();
  }
});

// routes
app.get('/books', (req, res) => {
  // current page
  const page = req.query.p || 0;
  const booksPerPage = 3;

  let books = [];

  db.collection('books')
    .find()
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: 'Documents could not be fetched!' });
    });
});

app.get('/books/:id', (req, res) => {
  ObjectId.isValid(req.params.id)
    ? db
        .collection('books')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then((doc) => {
          res.status(200).json(doc);
        })
        .catch((err) => {
          res.status(500).json({ error: 'Document could not be fetched!' });
        })
    : res.status(500).json({ error: 'Document id not valid!' });
});

app.post('/books', (req, res) => {
  const book = req.body;
  db.collection('books')
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: 'document could not be created!' });
    });
});

app.delete('/books/:id', (req, res) => {
  ObjectId.isValid(req.params.id)
    ? db
        .collection('books')
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json({ error: 'Document could not be deleted!' });
        })
    : res.status(500).json({ error: 'Document id not valid!' });
});

app.patch('/books/:id', (req, res) => {
  const updates = req.body;

  ObjectId.isValid(req.params.id)
    ? db
        .collection('books')
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json({ error: 'Document could not be deleted!' });
        })
    : res.status(500).json({ error: 'Document id not valid!' });
});
