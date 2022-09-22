const { 
  validateUserBody, checkIfExists, checkPassword,
} = require('./utils/helpers');
const jwtService = require('./utils/jwtService');

module.exports = {
  async login(data) {
    const user = validateUserBody(data);

    const { name, email, role, password } = await checkIfExists(user.email);

    await checkPassword(password, data.password);

    const token = jwtService.createToken(user);

    return { name, email, role, token };
  },
};
