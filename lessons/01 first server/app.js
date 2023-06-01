/**
 * Server have a central file, which contains the entry point.
 * Normally that is app.ts or server.ts.
 * To run this application switch to this folder and run "npm app.js" from the console.
 * Now the server runs and should print the request information at the console
 */

const http = require("http");

/**
 * This creates a server and by handing over the anonymous function the server will run permanently
 * When accessing the server via browser by calling localhost:3000 the anonymous function is called.
 */
const server = http.createServer((req, res) => {
  // This code is always called, when the key F5 is pressed within a browser.
  console.log(req);
});

server.listen(3000);
