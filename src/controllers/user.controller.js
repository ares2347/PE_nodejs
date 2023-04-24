const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.list = async (req, res) => {
  let users = await User.find();
  res.render("list", {
    users: users
  });
};
exports.create = async (req, res) => {
  let existedUser = await User.findOne({ username: req.body.username });
  let existedPhoneNo = await User.findOne({ phone: req.body.phone });
  if (existedUser) {
    return res.send("User existed!");
  }
  if (existedPhoneNo) {
    return res.send("Phone number existed!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  //save to db
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    username: req.body.username,
    passwordHash: hash,
  });
  try {
    await User.create(newUser);
    return res.redirect("./list");
  } catch (err) {
    return res.send(err);
  }
};
exports.add = async (req, res) => {
  res.render("add");
};
