const data = [{
  name: "aasssssssa",
  quantity: 212,
  color: ["red", "blue"],
  image: "https://picsum.photos/200/300",
  categories: [{
    tShirtA: "id2322456",
    tShirtB: "id2122123",
    tShirtC: "id1221786"
  }]
}]

module.exports = {
  getTShirts: (req, res, next) => {
    try {
      return res.json({ messenger: 'get all success', data })
    } catch (error) {
      next(error);
    }
  },
  createTShirt: (req, res, next) => {
    try {
      console.log(req);
      data.push(req.body)
      return res.json({ messenger: 'create success', data })
    } catch (error) {
      next(error);
    }
  }
}