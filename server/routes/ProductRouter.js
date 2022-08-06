const router = require("express").Router();
const ProductController = require("../controller/ProductController");

router.get("/", ProductController.findAll);

module.exports = router;
