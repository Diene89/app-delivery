const Joi = require('joi');
const md5 = require('md5');
const db = require('../../database/models');

const validateUserBody = (data) => {
  const bodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = bodySchema.validate(data);

  if (error) {
    error.name = 'ValidationError';
    throw error;
  }

  return value;
};

const checkIfExists = async (email) => {
  const user = await db.user.findOne({ where: { email } });

  if (!user) {
    const error = new Error('Not found');
    error.name = 'NotFoundError';
    throw error;
  }
  
  return user;
};

const checkPassword = async (dbPassword, bodyPassword) => {
  const password = md5(bodyPassword);
  if (dbPassword !== password) {
    const error = new Error('Incorrect email or password');
    error.name = 'ValidationError';
    throw error;
  }
};

module.exports = {
  validateUserBody,
  checkIfExists,
  checkPassword,
};
