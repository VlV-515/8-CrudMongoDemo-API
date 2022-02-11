const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const crudRoute = require('./routes/crudRoute')
require("dotenv").config();

//Connection DB
mongoose
  .connect(process.env.URL_API)
  .then(() => console.log("Conectado a DB"))
  .catch(() => console.log("Error conectando a DB"));

//Middleware
app.use(express.json());
app.use(cors());
app.use('/crud',crudRoute)


app.get("/", function (req, res) {
  res.send("Index Route. Hello =)");
});

app.listen(port, () => {
  console.log("Server Ready");
});
