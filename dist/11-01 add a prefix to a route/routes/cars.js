"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRouter = void 0;
var express_1 = require("express");
exports.CarsRouter = (0, express_1.Router)();
exports.CarsRouter.get("/cars", function (req, res) {
    res.send("<h1>Handle Cars</h1>");
});
//# sourceMappingURL=cars.js.map