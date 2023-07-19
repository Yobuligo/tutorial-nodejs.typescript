"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
/**
 * The following example shows how to access a query parameter.
 */
var server = (0, express_1.default)();
server.use("/firstname", function (req, res, next) {
    var firstname = req.query.firstname;
    if (!firstname) {
        return next();
    }
    var lastname = req.query.lastname;
    if (!lastname) {
        return next();
    }
    res.send("Works the firstname is ".concat(firstname, " and lastname is ").concat(lastname));
});
server.use("/", function (req, res) {
    res.status(404).send("<h1>Unknown Request</h1>");
});
server.listen(5000);
//# sourceMappingURL=app.js.map