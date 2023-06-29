"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appPath = void 0;
var path_1 = __importDefault(require("path"));
var error = function () {
    throw new Error();
};
exports.appPath = path_1.default.dirname((_b = (_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : error());
//# sourceMappingURL=path.js.map