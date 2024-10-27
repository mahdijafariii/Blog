const express = require('express');
const controller = require("./../controllers/tags")
const authGuard = require('../middlewares/isAdminMiddleware')


const router = express.Router();

router.route("/create").post(authGuard,controller.addTag);
router.route("/:title").get(controller.getTagWithTitle);
router.route("/:id").delete(controller.deleteTag);
router.route("/").get(controller.getAllTags);

module.exports = router;