import PropTypes from 'prop-types';
import AdminFormContainer from './style';

function AdminForm({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  userRole,
  setUserRole,
  buttonDisabled,
  validateRegister,
}) {
  return (
    <AdminFormContainer>
      <div className="admin-input-container">
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

      <div className="admin-input-container">
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

      <div className="admin-input-container">
        <span className="admin-input-span">Senha</span>

        <input
          className="admin-input-password"
          data-testid="admin_manage__input-password"
          placeholder="**********"
          onChange={ ({ target }) => setUserPassword(target.value) }
          type="password"
          value={ userPassword }
        />
      </div>

      <div className="admin-input-container">
        <span className="admin-input-span">Tipo</span>

        <select
          className="admin-input-dropdown"
          data-testid="admin_manage__select-role"
          onChange={ ({ target }) => setUserRole(target.value) }
          value={ userRole }
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
      </div>

      <div className="admin-button-container">
        <button
          className="admin-button"
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ buttonDisabled }
          onClick={ () => validateRegister() }
        >
          <span className="admin-button-span">CADASTRAR</span>
        </button>
      </div>
    </AdminFormContainer>
  );
}

AdminForm.propTypes = {
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  setUserEmail: PropTypes.func.isRequired,
  userPassword: PropTypes.string.isRequired,
  setUserPassword: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
  setUserRole: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  validateRegister: PropTypes.func.isRequired,
};

export default AdminForm;
