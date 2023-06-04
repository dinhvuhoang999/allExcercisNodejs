const data = [{
  id: 1,
  product: 'a'
},
{
  id: 2,
  product: 'b'
},
{
  id: 3,
  product: 'c'
}];

module.exports = {
  getProducts: (req, res, next) => {
    try {
      return res.json({ data })
    } catch (error) {
      next(error)
    }
  },

  getProductDetail: (req, res, next) => {
    try {
      const { id } = req.params;

      const product = data.filter((e) => e.id === +id);

      return res.json({ data: product })

    } catch (error) {
      next(error)
    }
  },
  newProduct: (req, res, next) => {
    try {
      const { id, product } = req.params;
      data.push({ id, product });

      return res.json({ data })

    } catch (error) {
      console.log(error);
      next(error)
    }
  },
  updateProduct: (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(req.body);
      const { product } = req.body;
      objIndex = data.findIndex((obj => obj.id == 1));

      data[objIndex].product = product

      return res.json({ data })

    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}