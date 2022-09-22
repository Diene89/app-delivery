import jwtService from '../services/utils/jwtService';

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  jwtService.validateToken(authorization);

  next();
}