import Joi from 'joi';
import db from '../../database/models';

export const validateUserBody = async (data) => {
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

export const checkIfExists = async (data) => {
  const { email, password } = data;
  const user = db.user.findOne({ where: { email } });

  if (!user || password !== user.password) {
    const error = new Error('Not found');
    error.name = 'NotFoundError';
    throw error;
  }
};