const express = require('express');
const app = express();

const postRouter = require('./routes/posts.routes');

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Blogify API"
  });
});

// Posts routes
app.use('/api/v1/posts', postRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});