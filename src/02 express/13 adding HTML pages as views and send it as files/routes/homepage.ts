import { Router } from "express";
import path from "path";

/**
 * A page can be send via using function sendFile on res
 */

export const HomepageRouter = Router();
HomepageRouter.get("/", (req, res) => {
  // we have to get the whole path of the file (and here by getting the project path)
  // by separating "views" and "homepage.html" we ensure that this works for Windows (which uses \ for separating folder) and Linux (which uses / for separating folders)
  res.sendFile(path.join(__dirname, "../../../src/02 express/13 adding HTML pages as views and send it as files", "views", "homepage.html"));
});
