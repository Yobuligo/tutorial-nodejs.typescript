/**
 * When using middleware in express, it is important to understand, that the order of the provided middleware defines the order it is called.
 *
 */

import express from "express";

const server = express();

/**
 * This middleware is called before the next one /second.
 * Which means whenever a request is already handled, e.g. the next route won't be called.
 * To force the call of the next middleware, the function next has to be called.
 */
server.use("/first", (req, res, next) => {
  // next forces the call of the next middle ware
  next();
});

/**
 * This middleware would only be called if next was called in the previous caller or no specified route was found before
 */
server.use("/second", () => {});

server.listen(5000);
