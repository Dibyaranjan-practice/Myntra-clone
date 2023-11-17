const Product = require("./../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("product/addProduct.ejs");
};
exports.postAddProduct = (req, res, next) => {
  Product.create({
    imageUrl: req.body.imageUrl,
    originalPrice: req.body.originalPrice,
    currentPrice: req.body.currentPrice,
    ratingStar: req.body.ratingStar,
    ratingCount: req.body.ratingCount,
    brand: req.body.brand,
    description: req.body.description,
    specialMessage: req.body.specialMessage,
    UserEmail: "selfstudyhack@gmail.com",
  })
    .then(() => {
      console.log("Product Created successfully");
    })
    .catch((error) => console.log("error occured" + error));
  res.render("product/addProduct.ejs");
};
