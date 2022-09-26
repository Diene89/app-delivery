const adminService = require('../services/admin.service');

module.exports = {
  async create(req, res) {
    const { authorization } = req.headers;
    const userCreated = await adminService.create(req.body, authorization);

    return res.status(201).json(userCreated);
  },

  async getAllUsers(req, res) {
    const { authorization } = req.headers;
    const users = await adminService.getAllUsers(authorization);

    return res.status(200).json(users);
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    const { authorization } = req.headers;

    const result = await adminService.deleteUser(id, authorization);

    return res.status(200).json({ message: result });
  },
};