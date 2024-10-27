const express = require('express');
const controller = require("./../controllers/tags")
const authGuard = require('../middlewares/isAuthMiddleware')


const router = express.Router();

router.route("/create").post(authGuard,controller.addTag);
router.route("/:title").get(controller.getTagWithTitle);
router.route("/:id").delete(controller.deleteTag);
router.route("/").get(controller.getAllTags);
router.route("/articles/:slug").get(controller.getArticleTags);

module.exports = router;