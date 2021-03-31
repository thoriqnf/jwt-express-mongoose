const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
  if (!header) {
    res.json({
      message: "undefined header"
    })
  }

  const token = header.split(" ")[1]

  if (!token) throw new Error("invalid token")

  const payload = jwt.verify(token, "inirahasia")

  req.payload = payload

  next()
}

module.exports = verifyToken