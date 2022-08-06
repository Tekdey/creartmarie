const { Category } = require("../model/index");

module.exports = {
  async findAll(req, res) {
    try {
      const category = await Category.findAll();

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
