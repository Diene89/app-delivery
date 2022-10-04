import { useEffect, useState } from 'react';
import ContainerAdmin from '../assets/styles/Admin';
import requestAdmin, { getUsers, deleteUsers } from '../api/requestAdmin';
import AdminTable from '../components/AdminTable';
import Navbar from '../components/Navbar';
import AdminForm from '../components/AdminForm';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('customer');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState(false);
  const [errorMsgNome, setErrorMsgNome] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState(false);
  const [errorMsgUserExist, setErrorMsgUserExist] = useState(false);
  const [arrayUsers, setArrayUsers] = useState();

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

  async function fetchUsers() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const users = await getUsers(token);
    setArrayUsers(users);
  }

  const validateRegister = async () => {
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

    const { token } = JSON.parse(localStorage.getItem('user'));

    const userInfo = await requestAdmin(
      {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      },
      token,
    );

    if (userInfo.message) {
      setErrorMsgUserExist(true);
    }

    await fetchUsers();
  };

  const fetchUser = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await deleteUsers(id, token);

    await fetchUsers();
  };

  useEffect(() => {
    const { toggleBtn } = validateFields();
    setButtonDisabled(!toggleBtn);
  }, [userName, userEmail, userPassword, userRole]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ContainerAdmin>
      <Navbar />

      <div className="admin-title-and-form-container">
        <div
          className="admin_manage__error_container"
          data-testid="admin_manage__element-invalid-register"
        >
          <h2 className="admin-title">Cadastrar novo usuário</h2>

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

        <AdminForm
          userName={ userName }
          setUserName={ setUserName }
          userEmail={ userEmail }
          setUserEmail={ setUserEmail }
          userPassword={ userPassword }
          setUserPassword={ setUserPassword }
          userRole={ userRole }
          setUserRole={ setUserRole }
          buttonDisabled={ buttonDisabled }
          validateRegister={ validateRegister }
        />
      </div>

      <div className="admin_manage__table-container">
        <h2 className="admin-title">Lista de usuários</h2>

        {arrayUsers && (
          <div className="admin-table-container">
            <AdminTable
              arrayUsers={ arrayUsers }
              fetchUser={ fetchUser }
            />
          </div>
        )}
      </div>
    </ContainerAdmin>
  );
}

export default Admin;
