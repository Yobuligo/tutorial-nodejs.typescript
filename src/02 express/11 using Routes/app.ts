/**
 * It is common to use routes, instead of writing all the server code in one file.
 * A route is responsible for handling the data of a specific type. E.g. cars or persons, products, etc.
 * Normally the routes are provided in a separate folder called routes.
 * The routes are added to the server like middleware
 */

import express from "express";
import carsRouter from "./routes/cars";
import personsRouter from "./routes/persons";

const server = express();
server.use(carsRouter);
server.use(personsRouter);
server.listen(5000);
