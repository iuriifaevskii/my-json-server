const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/posts', postController.showPosts);
router.post('/posts', postController.createPost);

module.exports = router;