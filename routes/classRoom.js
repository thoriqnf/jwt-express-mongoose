const express = require('express');
const router = express.Router()

const {ClassRoom} = require('../models');

router.get("/", async (req, res) => {
  const classRoom = await ClassRoom.find()

  res.json({
    message: "success get data",
    data: classRoom
  })
})

router.post("/", async (req, res) => {
  const classRoom = await ClassRoom.create(req.body)

  res.json({
    message: "success create data",
    data: classRoom
  })
})

module.exports = router