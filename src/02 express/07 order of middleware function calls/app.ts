/**
 * When using middleware functions in express, it is important to understand, that the order of the provided middleware functions defines the order of its call.
 *
 */

import express from "express";

const server = express();

/**
 * Here the first middleware function will always run, as the path / always fits the filter.
 * By calling next, it ensures that at least the next middleware function is called.
 */
server.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

/**
 * This middleware function is called before the next one /second.
 * Which means whenever a request is already handled, e.g. the next route won't be called.
 * To force the call of the next middleware function, the function next has to be called.
 */
server.use("/first", (req, res, next) => {
  // next forces the call of the next middle ware
  next();
});

/**
 * This middleware function would only be called if next was called in the previous caller or no specified route was found before
 */
server.use("/second", () => {});

server.use(() => {});

server.listen(5000);
