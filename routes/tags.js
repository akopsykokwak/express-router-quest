const express = require('express');
const tags = require('../data/tags');
const fakePosts = require('../data/posts');

const router = express.Router();

// Get a list of posts
router.get('/', (req, res) => {
  res.json(tags);
});

router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const filteredPosts = fakePosts.filter((post) => post.tag_ids.includes(tagId));
  res.json(filteredPosts);
});

module.exports = router;