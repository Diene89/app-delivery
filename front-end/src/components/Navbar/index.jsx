import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarContainer from './style';

function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userData = async () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) setUser(userInfo);
  };

  useEffect(() => {
    userData();
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <NavbarContainer>
      <div className="navbar-test">
        <div className="navbar-options-container">
          { user.role === 'customer' && (
            <div>
              <span
                data-testid="customer_products__element-navbar-link-products"
              >
                PRODUTOS
              </span>
              <Link
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                MEUS PEDIDOS
              </Link>
            </div>) }
          { user.role === 'seller' && (
            <div>
              <span
                data-testid="customer_products__element-navbar-link-orders"
              >
                PEDIDOS
              </span>
            </div>) }
          { user.role === 'administrator' && (
            <div>
              <span
                data-testid="customer_products__element-navbar-link-orders"
              >
                GERENCIAR USUÁRIOS
              </span>
            </div>) }
        </div>

        <span data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </span>
      </div>

      <button
        className="logout-button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logoutUser }
        type="button"
      >
        SAIR
      </button>
    </NavbarContainer>
  );
}
export default Navbar;
