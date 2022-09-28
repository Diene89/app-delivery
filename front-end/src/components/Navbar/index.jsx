import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <ul>
        { user.role === 'customer' && (
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </li>) }
        { user.role === 'seller' && (
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            PEDIDOS
          </li>) }
        { user.role === 'administrator' && (
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            GERENCIAR USUÁRIOS
          </li>) }
        { user.role === 'customer' && (
          <li data-testid="customer_products__element-navbar-link-orders">
            MEUS  PEDIDOS
          </li>
        ) }
        <li
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </li>
      </ul>
      <button
        type="button"
        className="logout-button"
        onClick={ logoutUser }
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </button>
    </NavbarContainer>
  );
}

export default Navbar;
