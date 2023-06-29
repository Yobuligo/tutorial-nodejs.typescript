/**
 * The method send of a router can be used to send e.g. text or json.
 * The content type is automatically set to "text/html" e.g. or "application/json". Depending on your data. That is done by express
 *
 * This information can be get within the browser, by opening the developer tools with F12 -> choosing network -> selecting the called endpoint -> and all details are displayed
 */

import bodyParser from "body-parser";
import express, { Router } from "express";

const router = Router();

/**
 * This endpoint sends a text and the content type is automatically set text/html
 */
router.get("/text", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

/**
 * This endpoint sends a text and the content type is automatically set application/json
 */
router.get("/json", (req, res) => {
  res.send({ message: "Hello World" });
});

const server = express();
server.use(bodyParser.json());
server.use(router);
server.listen(5000);
