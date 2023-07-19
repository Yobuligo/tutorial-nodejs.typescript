"use strict";
/**
 * Often it is required to get the main path of the application.
 * This can be achieved by the following helper function.
 * Helper functions are located in a separate folder utils
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = require("./utils/path");
var server = (0, express_1.default)();
server.use("/", function () {
    console.log(path_1.appPath);
});
server.listen(5000);
//# sourceMappingURL=app.js.map