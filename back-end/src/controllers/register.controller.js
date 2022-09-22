const registerService = require('../services/register.service');
const jwtService = require('../services/utils/jwtService');

const registerController = {
  async create(req, res) {
    const data = registerService.validateRegisterBody(req.body);
    const { dataValues: { id, name, email, role } } = await registerService.create(data);
    const token = jwtService.createToken({ id, email });
    return res.status(201).json({
      name,
      email,
      role,
      token,
    });
  },
};

module.exports = registerController;