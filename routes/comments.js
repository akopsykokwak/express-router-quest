const express = require('express');
const router = express.Router({mergeParams: true});

const fakeComments = require('../data/comments');

// Get a list of comments
router.get('/', (req, res) => {
  const postId = Number(req.params.postId);
  const foundComments = fakeComments.filter((comment) => comment.post_id === postId)
  res.json(foundComments);
});


module.exports = router;