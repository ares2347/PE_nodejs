const express = require("express");
const userController = require("../controllers/user.controller");

let router = express.Router();

router.get("/add", userController.add);
router.post("/create", userController.create);
router.get("/list", userController.list);


module.exports = router;