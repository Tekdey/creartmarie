const { User } = require("../model/index");

module.exports = {
  async findAll(req, res) {
    try {
      const user = await User.findAll();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
