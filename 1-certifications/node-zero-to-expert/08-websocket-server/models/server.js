const express = require('express');
const cors = require('cors');

// Express with classes server creation

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);
    this.paths = {};
    this.middlewares();
    this.routes();
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.static('public'));
  }

  routes() {
    // this.app.use( this.paths.auth, require('../routes/auth'));
  }

  sockets() {
    this.io.on('connection', socket => {
      console.log('Client connected', socket.id);
      socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
      });
      socket.on('send-message', payload => {
        console.log(payload);
      });
    });
  }

  listen() {
    this.server.listen(this.port || 3000, () => {
      console.log(`Server running in port: ${this.port}`);
    });
  }
}

module.exports = Server;
