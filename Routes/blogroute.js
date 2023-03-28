const express = require('express');
const blogController = require('../controllers/blogControllers');

const router = express.Router();
//  Here we extracting the blogController methods..........

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;