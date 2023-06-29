"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.use("/add-persons", function (req, res) {
    res.send("<h1>handle persons</h1>");
});
exports.default = router;
//# sourceMappingURL=persons.js.map