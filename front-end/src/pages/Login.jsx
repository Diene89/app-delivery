import LoginContainer from '../assets/styles/Login';
import appLogo from '../assets/images/app-logo.gif';
import LoginForm from '../components/LoginForm';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const passwordLength = 5;
    setButtonDisabled(true);
    const re = /\S+@\S+\.\S+/;
    const emailValidation = re.test(email);
    const passwordValidation = password.length > passwordLength;
    if (emailValidation && passwordValidation) setButtonDisabled(false);
  }, [email, password]);

  // useEffect(() => {
  //   const verifyLogin = JSON.parse(localStorage.getItem('user'));
  //   if (verifyLogin) navigate('/customer/products');
  // }, []);

  function navigateTo(path) {
    navigate(path);
  }

  const loginHandle = async () => {
    const response = await requestLogin({ email, password });
    if (response.message) {
      setLoginError(true);
    }
    if (response.token) {
      const { id, name, role, token } = response;
      const objUser = {
        id,
        name,
        email: response.email,
        role,
        token,
        productCart: [],
      };
      localStorage.setItem('user', JSON.stringify(objUser));
      if (role !== 'administrator') {
        navigateTo('/customer/products');
      } else {
        navigateTo('/admin/manage');
      }
    }
  };

  return (
    <LoginContainer>
      <div className="login-form-container">
        <img
          alt="Logo da aplicação: um homem com boné, máscara e em uma moto pequena, \
          com um cesto de compras cheio."
          className="login-logo"
          src={ appLogo }
        />

        <h1 className="login-title">Nome da aplicação</h1>

        <LoginForm />
      </div>

      <div className="login-background-color" />
    </LoginContainer>
  );
}

export default Login;
