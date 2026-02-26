// Temporary dummy posts (acts like database)
const posts = [
  { id: 1, title: "Hello World" },
  { id: 2, title: "Learning Express" }
];

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};

// GET /api/v1/posts/:id
const getPostById = (req, res) => {
  const postId = parseInt(req.params.id);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      error: {
        message: "Post not found"
      }
    });
  }

  res.status(200).json({
    success: true,
    data: {
      post: post
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById
};