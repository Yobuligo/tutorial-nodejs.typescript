"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homepage_1 = require("./routes/homepage");
/**
 * Next to React it is of course possible to implement own HTML pages and provide it by express.
 * The pages are stored in a separate folder "views"
 * The pages are then provided as files to the client (browser)
 */
var server = (0, express_1.default)();
server.use(homepage_1.HomepageRouter);
server.listen(5000);
//# sourceMappingURL=app.js.map