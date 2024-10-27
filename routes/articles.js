const express = require('express');
const controller = require('../controllers/article')
const router = express.Router();
const multer = require('multer');
const path = require('path')
const isAdminMiddleware = require('../middlewares/isAdminMiddleware')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../public/images/covers"));
    },

    filename: (req, file, cb) => {
        const filename = `${file.originalname}-${Date.now()}${path.extname(
            file.originalname
        )}`;

        cb(null, filename);
    },
});
const fileFilter = (req, file, cb) => {
    const validFileTypes = /jpeg|jpg|png/;
    const mimeType = validFileTypes.test(file.mimetype);
    const extName = validFileTypes.test(path.extname(file.originalname));
    if (mimeType && extName) {
        return cb(null, true);
    }
    return cb(new Error("File type not supported !"));
};

const uploader = multer({
    storage,
    fileFilter,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
});

router.route('/').get(controller.getAll);
router.route('/').post(isAdminMiddleware,uploader.single('cover'),controller.create);
router.route('/:slug').get(controller.getBySlug);
router.route('/remove/:id').post(controller.remove);

module.exports = router;