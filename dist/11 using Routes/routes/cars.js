"use strict";
/**
 * A route can be created by using function Router.
 * The router must be added as middleware in the app.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.use("/add-cars", function (req, res) {
    res.send("<h1>handle cars</h1>");
});
exports.default = router;
//# sourceMappingURL=cars.js.map