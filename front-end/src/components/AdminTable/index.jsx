import PropTypes from 'prop-types';
import AdminTableContainer from './style';

function AdminTable({ arrayUsers, fetchUser }) {
  return (
    <AdminTableContainer>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayUsers.map((user, index) => (
              <tr key={ user.id }>
                <td
                  className="user-item"
                  data-testid={
                    `admin_manage__element-user-table-item-number-${index}`
                  }
                >
                  { index + 1}
                </td>
                <td
                  className="user-nome"
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  { user.name }
                </td>
                <td
                  className="user-email"
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  { user.email }
                </td>
                <td
                  className="user-tipo"
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  { user.role }
                </td>
                <td className="user-excluir">
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    className="admin-delete"
                    type="button"
                    onClick={ () => fetchUser(user.id) }
                  >
                    <span className="admin-button-span-delete">EXCLUIR</span>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
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
