import { Router } from "express";
import { ITodo } from "../model/ITodo";

const router = Router();

let todos: ITodo[] = [];

type RequestBody = { text: string };
type RequestParams = { todoId: string };

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: ITodo = { id: crypto.randomUUID(), text: body.text };
  todos.push(newTodo);
  res.status(201).json({ message: "Added todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params: RequestParams = req.params;
  const body: RequestBody = req.body;
  const todoIndex = todos.findIndex(
    (todoItem) => todoItem.id === params.todoId
  );
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: params.todoId, text: body.text };
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }

  res.status(404).json({ message: "todo not found" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params: RequestParams = req.params;
  todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
  res.status(200).json({ message: "Delete todo", todos: todos });
});

export default router;
