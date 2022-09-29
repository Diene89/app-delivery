import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import requestLogin from '../../api/requestLogin';
import LoginFormContainer from './style';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const passwordLength = 5;
    setButtonDisabled(true);
    const re = /\S+@\S+\.\S+/;
    const emailValidation = re.test(email);
    const passwordValidation = password.length > passwordLength;
    if (emailValidation && passwordValidation) setButtonDisabled(false);
  }, [email, password]);

  useEffect(() => {
    const verifyLogin = JSON.parse(localStorage.getItem('user'));
    if (verifyLogin) navigate('/customer/products');
  }, []);

  function navigateTo(path) {
    navigate(path);
  }

  const loginHandle = async () => {
    const response = await requestLogin({ email, password });
    if (response.message) {
      setLoginError(true);
    }
    if (response.token) {
      const { id, name, role, token } = response;
      const objUser = {
        id,
        name,
        email: response.email,
        role,
        token,
        productCart: [],
      };
      localStorage.setItem('user', JSON.stringify(objUser));
      if (role !== 'administrator') {
        navigateTo('/customer/products');
      } else {
        navigateTo('/admin/manage');
      }
    }
  };

  return (
    <LoginFormContainer>
      <label className="login-form-label" htmlFor="common_login__input-email">
        <span className="login-form-label-title">Login</span>

        <input
          className="login-form-input"
          data-testid="common_login__input-email"
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
        />
      </label>

      <label className="login-form-label" htmlFor="common_login__input-password">
        <span className="login-form-label-title">Senha</span>

        <input
          className="login-form-input"
          data-testid="common_login__input-password"
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
        />
      </label>

      <button
        className="login-form-login-btn"
        data-testid="common_login__button-login"
        disabled={ buttonDisabled }
        onClick={ loginHandle }
        type="button"
      >
        <span className="login-form-login-title">Login</span>
      </button>

      <button
        className="login-form-register-btn"
        data-testid="common_login__button-register"
        onClick={ () => navigateTo('/register') }
        type="button"
      >
        <span>Ainda não tenho conta</span>
      </button>

      <span
        data-testid="common_login__element-invalid-email"
      >
        { loginError ? 'Menssagem de ERRO' : '' }
      </span>
    </LoginFormContainer>
  );
}

export default LoginForm;
