const express = require('express');
const controller = require("./../controllers/auth")

const router = express.Router();

router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/refresh").post(controller.refresh);
router.route("/me").post(controller.me);
router.route("/logout").post(controller.logout);

module.exports = router;