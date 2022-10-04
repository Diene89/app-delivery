import LoginContainer from '../assets/styles/Login';
import appLogo from '../assets/images/app-logo.gif';
import LoginForm from '../components/LoginForm';
import logo from '../assets/images/logo.png';

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

        <img
          className="login-title"
          src={ logo }
          alt="Gelada Express. Pediu, chegou!"
        />

        <LoginForm />
      </div>

      <div className="login-background-color" />
    </LoginContainer>
  );
}

export default Login;
