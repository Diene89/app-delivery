import { useContext } from 'react';
import ContainerRegister from '../assets/styles/Register';
import RegisterForm from '../components/RegisterForm';
import AppContext from '../context/AppContext';

function Register() {
  const {
    registerErrorName,
    registerErrorEmail,
    registerErrorPassword,
    registerErrorUserExist,
  } = useContext(AppContext);

  return (
    <ContainerRegister>
      <div className="register-form-container">
        <h1 className="register-title">Cadastro</h1>

        <RegisterForm />

        <div data-testid="common_register__element-invalid_register">
          {registerErrorName && (
            <span className="register-error-span">
              O nome deve ter pelo menos 12 caracteres.
            </span>
          )}

          {registerErrorEmail && (
            <span className="register-error-span">
              O deve ter um formato válido. Ex: exemplo@gmail.com
            </span>
          )}

          {registerErrorPassword && (
            <span className="register-error-span">
              A senha deve ter pelo menos 6 caracteres.
            </span>
          )}

          {registerErrorUserExist && (
            <span className="register-error-span">
              Usuário já cadastrado.
            </span>
          )}
        </div>
      </div>

      <div className="register-background-color" />
    </ContainerRegister>
  );
}

export default Register;
