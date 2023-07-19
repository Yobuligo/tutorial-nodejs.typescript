import express from "express";

/**
 * The following example shows how to access a query parameter.
 */
const server = express();
server.use("/firstname", (req, res, next) => {
  const firstname = req.query.firstname;
  if (!firstname) {
    return next();
  }

  const lastname = req.query.lastname;
  if (!lastname) {
    return next();
  }
  res.send(`Works the firstname is ${firstname} and lastname is ${lastname}`);
});

server.use("/", (req, res) => {
  res.status(404).send("<h1>Unknown Request</h1>");
});
server.listen(5000);
