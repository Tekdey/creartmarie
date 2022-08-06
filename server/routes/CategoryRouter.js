const router = require("express").Router();
const CategoryController = require("../controller/CategoryController");

router.get("/", CategoryController.findAll);

module.exports = router;
