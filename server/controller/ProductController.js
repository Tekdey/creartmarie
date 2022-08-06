const { Product } = require("../model/index");

module.exports = {
  async findAll(req, res) {
    try {
      const product = await Product.findAll();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
