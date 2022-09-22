const adminService = require('../services/admin.service');

module.exports = {
  async create(req, res) {
    const userCreated = await adminService.create(req.body);

    return res.status(201).json(userCreated);
  },
};