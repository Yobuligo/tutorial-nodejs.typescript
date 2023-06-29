"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageRouter = void 0;
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
/**
 * A page can be send via using function sendFile on res
 */
exports.HomepageRouter = (0, express_1.Router)();
exports.HomepageRouter.get("/", function (req, res) {
    // we have to get the whole path of the file (and here by getting the project path)
    // by separating "views" and "homepage.html" we ensure that this works for Windows (which uses \ for separating folder) and Linux (which uses / for separating folders)
    res.sendFile(path_1.default.join(__dirname, "../../../src/02 express/13 adding HTML pages as views and send it as files", "views", "homepage.html"));
});
//# sourceMappingURL=homepage.js.map