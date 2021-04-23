const express = require('express');
const blogs = require('./../model/schema');
const router = express.Router();

router.get('/', async (req, res) => {
  const blog = await blogs.find().sort({ createdAt: 'desc' });
  res.json(blog);
})


router.get('/:id', async (req, res) => {
  let blog = await blogs.findById(req.params.id);
  res.json([blog]);
})

router.post('/add', async(req, res, next) => {
  let blog = new blogs({
    title: req.body.title,
    categories: req.body.categories,
    content: req.body.content
  })

  try {
    blog = await blog.save();
  } catch (err) {
    console.log(err);
  }
})

router.post('/edit/:id', async (req, res) => {
  let temp_blog = await blogs.findById(req.params.id);
  temp_blog.title = req.body.title;
  temp_blog.categories = req.body.categories;
  temp_blog.content = req.body.content;
  temp_blog.createdAt = new Date();
  try {
    temp_blog = await temp_blog.save();
  } catch (err) {
    console.log(err);
  }
})

router.get('/upvote/:id', async(req, res) => {
  let temp_blog = await blogs.findById(req.params.id);
  temp_blog.upVotes = temp_blog.upVotes + 1;
  res.send('done');
  try {
    temp_blog = await temp_blog.save();
  } catch (err) {
    console.log(err);
  }
})

router.get('/downvote/:id', async(req, res) => {
  let temp_blog = await blogs.findById(req.params.id);
  temp_blog.downVotes = temp_blog.downVotes + 1;
  res.send('done');
  try {
    temp_blog = await temp_blog.save();
  } catch (err) {
    console.log(err);
  }
})

router.get('/delete/:id', async (req, res) => {
  await blogs.findByIdAndDelete(req.params.id);
})

module.exports = router;
