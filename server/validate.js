const { check, validationResult } = require("express-validator");

exports.validateRegister = [
  check("username", "Username is required and can be within 3 - 10 characters only.")
    .isLength({ min: 3, max: 10 }),
  check("password", "Password needs 8 characters.")
    .isLength({ min: 8, }),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check("username", "Username is required.").not().isEmpty(),
  check("password", "Password is required.").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
