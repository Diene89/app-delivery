const Joi = require('joi');
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
  const user = db.user.findOne({ where: { email } });

  if (!user) {
    const error = new Error('Not found');
    error.name = 'NotFoundError';
    throw error;
  }
};

const checkPassword = async (dbPassword, bodyPassword) => {
  if (dbPassword === bodyPassword) return true;
};

module.exports = {
  validateUserBody,
  checkIfExists,
  checkPassword,
};
