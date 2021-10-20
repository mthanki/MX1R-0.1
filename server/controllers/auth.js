const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const foundUser = await User.find({ username });

  if (foundUser.length) {
    res.status(400);
    throw new Error("Username already exists.");
  }

  const user = await User.create({
    username,
    password
  });

  if (!user) {
    res.status(400);
    throw new Error("Couldn't create user.");
  }

  const token = generateToken(user._id);
  const secondsInWeek = 604800;

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: secondsInWeek * 1000
  });

  res.status(200).json({
    user: {
      username: user.username,
    },
  });
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(200).json({
      user: {
        username: user.username,
      }
    });
  } else {
    res.status(401);
    throw new Error("Username or password is incorrect.");
  }
});

exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");

  res.status(205).json({
    message: "You have successfully logged out"
  });
});
