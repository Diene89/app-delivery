const Joi = require('joi');
const md5 = require('md5');
const db = require('../database/models');

const registerService = {
  validateRegisterBody(data) {
    const bodySchema = Joi.object({
      name: Joi.string().max(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
  
    const { error, value } = bodySchema.validate(data);
    if (error) {
      error.name = 'ValidationError';
      throw error;
    }
    return value;
  },

  async create({ name, email, password }) {
    const checkIfUser = await db.user.findOne({
      where: { email },
    });

    if (checkIfUser) {
      const error = new Error('User already registered');
      error.name = 'ConflictError';
      throw error;
    }

    const cryptoPassword = md5(password);

    const userCreated = await db.user.create({
      name,
      email,
      password: cryptoPassword,
      role: 'customer',
    });
    return userCreated;
  },
};

module.exports = registerService;