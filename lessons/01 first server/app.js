/**
 * Server have a central file, which contains the entry point.
 * Normally that is app.ts or server.ts.
 * To run this application switch to this folder and run "npm app.js" from the console.
 * Now the server runs and should print the request information at the console
 */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
