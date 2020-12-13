const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const validationErr = validationResult(req);

  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  const userData = await User.findOne({ email });

  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User already exists!!" }] });
  }

  const salt = await bcrypt.genSalt(10);

  const newPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword, // crypted password
  });

  await user.save();

  // TODO: Error handling for saving
  res.send("Register Completed");
};

exports.authLogin = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const validationErr = validationResult(req);

  // Field validation
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }

  // User exist check
  const userData = await User.findOne({ email });
  if (!userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User dosesn't exist!!" }] });
  }

  //Password compare
  const isPasswordMatch = await bcrypt.compare(password, userData.password);

  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ errors: [{ message: "Invalid credentials" }] });
  }
  //TODO authentaciation return Json web token  jwt
  res.send("Login completed");
};
