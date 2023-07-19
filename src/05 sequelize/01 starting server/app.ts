/**
 * The following example shows how to start a server when using sequelize
 * It is a simple alternative to the normal start of a server
 * For Sequelize it is important to sync the data model so that all tables are created.
 * Either the sync has to be called somewhere when starting the server OR an alternative is to start the server only when the sync was completed successfully
 *
 * Alternatively it is possible to call sync on each model
 */

import express from "express";
import { Sequelize } from "sequelize";

// Define your sequelize connection
const db = new Sequelize({ host: "localhost" });

const startServer = async () => {
  try {
    const server = express();
    await db.sync();

    // the server is only started, when the initialization or synchronization of the db was successfully completed
    server.listen(5000);
  } catch (error) {
    console.log(error);
  }
};

// Call start server. Wrapped in a separate function as the call as asynchronously
startServer();
