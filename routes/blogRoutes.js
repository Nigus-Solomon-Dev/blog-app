const express = require('express');
const Blogcontroller = require('../controllers/blogcontrollers');
const router = express.Router();

router.get('/', Blogcontroller.blog_index);
router.get('/create', (req, res) => res.render('create', { title: 'New Post' }));
router.get('/all-blogs', Blogcontroller.blog_allblogs);
router.get('/single-blogs', Blogcontroller.blog_singleblogs);
router.post('/', Blogcontroller.blog_post);
router.get('/:id', Blogcontroller.blog_getid);
router.delete('/:id', Blogcontroller.blog_deleteid);

module.exports = router;
