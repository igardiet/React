/* NODE SERVER */
/*const http = require('http');

const server = http.createServer((req, res) => {
	res.status = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World')
})

server.listen(3000, () => {
	console.log('Serve on port 3000')
})*/

// EXPRESS SERVER
const express = require("express");
const app = express();

app.use(express.json()); //necesary to make json objects readable by express

// all no es un metodo http, es una funcion de express en la que pasa primero
app.all("/user", (req, res, next) => {
  console.log("Here it goes");
  // res.send('finish')	this without next param
  next();
});

// GET requests are used to return things
// JSON specifies that a javascript object is going to be returned
app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe",
  });
});

// POST requests are used to receive data and save it in database or process it, and then return an answer to the app who send the data
app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST REQUEST RECEIVED");
});

// PUT requests take the data sent by the frontend to update them in a database or apply logic to then return something to the browser
app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});

// DELETE requests take the data sent by the browser and delete the data in the server to then return an answer
app.delete("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
