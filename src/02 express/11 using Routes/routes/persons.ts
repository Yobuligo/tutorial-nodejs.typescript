import { Router } from "express";

const router = Router();

router.use("/add-persons", (req, res) => {
  res.send("<h1>handle persons</h1>");
});

export default router;
