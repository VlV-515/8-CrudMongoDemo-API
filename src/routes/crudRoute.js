const express = require("express");
const router = express.Router();
const crudSchema = require("../models/crudModel");
//Create
router.post("/", (req, res) => {
  crudSchema(req.body)
    .save()
    .then(() => res.status(200).json({ msg: "ok" }))
    .catch(() => res.status(400).json({ msg: "Error al insertar un usuario" }));
});
//Read All
router.get("/", (req, res) => {
  crudSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch(() => res.status(400).json({ msg: "Error al consultar todos los usuarios." }));
});
//Read One
router.get("/:id", (req, res) => {
  const { id } = req.params;
  crudSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch(() => res.status(400).json({ msg: "Error obteniendo un usuario." }));
});
//Update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, pass, name, lastname, email, role, dateIn } = req.body;
  crudSchema
    .updateOne(
      { _id: id },
      { username, pass, name, lastname, email, role, dateIn }
    )
    .then(() => res.status(200).json({ msg: "ok" }))
    .catch(() => res.status(400).json({ msg: "Error editando el usuario" }));
});
//Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  crudSchema
    .deleteOne({ _id: id })
    .then(() => res.status(200).json({ msg: "ok" }))
    .catch(() => res.status(400).json({ msg: "Error eliminando usuario" }));
});

module.exports = router;
