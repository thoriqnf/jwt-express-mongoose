const mongoose = require("mongoose");

const PinjamKelasSchema = new mongoose.Schema({
  peminjam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "murid"
  },
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classRoom"
  }
});

const PinjamKelas = mongoose.model("pinjam_kelas", PinjamKelasSchema);
module.exports = PinjamKelas;
