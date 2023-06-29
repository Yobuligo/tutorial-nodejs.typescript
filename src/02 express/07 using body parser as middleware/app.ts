/**
 * By sending request, often data are send via body of a http request.
 * The data are often provided e.g. via json or another format.
 * To note convert the types by yourself the body-parser package can be used.
 *
 * Here it is important that the body-parser middleware must be provided before the other middleware. Otherwise it wouldn't be possible to take advantage of it.
 */

import bodyParser from "body-parser";
import express from "express";

const server = express();

/**
 * The method urlencoded has to be called to submit data from a form, how it is done below
 */
server.use(bodyParser.urlencoded({extended:false}));

/**
 * Here we have a middleware function that provides some HTML to add a product.
 * When clicking the button a POST request is send to the endpoint /product
 */
server.use("/add-product", (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'
  );
});

/**
 * This it the definition of the endpoint /product.
 * Here we want to get the data of the body, which are only available if we added the middleware of bodyParser.json() at the beginning of the server.
 */
server.use("/product", (req, res) => {
  console.log(req.body);
});

server.listen(5000);
