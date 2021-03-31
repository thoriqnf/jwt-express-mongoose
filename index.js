const express = require("express");
const cors = require("cors");
const app = express();

// port
const { PORT, dbConfigMongo } = require("./config");
const localPort = PORT || 3000;
console.log("ini port", localPort);

// controller
const routes = require("./routes");

// console.log(studentRouter);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("halo");
});

// route
app.use(routes);

if (dbConfigMongo) {
  app.listen(PORT, () => {
    console.log("server running on port", PORT);
    console.log("konek mongo");
  });
} else {
  console.log("belum konek db mongo");
}
