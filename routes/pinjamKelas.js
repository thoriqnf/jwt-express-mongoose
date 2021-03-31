const express = require('express');
const router = express.Router()

const {PinjamKelas} = require('../models');

router.get("/", async (req, res) => {
  const pinjam = await PinjamKelas.find({}).populate("peminjam")

  console.log("dari get /pinjam", req.payload);

  res.json({
    message: "success get data",
    data: pinjam
  })
})

router.post("/", async (req, res) => {
  const pinjam = await PinjamKelas.create(req.body)

  res.json({
    message: "success create data",
    data: pinjam
  })
})

module.exports = router