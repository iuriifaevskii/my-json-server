const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/posts', postController.showPosts);

module.exports = router;