/**
 * A route can be created by using function Router.
 * The router must be added as middleware in the app.ts
 */

import { Router } from "express";

const router = Router();

router.use("/add-cars", (req, res) => {
  res.send("<h1>handle cars</h1>");
});

export default router;
