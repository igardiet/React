const http = require('http');

http
  .createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hello!');
    res.end();
  })
  .listen(8080);
console.log('Listening on port', 8080);
