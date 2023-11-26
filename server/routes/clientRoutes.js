const router = require("express").Router();
const clientAuthRoutes = require("./client/clientAuthRoutes");

router.use("/auth", clientAuthRoutes);
module.exports = router;
