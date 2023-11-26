const User = require("./../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getLogin = (req, res, next) => {
  return res.status(200).render("auth/Login.ejs", { error: false });
};
exports.postLogin = async (req, res, next) => {
  const [email, password] = [req.body.email, req.body.password];
  const user = await User.findByPk(email);
  if (!user) return res.render("auth/Login.ejs", { error: true });
  if (await bcrypt.compare(password, user.password)) {
    req.session.isLoggedIn = true;
    return res.render("Home.ejs");
  }
  return res.render("auth/Login.ejs", { error: true });
};

exports.getSignup = (req, res, next) => {
  return res.status(200).render("auth/Signup.ejs");
};
exports.postSignup = async (req, res, next) => {
  if (req.body.password != req.body.confirmpassword) {
    return res.status(200).render("auth/Signup.ejs", {
      error: "password and confirmpassword doesn't match",
    });
  }
  const user = await User.findByPk(req.body.email);
  if (user)
    return res.status(200).render("auth/Signup.ejs", {
      error: "email already exists",
    });
  User.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 12),
  })
    .then(() => {
      res.render("auth/Login.ejs", { error: false });
    })
    .catch(() => {
      res.status(200).render("auth/Signup.ejs", {
        error: "User creation failed",
      });
    });
};
exports.postClientLogIn = async (req, res, next) => {
  const user = await User.findByPk(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      let token = jwt.sign({ email: req.body.email }, process.env.JWTKEY);
      return res.status(200).json({ message: "success", token });
    }
  }
  return res.status(200).json({ message: "failed" });
};
exports.postClientSignUp = async (req, res, next) => {
  console.log("post client login");
  if (req.body.password != req.body.confirmpassword) {
    return res.status(200).json("password and confirm password should be same");
  }
  const user = await User.findByPk(req.body.email);
  if (user) return res.status(200).json("email already exists");
  User.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 12),
  })
    .then(() => {
      res.status(200).json("success");
    })
    .catch(() => {
      res.status(200).json("User creation failed");
    });
};
