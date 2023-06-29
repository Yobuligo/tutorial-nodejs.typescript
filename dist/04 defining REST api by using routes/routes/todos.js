"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var todos = [];
router.get("/", function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post("/todo", function (req, res, next) {
    var body = req.body;
    var newTodo = { id: crypto.randomUUID(), text: body.text };
    todos.push(newTodo);
    res.status(201).json({ message: "Added todo", todo: newTodo, todos: todos });
});
router.put("/todo/:todoId", function (req, res, next) {
    var params = req.params;
    var body = req.body;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === params.todoId; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: params.todoId, text: body.text };
        return res.status(200).json({ message: "Updated todo", todos: todos });
    }
    res.status(404).json({ message: "todo not found" });
});
router.delete("/todo/:todoId", function (req, res, next) {
    var params = req.params;
    todos = todos.filter(function (todoItem) { return todoItem.id !== params.todoId; });
    res.status(200).json({ message: "Delete todo", todos: todos });
});
exports.default = router;
//# sourceMappingURL=todos.js.map