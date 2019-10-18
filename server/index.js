const express = require("express");
const controller = require("./controller");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database connected");
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getProducts);
// app.put("./api/products/:id", controller.add);

app.listen(SERVER_PORT, () =>
  console.log(`server listening on port ${SERVER_PORT}`)
);
