/**
 * As the middleware is called in the order it is provided an error page can be easily added as last middleware.
 * This means whenever a request was handled before, fine. If no middleware handled a request an error can be provided.
 * 
 * It is also possible to provide an HTML page that contains the whole error information.
 * How to send an HTML page as error page see the following chapter.
 */

import express from "express";

const server = express();

server.use("/persons", (req, res) => {
  res.send("<h1>Here are my persons</h>");
});

/**
 * This middleware function is listening to all incoming request (as the path is empty and therefore /) and it is listening for all incoming http methods.
 * So if no middleware was able to handle the request provide an error
 */
server.use((req, res) => {
  res.status(404).send("<h1>Unknown Request</h1>");
});

server.listen(5000);
