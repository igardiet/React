// Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.
// It is platform which allows us to run JavaScript on a computer/server
// CRUD options for files (Create, Read, Update, Delete)
// Can use with any type of database
// We need JavaScript engine because computers are not smart enough to understand JavaScript without a JavaScript engine. So, a JavaScript engine works as a middle man to make computers understand the JavaScript. The purpose of javascript engines is to make javascript codes into machine/binary codes.
// V8 (JS engine): The written code is changed to c++, then to assembly and then to machine code.
// JS code works as well on every browser because of the standarized JS writing engine called ECMAScript.

// 1.SETTIMEOUT
// setTimeout(() => {
//   console.log("Hello!");
// }, 3000);

// 2.FUNCTION DECLARATION (normal functions)
// function greenColor() {
//   console.log("Green!");
// }

// 3.FUNCTION EXPRESSION (functions inside expressions)
// const redColor = () => {
//   console.log("Red!");
// };

// 4.REQUIRE & MODULE
// const song = require("./song");
// song.sing();
// song.one();
// song.two();

// 5.REQUIRE EVENTS
// const events = require("events");

// element.on("click", () => {
//   functionality;
// });

// CUSTOM EVENTS
// const myEmitter = new events();
// myEmitter.on("customEvent", function (msg) {
//   console.log(msg);
// });
// myEmitter.emit("customEvent", "this custom event working");

// 6.FS.WRITEFILE (WRITE FILE)
// const fs = require("fs");
// const song = "How do you turn this on?";
// fs.writeFileSync("song.txt", song);
// const readNewData = fs.readFileSync("song.txt", "utf8");
// console.log(readNewData);

// 7.FS.MKDIR (CREATE FOLDER)
// const fs = require("fs");
// fs.mkdirSync("song");

// 8.FS.RMDIR (REMOVE FOLDER)
// const fs = require("fs");
// fs.rmdirSync("song");

// 9.HTTP.CREATESERVER (CREATE SERVER)
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });
// server.listen(3000);
// console.log("Server starting!");

// 10.BUFFER (Temporary storage spot for a chunk of data that can be transferred a small amount at a time)
// Buffer class is a global class that can be accessed in an application without importing the buffer module.
// A)
// const buf = new Buffer(5);

// B)
// const buf = new Buffer([10, 20, 30, 40, 50]);

// C)
// var buf = new Buffer('Hi', 'utf-8');

// 11.STREAMS (re objects that let you read data from a source or write data to a destination in continuous fashion)
// Readable − Stream which is used for read operation.
// Writable − Stream which is used for write operation.
// Duplex − Stream which can be used for both read and write operation.
// Transform − A type of duplex stream where the output is computed based on input.

// 12.SERVING HTML PAGES
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   myReadStream.pipe(res);
// });
// server.listen(3000);
// console.log("Server started in port 3000...");

// 13. JSON TO CLIENT
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   const colors = {
//     first: "Red",
//     second: "Blue",
//     third: "Orange",
//   };
//   res.end(JSON.stringify(colors));
// });
// server.listen(3000);
// console.log("Server starting");

// 14. ROUTING
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url === "/home" || req.url === "/") {
//     res.end("HOME");
//   } else if (req.url === "/about") {
//     res.end("ABOUT");
//   } else if (req.url === "/colors") {
//     const colors = {
//       first: "Red",
//       second: "Blue",
//       third: "Orange",
//     };
//     res.end(JSON.stringify(colors));
//   } else {
//     res.end("NOT FOUND");
//   }
// });
// server.listen(3000);
// console.log("Server started in port 3000...");

// 15.NPM (is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript run-time environment Node.js)
// A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer’s operating system in a consistent manner.
// So basically npm is a system what we can use to do different things with our codebase to manage properly.

// 16.EXPRESS (fast, simple, speedy, scalable)
// Frameworks help to write code easily and maintain a standard for the code. Needed when multiple team members work on the same code.
// Express: Easy routing system, use with many templating systems, middleware framework.

// A) CODE WITHOUT EXPRESS:
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url === "/home" || req.url === "/") {
//     res.end("HOME");
//   } else if (req.url === "/about") {
//     res.end("ABOUT");
//   } else if (req.url === "/colors") {
//     const colors = {
//       first: "Red",
//       second: "Blue",
//       third: "Orange",
//     };
//     res.end(JSON.stringify(colors));
//   } else {
//     res.end("NOT FOUND");
//   }
// });
// server.listen(3000);
// console.log("Server started in port 3000...");

// B) CODE WITH EXPRESS:
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("HOME");
// });

// app.get("/about", (req, res) => {
//   res.send("ABOUT");
// });

// app.get("/colors", (req, res) => {
//   const colors = {
//     first: "Red",
//     second: "Blue",
//     third: "Orange",
//   };
//   res.send(JSON.stringify(colors));
// });
// app.listen(3000);
// console.log("Server started in port 3000...");

// 17.HTTP METHODS (request we made to the server)
// GET – For getting data from server. app.get
// POST – For sending data to the server. app.post
// PUT – For updating data. app.put
// DELETE – For deleting data in server. app.delete

// REST API use this HTTP protocol to send data over computers (app.get, app.post, app.delete & app.put)

// 18.ROUTE PARAMETERS (req.params.id)
// app.get("/profile/:id", (req, res) => {
//   res.send(`${req.params.id}'s profile`);
// });

// 19.TEMPLATE ENGINES (EJS)
// Frontend template engine to do frontend while making the API
// Remember to npm i ejs
// A) app.set('view engine', 'ejs')
// B) create a views folder and inside a file.ejs
// C)
// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.get("/profile/:username", (req, res) => {
//   res.render("profile", { person: req.params.username });
// });
// app.listen(3000);
// console.log("Server started in port 3000");

// 20. EJS MULTIPLE DATA
// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.get("/profile/:username", (req, res) => {
//   const data = {
//     age: 25,
//     job: "Software Engineer",
//     hobbies: ["Photography", "Sketching"],
//   };
//   res.render("profile", { person: req.params.username, data: data });
// });
// app.listen(3000);
// console.log("Server started in port 3000");

// 21.NAVBAR AS PARTIALS (concept)
// create a partials folder inside views folder
// steps are in partials folder
// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.get("/profile/:username", (req, res) => {
//   const data = {
//     age: 25,
//     job: "Software Engineer",
//     hobbies: ["Photography", "Sketching"],
//   };
//   res.render("profile", { person: req.params.username, data: data });
// });
// app.listen(3000);
// console.log("Server started in port 3000");

// 22.STATIC FILES
// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.get("/profile/:username", (req, res) => {
//   const data = {
//     age: 25,
//     job: "Software Engineer",
//     hobbies: ["Photography", "Sketching"],
//   };
//   res.render("profile", { person: req.params.username, data: data });
// });
// app.listen(3000);
// console.log("Server started in port 3000");

// app.use("/assets", express.static("assets"));
