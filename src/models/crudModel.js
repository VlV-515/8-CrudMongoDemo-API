const mongoose = require("mongoose");
const crudSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  dateIn: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("crudSchema", crudSchema);
