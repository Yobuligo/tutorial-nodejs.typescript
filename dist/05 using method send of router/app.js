"use strict";
/**
 * The method send of a router can be used to send e.g. text or json.
 * The content type is automatically set to "text/html" e.g. or "application/json". Depending on your data. That is done by express
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importStar(require("express"));
var router = (0, express_1.Router)();
/**
 * This endpoint sends a text and the content type is automatically set text/html
 */
router.get("/text", function (req, res) {
    res.send("<h1>Hello World</h1>");
});
/**
 * This endpoint sends a text and the content type is automatically set application/json
 */
router.get("/json", function (req, res) {
    res.send({ message: "Hello World" });
});
var server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(router);
server.listen(5000);
//# sourceMappingURL=app.js.map