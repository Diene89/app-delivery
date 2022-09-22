const md5 = require('md5');
const { validateAdminUserBody, checkIfExists } = require('./utils/helpers');
const db = require('../database/models');

module.exports = {
  async create(data) {
    const user = validateAdminUserBody(data);

    const exist = await checkIfExists(user.email);
    if (!exist) throw new Error('Usuário já cadastrado');

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