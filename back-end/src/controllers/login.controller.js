import loginService from '../services/login.service';

const loginController = {
  async login(req, res) {
    const token = await loginService.login(req.body);

    return res.status(200).json({ token });
  },
};

export default loginController;