import ContainerLogin from '../assets/styles/Login';
import rockGlass from '../assets/images/rockGlass.svg';

function Login() {
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
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="common_login__input-password">
            Senha
            <input
              type="password"
              data-testid="common_login__input-password"
            />
          </label>
          <button
            type="button"
            data-testid="common_login__button-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
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
