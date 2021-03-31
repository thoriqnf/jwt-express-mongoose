const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router()

const { Student } = require('../models');

router.post("/register", async (req, res) => {
  const user = req.body

  const hashPassword = await bcrypt.hash(user.password, 10);
  if (!hashPassword) throw new Error("error hash password")

  const student = await Student.create({
    name: user.name,
    password: hashPassword
  })

  res.json({
    message: "user berhasil di buat",
    data: student
  })
})

router.post("/login", async (req, res) => {
  // data dari user
  const { name, password } = req.body

  // ambil data dari DB
  let user = await Student.findOne({ name })

  // cek apakah adanya ada dan passwordnya sama
  if (user && bcrypt.compareSync(password, user.password)) {
    user = user.toObject()
    const {password, ...payload} = user

    // buat token
    const token = jwt.sign(payload, "inirahasia")
    res.json({
      message: "login success",
      token
    })
  } else {
    res.json({
      message: "invalid email and password"
    })
  }
})

module.exports = router