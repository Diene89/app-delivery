const md5 = require('md5');
const { Op } = require('sequelize');
const { validateAdminUserBody, checkIfUser, checkIfExistsById } = require('./utils/helpers');
const db = require('../database/models');
const jwtService = require('./utils/jwtService');

const tokenMessage = 'token expirado ou inválido';
const adminMessage = 'este usuario não é um Admin';

module.exports = {
  async create(data, token) {
    if (!token) return tokenMessage;

    const adminUser = jwtService.decodeToken(token);
    const isAdmin = await db.user.findByPk(adminUser.id);
    if (isAdmin.role !== 'administrator') return adminMessage;
  
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

  async getAllUsers(token) {
    if (!token) return tokenMessage;

    const adminUser = jwtService.decodeToken(token);
    const isAdmin = await db.user.findByPk(adminUser.id);
    if (isAdmin.role !== 'administrator') return adminMessage;

    const users = await db.user.findAll({
      where: { 
        role: { [Op.not]: 'administrator' },
      },
  });

    if (!users) return { message: 'Nenhum usuário encontrado' };

    return users;
  },

  async deleteUser(id, token) {
    if (!token) return tokenMessage;

    const adminUser = jwtService.decodeToken(token);
 
    const isAdmin = await db.user.findByPk(adminUser.id);
    if (isAdmin.role !== 'administrator') return adminMessage;

    await checkIfExistsById(id);

    await db.user.destroy({ where: { id } });

    return 'usuário deletado com sucesso!';
  },
};