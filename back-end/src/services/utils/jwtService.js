require('dotenv/config');

const jwt = require('jsonwebtoken');

module.exports = {
  createToken(data) {
    const token = jwt.sign(data, 'secret_key');

    return token;
  },

  validateToken(token) {
    if (!token) {
      const error = new Error('Token not Found');
      error.name = 'UnauthorizedError';
      throw error;
    }

    try {
      const data = jwt.verify(token, 'secret_key');

      return data;
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },

  decodeToken(token) {
    const user = jwt.decode(token);

    return user;
  },
};
