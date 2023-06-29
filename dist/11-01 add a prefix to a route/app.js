"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cars_1 = require("./routes/cars");
/**
 * Sometimes I want to have use a prefix for specific routes.
 * Instead of always provide this prefix in each path, this prefix can be provided, when e.g. registering the middleware
 */
var server = (0, express_1.default)();
/**
 * Here are add the middleware function CarsRouter. Inside CarsRouter, there is no need to define the prefix /api for each path.
 * Instead I can provide that prefix once, when adding the route, which would make it easier when changing the prefix
 */
server.use("/api", cars_1.CarsRouter);
server.listen(5000);
//# sourceMappingURL=app.js.map