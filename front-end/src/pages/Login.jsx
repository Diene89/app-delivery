import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerLogin from '../assets/styles/Login';
import rockGlass from '../assets/images/rockGlass.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const passwordLength = 5;
    setButtonDisabled(true);
    const re = /\S+@\S+\.\S+/;
    const emailValidation = re.test(email);
    const passwordValidation = password.length > passwordLength;
    if (emailValidation && passwordValidation) setButtonDisabled(false);
  }, [email, password]);

  function navigateTo(path) {
    navigate(path);
  }

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
            disabled={ buttonDisabled }
            data-testid="common_login__button-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => navigateTo('/register') }
          >
            Ainda não tenho conta
          </button>
          <span
            data-testid="common_login__element-invalid-email"
          >
            Menssagem de ERRO
          </span>
        </form>
      </div>
    </ContainerLogin>
  );
}

export default Login;
