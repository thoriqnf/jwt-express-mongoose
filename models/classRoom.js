const mongoose = require("mongoose");

const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lantai: Number,
});

const ClassRoom = mongoose.model("classRoom", ClassRoomSchema);
module.exports = ClassRoom;
