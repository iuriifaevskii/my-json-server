const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/posts', postController.showPosts);
router.get('/posts/:id', postController.showSinglePosts);
router.get('/posts/:id/comments', postController.showCommentsByPost);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.changePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;