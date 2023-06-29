import express from "express";

/**
 * It is possible to redirect to another path by using res.redirect(<path>)
 */

const server = express();

server.use("/first", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

/**
 * Whenever the path /second is called, it is redirected to /first
 */
server.use("/second", (req, res) => {
  res.redirect("/first");
});

server.listen(5000);
