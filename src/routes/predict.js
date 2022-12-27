const express = require('express');
const multer = require('multer');

const { predictFromImage } = require('../controllers/predict');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), predictFromImage);

module.exports = router;
