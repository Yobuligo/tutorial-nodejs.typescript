"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function use of an express server instance can be used for all http method types.
 * In addition you have variations of GET, POST, PUT, DELETE
 */
var express_1 = __importDefault(require("express"));
var server = (0, express_1.default)();
/**
 * This endpoint will be listen to all http methods
 */
server.use(function () { });
/**
 * You can provide a path for that endpoint
 */
server.use("/cars", function () { });
/**
 * Instead you can define a more specific http type like GET, POST, PUT, DELETE
 *
 */
server.get("/cars", function () { });
server.post("/cars", function () { });
server.put("/cars", function () { });
server.delete("/cars", function () { });
server.listen(5000);
//# sourceMappingURL=app.js.map