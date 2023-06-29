const http = require("http");
const express = require("express");

const app = express();

// can be used to handle a request
// has 3 parameters:
//      1. incoming request
//      2. response to be send
//      3. next function that can be called if I am not responsible for the request
app.use((req, res, next) => {
  console.log("first middleware");
  // allows the request to continue to the next middleware in line
  next();
});

app.use((req, res, next) => {
  console.log("second middleware");
});

const server = http.createServer(app);
server.listen(3000);
