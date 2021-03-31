const express = require("express");
const { Student } = require("../models/");

const app = express();

app.get("/", async (req, res) => {
  console.log("student model", Student);
  const student = await Student.find({}, "-name -score").populate("classRoom", "-__v")
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/:id", async (req, res) => {
  console.log("student model", Student);
  const student = await Student.findById(req.params.id);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  console.log("post student", student);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = app;
