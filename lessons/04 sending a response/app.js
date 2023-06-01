/**
 * This example shows how to send some html as response
 * Here are some more information about headers and their role: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>Hello World</body></html>");
  res.end();
});

server.listen(3000)