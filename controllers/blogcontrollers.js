const Blog = require('../models/blogs');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('home', { blogs: result, title: 'All Blogs' });
        })
        .catch((err) => console.log(err));
};

const blog_allblogs = (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_singleblogs = (req, res) => {
    Blog.findById('656e2685a89679f8d2155df9')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_getid = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: result.title });
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_deleteid = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { blog_allblogs, blog_deleteid, blog_getid, blog_index, blog_post, blog_singleblogs };
