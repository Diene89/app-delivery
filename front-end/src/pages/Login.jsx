import LoginContainer from '../assets/styles/Login';
import appLogo from '../assets/images/app-logo.gif';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <LoginContainer>
      <div className="login-form-container">
        <img
          alt="Logo da aplicação: um homem com boné, máscara e em uma moto pequena, \
          com um cesto de compras cheio."
          className="login-logo"
          src={ appLogo }
        />

        <h1 className="login-title">Nome da aplicação</h1>

        <LoginForm />
      </div>
    </LoginContainer>
  );
}

export default Login;
