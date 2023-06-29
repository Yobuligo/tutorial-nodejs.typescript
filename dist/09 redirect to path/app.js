"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
/**
 * It is possible to redirect to another path by using res.redirect(<path>)
 */
var server = (0, express_1.default)();
server.use("/first", function (req, res) {
    res.send("<h1>Hello World</h1>");
});
/**
 * Whenever the path /second is called, it is redirected to /first
 */
server.use("/second", function (req, res) {
    res.redirect("/first");
});
server.listen(5000);
//# sourceMappingURL=app.js.map