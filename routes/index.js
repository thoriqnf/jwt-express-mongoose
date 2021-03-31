const express = require('express');
const router = express.Router()

const classRoomRouter = require('./classRoom');
const pinjamKelasRouter = require('./pinjamKelas');
const StudentRouter = require('./StudentController');
const authRouter = require('./auth');
const verifyToken = require('../middleware/authorization');

router.use("/class", classRoomRouter);
router.use("/pinjam", verifyToken, pinjamKelasRouter);
router.use("/student", StudentRouter);
router.use("/auth", authRouter)

module.exports = router