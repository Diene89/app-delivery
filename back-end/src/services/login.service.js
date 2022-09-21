import { 
  validateUserBody, checkIfExists, checkPassword,
} from './utils/helpers';
import jwtService from './utils/jwtService';

const loginService = {
  async login(data) {
    const user = validateUserBody(data);

    await checkIfExists(user);

    await checkPassword(user.password);

    const token = jwtService.createToken(user);

    return token;
  },
};

export default loginService;