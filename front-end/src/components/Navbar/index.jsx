import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarContainer from './style';
import productsIcon from '../../assets/images/products.png';
import shopCartIcon from '../../assets/images/shopping-cart.png';

function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userData = () => {
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
      { user.role === 'customer' && (
        <div className="navbar-options-container">
          <Link
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
          >
            <img src={ productsIcon } alt="Ícone de uma cestinha de produtos" />

            <span>Produtos</span>
          </Link>

          <Link
            data-testid="customer_products__element-navbar-link-orders"
            to="/customer/orders"
          >
            <img src={ shopCartIcon } alt="Ícone de uma cestinha de produtos" />

            <span>Meus Pedidos</span>
          </Link>
        </div>) }

      { user.role === 'seller' && (
        <div className="navbar-options-container">
          <Link
            data-testid="customer_products__element-navbar-link-orders"
            to="/seller/orders"
          >
            <span>Pedidos</span>
          </Link>
        </div>) }

      { user.role === 'administrator' && (
        <div className="navbar-options-container">
          <span
            data-testid="customer_products__element-navbar-link-orders"
          >
            Gerenciar Usuários
          </span>
        </div>) }

      <div className="navbar-username-container">
        <span data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </span>
      </div>

      <div className="navbar-logout-btn-container">
        <button
          className="navbar-logout-btn"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logoutUser }
          type="button"
        >
          Sair
        </button>
      </div>
    </NavbarContainer>
  );
}
export default Navbar;
