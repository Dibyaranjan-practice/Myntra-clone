//package imports
const express = require("express");
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const cors = require("cors");
const app = express();

//route imports
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

//configs
require("dotenv").config();
require("ejs");
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const corsOptions = {
  origin: [process.env.ORIGIN, process.env.ORIGIN2],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use(
  "/product",
  upload.fields([
    {
      name: "imageUrl1",
    },
    {
      name: "imageUrl2",
    },
    {
      name: "imageUrl3",
    },
    {
      name: "imageUrl4",
    },
    {
      name: "imageUrl5",
    },
  ]),
  productRoutes
);
app.use("/", (req, res, next) => {
  res.status(400).render("404.ejs");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
