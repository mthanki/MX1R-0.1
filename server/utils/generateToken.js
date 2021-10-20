const jwt = require("jsonwebtoken");

const generateToken = id => jwt.sign
  (
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "100d" }
  );

module.exports = generateToken;
