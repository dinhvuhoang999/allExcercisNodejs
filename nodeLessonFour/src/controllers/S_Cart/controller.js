const { Blog } = require('../../models/');

module.exports = {
  getBlogList: async (req, res, next) => {
    try {
      const listBlog = await Blog.find({})
        .populate({
          path: 'userId',
          select: 'image username'
        })
        .lean();

      console.log('listBlog', listBlog);

      console.log(listBlog);
      return res.json({ listBlog });
    } catch (error) {
      next(error)
    }
  },
  createPost: async (req, res, next) => {
    try {
      const { title, description, image, userId } = req.body;

      const newPost = await Blog.create({
        title, description, image, userId
      });

      return res.json({ listBlog: newPost });
    } catch (error) {
      next(error)
    }
  }
}