const router = require("express").Router();
const apiProductRoutes = require("./apiProductRoutes");

router.use("/product", apiProductRoutes);

module.exports = router;
