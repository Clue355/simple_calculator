const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.DB_Link, { useNewUrlParser: true }, () => console.log("mongodb connected"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
