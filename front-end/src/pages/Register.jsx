import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestRegister from '../api/requestRegister';
import ContainerRegister from '../assets/styles/Register';

function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMsgName, setErrorMsgName] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState(false);
  const [errorMsgUserExist, setErrorMsgUserExist] = useState(false);
  const navigate = useNavigate();

  function validateFields() {
    const nameMinLength = 12;
    const passwordMinLength = 6;
    const regexToValidateEmail = /\S+@\S+\.\S+/;
    const emailValidation = regexToValidateEmail.test(userEmail);
    const nameLengthValidation = userName.length >= nameMinLength;
    const passwordLengthValidation = userPassword.length >= passwordMinLength;

    return {
      checkName: nameLengthValidation,
      checkEmail: emailValidation,
      checkPassword: passwordLengthValidation,
      toggleBtn: (emailValidation && nameLengthValidation && passwordLengthValidation),
    };
  }

  function resetErrorMsgs() {
    setErrorMsgName(false);
    setErrorMsgEmail(false);
    setErrorMsgPassword(false);
    setErrorMsgUserExist(false);
  }

  async function validateRegister() {
    resetErrorMsgs();

    const { checkName, checkEmail, checkPassword } = validateFields();

    const checkInfos = checkName && checkEmail && checkPassword;

    if (!checkInfos) {
      setErrorMsgName(checkName);
      setErrorMsgEmail(checkEmail);
      setErrorMsgPassword(checkPassword);

      return;
    }

    const userInfo = await requestRegister(
      { name: userName, email: userEmail, password: userPassword },
    );

    if (userInfo.message) {
      setErrorMsgUserExist(true);
    } else {
      localStorage.setItem('user', JSON.stringify(userInfo));

      navigate('/customer/products');
    }
  }

  useEffect(() => {
    const { toggleBtn } = validateFields();

    setButtonDisabled(!toggleBtn);
  }, [userEmail, userName, userPassword]);

  return (
    <ContainerRegister>
      <h1 className="register-title">Cadastro</h1>

      <form className="formRegister">
        <div className="register-container">
          <span className="register-input-span">Nome</span>

          <input
            className="register-input"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            onChange={ ({ target }) => setUserName(target.value) }
            type="text"
          />
        </div>

        <div className="register-container">
          <span className="register-input-span">Email</span>

          <input
            className="register-input"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ ({ target }) => setUserEmail(target.value) }
            type="email"
          />
        </div>

        <div className="register-container">
          <span className="register-input-span">Senha</span>

          <input
            className="register-input"
            data-testid="common_register__input-password"
            placeholder="**********"
            onChange={ ({ target }) => setUserPassword(target.value) }
            type="password"
          />
        </div>

        <button
          className="register-button"
          data-testid="common_register__button-register"
          disabled={ buttonDisabled }
          type="button"
          onClick={ validateRegister }
        >
          <span className="register-button-span">CADASTRAR</span>
        </button>
      </form>

      <div data-testid="common_register__element-invalid_register">
        {errorMsgName && (
          <span className="register-error-span">
            O nome deve ter pelo menos 12 caracteres.
          </span>
        )}

        {errorMsgEmail && (
          <span className="register-error-span">
            O deve ter um formato válido. Ex: exemplo@gmail.com
          </span>
        )}

        {errorMsgPassword && (
          <span className="register-error-span">
            A senha deve ter pelo menos 6 caracteres.
          </span>
        )}

        {errorMsgUserExist && (
          <span className="register-error-span">
            Usuário já cadastrado.
          </span>
        )}
      </div>
    </ContainerRegister>
  );
}

export default Register;
