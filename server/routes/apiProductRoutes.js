const router = require("express").Router();
const productController = require("./../controllers/productController");

router.get("/",productController.getApiAll);
router.get("/:id",productController.getApiId);

module.exports = router;
