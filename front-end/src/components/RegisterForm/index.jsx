import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import requestRegister from '../../api/requestRegister';
import AppContext from '../../context/AppContext';
import RegisterFormContainer from './style';

function RegisterForm() {
  const {
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerButtonDisabled,
    setRegisterButtonDisabled,
    setRegisterErrorName,
    setRegisterErrorEmail,
    setRegisterErrorPassword,
    setRegisterErrorUserExist,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const validateFields = useCallback(() => {
    const nameMinLength = 12;
    const passwordMinLength = 6;
    const regexToValidateEmail = /\S+@\S+\.\S+/;
    const emailValidation = regexToValidateEmail.test(registerEmail);
    const nameLengthValidation = registerName.length >= nameMinLength;
    const passwordLengthValidation = registerPassword.length >= passwordMinLength;

    return {
      checkName: nameLengthValidation,
      checkEmail: emailValidation,
      checkPassword: passwordLengthValidation,
      toggleBtn: (emailValidation && nameLengthValidation && passwordLengthValidation),
    };
  }, [registerName, registerEmail, registerPassword]);

  function resetErrorMsgs() {
    setRegisterErrorName(false);
    setRegisterErrorEmail(false);
    setRegisterErrorPassword(false);
    setRegisterErrorUserExist(false);
  }

  async function validateRegister() {
    resetErrorMsgs();

    const { checkName, checkEmail, checkPassword } = validateFields();

    const checkInfos = checkName && checkEmail && checkPassword;

    if (!checkInfos) {
      setRegisterErrorName(checkName);
      setRegisterErrorEmail(checkEmail);
      setRegisterErrorPassword(checkPassword);

      return;
    }

    const userInfo = await requestRegister(
      { name: registerName, email: registerEmail, password: registerPassword },
    );

    if (userInfo.message) {
      setRegisterErrorUserExist(true);
    } else {
      localStorage.setItem('user', JSON.stringify(userInfo));

      navigate('/customer/products');
    }
  }

  useEffect(() => {
    const { toggleBtn } = validateFields();

    setRegisterButtonDisabled(!toggleBtn);
  }, [
    registerEmail,
    registerName,
    registerPassword,
    validateFields,
    setRegisterButtonDisabled,
  ]);

  return (
    <RegisterFormContainer>
      <label className="register-form-label" htmlFor="common_register__input-name">
        <span className="register-form-label-title">Nome</span>

        <input
          className="register-form-input"
          data-testid="common_register__input-name"
          placeholder="Seu nome"
          onChange={ ({ target }) => setRegisterName(target.value) }
          type="text"
        />
      </label>

      <label className="register-form-label" htmlFor="common_register__input-email">
        <span className="register-form-label-title">Email</span>

        <input
          className="register-form-input"
          data-testid="common_register__input-email"
          placeholder="seu-email@site.com.br"
          onChange={ ({ target }) => setRegisterEmail(target.value) }
          type="email"
        />
      </label>

      <label className="register-form-label" htmlFor="common_register__input-password">
        <span className="register-form-label-title">Senha</span>

        <input
          className="register-form-input"
          data-testid="common_register__input-password"
          placeholder="**********"
          onChange={ ({ target }) => setRegisterPassword(target.value) }
          type="password"
        />
      </label>

      <button
        className="register-form-login-btn"
        data-testid="common_register__button-register"
        disabled={ registerButtonDisabled }
        type="button"
        onClick={ validateRegister }
      >
        <span className="register-form-login-btn-title">CADASTRAR</span>
      </button>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
