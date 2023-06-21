/**
 * The following example shows how to get some specific details from a request
 */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
});

server.listen(3000);
