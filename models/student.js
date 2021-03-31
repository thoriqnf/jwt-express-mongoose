const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classRoom"
  },
});

const Student = mongoose.model("murid", StudentSchema);
module.exports = Student;
