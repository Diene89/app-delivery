const loginService = require('../services/login.service');

module.exports = {
  async login(req, res) {
    const token = await loginService.login(req.body);

    return res.status(200).json({ token });
  },
};
