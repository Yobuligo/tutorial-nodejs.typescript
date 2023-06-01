/**
 * The following example shows how to send a response to the client when requesting the url "/".
 * Here an HTML is returned, that contains of an input field and a button. Whenever the button is clicked, the entered value is send to the server via url "/message".
 * Whenever know a request arrived at "/message" the body of the request is read via chunks and buffer.
 * Req.on provides specific events here for reading chunks. The chunks are printed to the console, as well as the concatenated body.
 * The chunks seems the be ASCII and the Buffer converts it to the correct symbol.
 * At the end the provided content (the message) is written to a file "message.txt".
 */

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }

    if (req.url === "/message" && req.method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split("=")[1];
        fs.writeFileSync("message.txt", message);
      });

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }

    res.setHeader("Content-Type", "text/html");
  })
  .listen(3000);
