import PropTypes from 'prop-types';
import AdminTableContainer from './style';
import trashIcon from '../../assets/images/trash-icon.svg';

function AdminTable({ arrayUsers, fetchUser }) {
  return (
    <AdminTableContainer>
      <thead>
        <tr className="admin-table-head">
          <th className="admin-table-head-item">
            Item
          </th>

          <th className="admin-table-head-item">
            Nome
          </th>

          <th className="admin-table-head-item">
            Email
          </th>

          <th className="admin-table-head-item">
            Tipo
          </th>

          <th className="admin-table-head-item">
            Excluir
          </th>
        </tr>
      </thead>

      <tbody className="admin-table-body">
        {arrayUsers.map(({ id, name, email, role }, index) => (
          <tr
            className="admin-table-body-tr"
            key={ `${name}__${index + 1}__${index}` }
          >
            <td
              className="admin-table-body-td-item"
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              title={ index + 1 }
            >
              {index + 1}
            </td>

            <td
              className="admin-table-body-td-name"
              data-testid={ `admin_manage__element-user-table-name-${index}` }
              title={ name }
            >
              {name}
            </td>

            <td
              className="admin-table-body-td-email"
              data-testid={ `admin_manage__element-user-table-email-${index}` }
              title={ email }
            >
              {email}
            </td>

            <td
              className="admin-table-body-td-role"
              data-testid={ `admin_manage__element-user-table-role-${index}` }
              title={ role }
            >
              {role}
            </td>

            <td
              className="admin-table-body-td-button"
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
              title="Remover"
            >
              <button
                id={ id }
                onClick={ ({ target }) => fetchUser(target.id) }
                type="button"
              >
                <img
                  alt="Ícone de lixeira para representar o botão de
                        deletar um usuário do banco de dados."
                  aria-hidden="true"
                  className="admin-table-td-button-icon"
                  id={ id }
                  onClick={ ({ target }) => fetchUser(target.id) }
                  src={ trashIcon }
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </AdminTableContainer>
  );
}

AdminTable.propTypes = {
  arrayUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })),
  fetchUser: PropTypes.func,
}.isRequired;

export default AdminTable;
