import { Router } from "express";
import { ITodo } from "../model/ITodo";

const router = Router();

let todos: ITodo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: ITodo = { id: crypto.randomUUID(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({ message: "Added todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todoId, text: req.body.text };
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }

  res.status(404).json({ message: "todo not found" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(200).json({ message: "Delete todo", todos: todos });
});

export default router;
