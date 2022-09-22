const md5 = require('md5');
const { validateAdminUserBody, checkIfUser } = require('./utils/helpers');
const db = require('../database/models');

module.exports = {
  async create(data) {
    const user = validateAdminUserBody(data);

    await checkIfUser(data.email);

    const cryptoPassword = md5(user.password);

    const userCreated = await db.user.create({
      name: data.name,
      email: data.email,
      password: cryptoPassword,
      role: data.role,
    });

    return userCreated;
  },
};