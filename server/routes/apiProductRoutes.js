const router = require("express").Router();
const productController = require("./../controllers/productController");

router.get("/",productController.getApiAll);

module.exports = router;
