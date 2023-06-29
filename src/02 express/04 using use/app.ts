/**
 * The function use of an express server instance can be used for all http method types.
 * In addition you have variations of GET, POST, PUT, DELETE
 */
import express from "express";

const server = express();

/**
 * This endpoint will be listen to all http methods
 */
server.use(() => {});

/**
 * You can provide a path for that endpoint
 */
server.use("/cars", () => {});

/**
 * Instead you can define a more specific http type like GET, POST, PUT, DELETE
 *
 */
server.get("/cars", () => {});
server.post("/cars", () => {});
server.put("/cars", () => {});
server.delete("/cars", () => {});

server.listen(5000);
