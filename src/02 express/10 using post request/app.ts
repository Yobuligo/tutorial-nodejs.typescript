/**
 * A server can list to post request. That is possible by using function post
 */

import express from "express";

const server = express();

/**
 * This endpoint is called whenever a post request is send to /first
 */
server.post("/first", (req, res) => {});

server.listen(5000);
