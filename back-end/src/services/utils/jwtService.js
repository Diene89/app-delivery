require('dotenv/config');

const jwt = require('jsonwebtoken');

module.exports = {
  createToken(data) {
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return token;
  },

  validateToken(token) {
    if (!token) {
      const error = new Error('Token not Found');
      error.name = 'UnauthorizedError';
      throw error;
    }

    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);

      return data;
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },
};
