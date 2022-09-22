import NavbarContainer from './style';

function Navbar() {
  return (
    <NavbarContainer>
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">PRODUTOS</li>
        <li data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</li>
        <li
          data-testid="customer_products__element-navbar-user-full-name"
        >
          NOME DO USUARIO
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">SAIR</li>
      </ul>
    </NavbarContainer>
  );
}

export default Navbar;
