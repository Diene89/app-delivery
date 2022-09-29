import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerLogin from '../assets/styles/Login';
import rockGlass from '../assets/images/rockGlass.svg';
import requestLogin from '../api/requestLogin';

function Login() {
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
    <ContainerLogin>
      <div className="formLogin">
        <img src={ rockGlass } alt="logo da aplicação" />
        <h1>Nome da aplicação</h1>
        <form>
          <label htmlFor="common_login__input-email">
            Login
            <input
              type="email"
              name="email"
              onChange={ ({ target }) => setEmail(target.value) }
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="common_login__input-password">
            Senha
            <input
              type="password"
              name="password"
              onChange={ ({ target }) => setPassword(target.value) }
              data-testid="common_login__input-password"
            />
          </label>
          <button
            type="button"
            className="login-button"
            disabled={ buttonDisabled }
            onClick={ loginHandle }
            data-testid="common_login__button-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            className="register-button"
            data-testid="common_login__button-register"
            onClick={ () => navigateTo('/register') }
          >
            Ainda não tenho conta
          </button>
          <span
            data-testid="common_login__element-invalid-email"
          >
            { loginError ? 'Menssagem de ERRO' : '' }
          </span>

        </form>
      </div>
    </ContainerLogin>
  );
}

export default Login;
