module.exports = {
  getPost: (req, res, next) => {
    try {
      res.json({ messenger: 'getPost' })
    } catch (error) {
      next(error);
    }
  },
  newPost: (req, res, next) => {
    try {
      res.json({ messenger: 'new post' })
    } catch (error) {
      next(error);
    }
  },
  updatePost: (req, res, next) => {
    try {
      res.json({ messenger: 'update post' })
    } catch (error) {
      next(error);
    }
  },
  deletePost: (req, res, next) => {
    try {
      res.json({ messenger: 'delete post' })
    } catch (error) {
      next(error);
    }
  }
}