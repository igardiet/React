const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usersPath = '/api/users';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors()); // cors
    this.app.use(express.json());  // Body parse
    this.app.use(express.static('public')); // Public directory
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port || 3000, () => {
      console.log(`Server running in port: ${this.port}`);
    });
  }
}
module.exports = Server;
