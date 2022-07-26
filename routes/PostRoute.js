const express = require('express');
const PostController = require('../controllers/PostController');
const authorize=require('../middlewares/AuthMiddleware')

const router = express.Router();

router.get('/',authorize,PostController.getAllPosts)
router.post('/',authorize,PostController.addPost)
router.delete('/',authorize,PostController.removePost)
router.put('/',authorize,PostController.updatePost)

module.exports = router;