"use strict";
/**
 * A server can list to post request. That is possible by using function post
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = (0, express_1.default)();
/**
 * This endpoint is called whenever a post request is send to /first
 */
server.post("/first", function (req, res) { });
server.listen(5000);
//# sourceMappingURL=app.js.map