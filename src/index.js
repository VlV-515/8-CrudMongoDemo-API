const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Connection DB
mongoose
  .connect(process.env.URL_API)
  .then(() => console.log("Conectado a DB"))
  .catch(() => console.log("Error conectando a DB"));

//Middleware
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Index Route. Hello =)");
});

app.listen(port, () => {
  console.log("Server Ready");
});
