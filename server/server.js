//package imports
const express = require("express");
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

//route imports
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

//configs
require("dotenv").config();
require("ejs");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/assets/images");
    },
    filename: (req, file, cb) => {
      cb(null, crypto.randomUUID() + file.originalname);
    },
  }),
});

//route handlers
app.use("/auth", authRoutes);
app.use(
  "/product",
  upload.fields([{ name: "image1" }, { name: "image2" },{name:"image3"},{name:"image4"},{name:"image5"}]),
  productRoutes
);
app.use("/", (req, res, next) => {
  res.status(400).render("404.ejs");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
