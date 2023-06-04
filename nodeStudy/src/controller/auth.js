module.exports = {
  login: (req, res, next) => {
    try {
      const checkLogin = 'isLogin';

      return res.json({ checkLogin })
    } catch (error) {
      console.log(error);
    }
  }
}