import { useEffect, useState } from 'react';
import ContainerAdmin from '../assets/styles/Admin';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('Cliente');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function test() {
    console.log(userName, userEmail, userPassword, userRole);
  }

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

  useEffect(() => {
    const { toggleBtn } = validateFields();
    setButtonDisabled(!toggleBtn);
  }, [userName, userEmail, userPassword]);

  return (
    <ContainerAdmin>
      <h1>Cadastrar novo usuário</h1>

      <form className="formAdmin">
        <div className="admin-container">
          <span className="admin-input-span">Nome</span>

          <input
            className="admin-input"
            data-testid="admin_manage__input-name"
            placeholder="Nome e Sobrenome"
            onChange={ ({ target }) => setUserName(target.value) }
            type="text"
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
          onClick={ () => test() }
        >
          <span className="admin-button-span">CADASTRAR</span>
        </button>
      </form>

    </ContainerAdmin>
  );
}

export default Admin;
