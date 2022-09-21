const registerService = require('../services/register.service');

const registerController = {
  async create(req, res) {
    const data = registerService.validateRegisterBody(req.body);
    await registerService.create(data);
    return res.status(201).end();
  }
}

module.exports = registerController;