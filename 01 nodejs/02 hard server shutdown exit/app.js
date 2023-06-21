
const http = require("http");

/**
 * By calling method "exit" on object "process", the server is shutdown hard.
 */
const server = http.createServer((req, res) => {

  // this will stop the server immediately (a hard exit or stop)
  process.exit();
});

server.listen(3000);
