/**
 * Often it is required to get the main path of the application.
 * This can be achieved by the following helper function.
 * Helper functions are located in a separate folder utils
 */

import express from "express";
import { appPath } from "./utils/path";

const server = express();
server.use("/", () => {
  console.log(appPath);
});
server.listen(5000);
