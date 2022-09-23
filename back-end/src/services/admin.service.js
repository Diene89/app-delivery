const md5 = require('md5');
const { Op } = require('sequelize');
const { validateAdminUserBody, checkIfUser, checkIfExistsById } = require('./utils/helpers');
const db = require('../database/models');
const jwtService = require('./utils/jwtService');

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

  async getAllUsers() {
    const users = await db.user.findAll({ where: { role: {
      [Op.not]: 'administrator',
    } } });

    if (!users) return { message: 'Nenhum usuário encontrado' };

    return users;
  },

  async deleteUser(id, token) {
    if (!token) return 'token expirado ou inválido';

    const user = jwtService.decodeToken(token);
    const isAdmin = await db.user.findByPk(user.id);
    if (isAdmin.role !== 'administrator') return 'este usuario não é um Admin';

    await checkIfExistsById(id);

    await db.user.destroy({ where: { id } });

    return 'usuário deletado com sucesso!';
  },
};