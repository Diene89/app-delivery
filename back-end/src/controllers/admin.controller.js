const adminService = require('../services/admin.service');

module.exports = {
  async create(req, res) {
    const userCreated = await adminService.create(req.body);

    return res.status(201).json(userCreated);
  },

  async getAllUsers(req, res) {
    const users = await adminService.getAllUsers();

    return res.status(200).json(users);
  },
};