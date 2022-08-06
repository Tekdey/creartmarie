const router = require("express").Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.findAll);

module.exports = router;
