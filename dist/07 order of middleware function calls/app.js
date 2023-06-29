"use strict";
/**
 * When using middleware functions in express, it is important to understand, that the order of the provided middleware functions defines the order of its call.
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = (0, express_1.default)();
/**
 * Here the first middleware function will always run, as the path / always fits the filter.
 * By calling next, it ensures that at least the next middleware function is called.
 */
server.use("/", function (req, res, next) {
    console.log("This always runs!");
    next();
});
/**
 * This middleware function is called before the next one /second.
 * Which means whenever a request is already handled, e.g. the next route won't be called.
 * To force the call of the next middleware function, the function next has to be called.
 */
server.use("/first", function (req, res, next) {
    // next forces the call of the next middle ware
    next();
});
/**
 * This middleware function would only be called if next was called in the previous caller or no specified route was found before
 */
server.use("/second", function () { });
server.use(function () { });
server.listen(5000);
//# sourceMappingURL=app.js.map