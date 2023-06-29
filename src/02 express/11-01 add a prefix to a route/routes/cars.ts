import { Router } from "express";

export const CarsRouter = Router();
CarsRouter.get("/cars", (req, res) => {
  res.send("<h1>Handle Cars</h1>");
});
