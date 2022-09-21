import ContainerRegister from '../assets/styles/Register';

function Register() {
  return (
    <ContainerRegister>
      <h1 className="register-title">Cadastro</h1>

      <div className="formRegister">
        <div className="register-container">
          <span className="register-input-span">Nome</span>

          <input
            className="register-input"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            type="text"
          />
        </div>

        <div className="register-container">
          <span className="register-input-span">Email</span>

          <input
            className="register-input"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            type="email"
          />
        </div>

        <div className="register-container">
          <span className="register-input-span">Senha</span>

          <input
            className="register-input"
            data-testid="common_register__input-password"
            placeholder="**********"
            type="password"
          />
        </div>

        <button
          className="register-button"
          data-testid="common_register__button-register"
          type="button"
        >
          <span className="register-button-span">CADASTRAR</span>
        </button>
      </div>

      <span
        className="register-error-span"
        data-testid="common_register__element-invalid_register"
      >
        Elemento oculto (Mensagens de erro)
      </span>
    </ContainerRegister>
  );
}

export default Register;
