import express from "express";

import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

// software intermedio
app.use(express.json());

// rutas
app.use("/", indexRouter);
app.use("*", (req, res) => {
  res.send("404 - not found");
});

// inicia servidor
app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});

// conecta a la base de datos
db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
