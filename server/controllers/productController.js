const Product = require("./../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("product/addProduct.ejs");
};
exports.postAddProduct = (req, res, next) => {
  console.log("working");
  Product.create({
    imageUrl1: req.files["imageUrl1"][0].filename,
    imageUrl2: req.files["imageUrl2"][0].filename,
    imageUrl3: req.files["imageUrl3"][0].filename,
    imageUrl4: req.files["imageUrl4"][0].filename,
    imageUrl5: req.files["imageUrl5"][0].filename,
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

//api handlers
exports.getApiAll = async (req, res, next) => {
  const products = await Product.findAll();
  return res.json(products);
};
