const controller = require('./controller');

const router = require('express').Router();

router.get('/', controller.getPost);
router.post('/new-post', controller.newPost);
router.put('/update-post/:id', controller.updatePost);
router.delete('/delete-post/:id', controller.deletePost);

module.exports = router;
