const registerService = require('../services/register.service');
const jwtService = require('../services/utils/jwtService');

const registerController = {
  async create(req, res) {
    const data = registerService.validateRegisterBody(req.body);
    await registerService.create(data);
    const token = jwtService.createToken(req.body.email);
    return res.status(201).json({ token });
  },
};

module.exports = registerController;