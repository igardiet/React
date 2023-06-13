const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home route');
});

app.get('/categories', (req, res) => {
  res.send('Categories route');
});

app.get('*', (req, res) => {
  res.send('404 | Page not found!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
