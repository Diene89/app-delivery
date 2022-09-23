import { useEffect, useState } from 'react';
import ContainerAdmin from '../assets/styles/Admin';
import requestAdmin from '../api/requestAdmin';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('Cliente');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState(false);
  const [errorMsgNome, setErrorMsgNome] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState(false);
  const [errorMsgUserExist, setErrorMsgUserExist] = useState(false);

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

  function resetErrors() {
    setErrorMsgEmail(false);
    setErrorMsgNome(false);
    setErrorMsgPassword(false);
    setErrorMsgUserExist(false);
  }

  function resetInputs() {
    setUserEmail('');
    setUserName('');
    setUserPassword('');
  }

  async function validateRegister() {
    resetErrors();
    resetInputs();

    const { checkName, checkEmail, checkPassword } = validateFields();

    const checkInfo = checkName && checkEmail && checkPassword;

    if (!checkInfo) {
      setErrorMsgNome(checkName);
      setErrorMsgEmail(checkEmail);
      setErrorMsgPassword(checkPassword);

      return;
    }

    const userInfo = await requestAdmin(
      {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole === 'Cliente' ? 'customer' : 'seller',
      },
    );

    if (userInfo.message) {
      setErrorMsgUserExist(true);
    }
  }

  useEffect(() => {
    const { toggleBtn } = validateFields();
    setButtonDisabled(!toggleBtn);
  }, [userName, userEmail, userPassword]);

  return (
    <ContainerAdmin>
      <div
        data-testid="admin_manage__element-invalid-register"
        className="admin_manage__error_container"
      >
        <h1>Cadastrar novo usuário</h1>
        { errorMsgNome && (
          <span className="admin_manage__error_span">
            O nome deve ter pelo menos 12 caracteres.
          </span>
        ) }
        { errorMsgEmail && (
          <span className="admin_manage__error_span">
            O deve ter um formato válido. Ex: exemplo@gmail.com
          </span>
        ) }
        { errorMsgPassword && (
          <span className="admin_manage__error_span">
            A senha deve ter pelo menos 6 caracteres.
          </span>
        ) }
        { errorMsgUserExist && (
          <span className="admin_manage__error_span">
            Usuário já cadastrado.
          </span>
        ) }
      </div>

      <form className="formAdmin">
        <div className="admin-container">
          <span className="admin-input-span">Nome</span>

          <input
            className="admin-input"
            data-testid="admin_manage__input-name"
            placeholder="Nome e Sobrenome"
            onChange={ ({ target }) => setUserName(target.value) }
            type="text"
            value={ userName }
          />
        </div>

        <div className="admin-container">
          <span className="admin-input-span">Email</span>

          <input
            className="admin-input"
            data-testid="admin_manage__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ ({ target }) => setUserEmail(target.value) }
            type="email"
            value={ userEmail }
          />
        </div>

        <div className="admin-container">
          <span className="admin-input-span">Senha</span>

          <input
            className="admin-input"
            data-testid="admin_manage__input-password"
            placeholder="**********"
            onChange={ ({ target }) => setUserPassword(target.value) }
            type="password"
            value={ userPassword }
          />
        </div>

        <div className="admin-container">
          <span className="admin-input-span">Tipo</span>

          <select
            className="admin-input"
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setUserRole(target.value) }
            value={ userRole }
          >
            <option>Cliente</option>
            <option>Vendedor</option>
          </select>
        </div>

        <button
          className="admin-button"
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ buttonDisabled }
          onClick={ () => validateRegister() }
        >
          <span className="admin-button-span">CADASTRAR</span>
        </button>
      </form>

    </ContainerAdmin>
  );
}

export default Admin;
