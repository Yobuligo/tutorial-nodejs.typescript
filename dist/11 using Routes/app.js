"use strict";
/**
 * It is common to use routes, instead of writing all the server code in one file.
 * A route is responsible for handling the data of a specific type. E.g. cars or persons, products, etc.
 * Normally the routes are provided in a separate folder called routes.
 * The routes are added to the server like middleware
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cars_1 = __importDefault(require("./routes/cars"));
var persons_1 = __importDefault(require("./routes/persons"));
var server = (0, express_1.default)();
server.use(cars_1.default);
server.use(persons_1.default);
server.listen(5000);
//# sourceMappingURL=app.js.map