import express from "express";
import { HomepageRouter } from "./routes/homepage";
/**
 * Next to React it is of course possible to implement own HTML pages and provide it by express.
 * The pages are stored in a separate folder "views"
 * The pages are then provided as files to the client (browser)
 */

const server = express();
server.use(HomepageRouter);
server.listen(5000);
