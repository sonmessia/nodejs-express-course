const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

const authenticateUser = require("../middleware/auth");

router.route("/dashboard").get(authenticateUser, dashboard);
router.route("/login").post(login);

module.exports = router;
