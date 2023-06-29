import express from "express";
import { CarsRouter } from "./routes/cars";
/**
 * Sometimes I want to have use a prefix for specific routes.
 * Instead of always provide this prefix in each path, this prefix can be provided, when e.g. registering the middleware
 */

const server = express();

/**
 * Here are add the middleware function CarsRouter. Inside CarsRouter, there is no need to define the prefix /api for each path.
 * Instead I can provide that prefix once, when adding the route, which would make it easier when changing the prefix
 */
server.use("/api", CarsRouter);
server.listen(5000);
