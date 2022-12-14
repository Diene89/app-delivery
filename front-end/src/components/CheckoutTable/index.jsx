import PropTypes from 'prop-types';
import CheckoutTableContainer from './style';
import trashIcon from '../../assets/images/trash-icon.svg';

function CheckoutTable({ items, removeItem }) {
  return (
    <CheckoutTableContainer>
      <thead>
        <tr className="checkout-table-head">
          <th className="checkout-table-head-item">
            Item
          </th>

          <th className="checkout-table-head-item">
            Descrição
          </th>

          <th className="checkout-table-head-item">
            Quantidade
          </th>

          <th className="checkout-table-head-item">
            Valor Unitário
          </th>

          <th className="checkout-table-head-item">
            Sub-Total
          </th>

          <th className="checkout-table-head-item">
            Remover Item
          </th>
        </tr>
      </thead>

      <tbody className="checkout-table-body">
        {items.map(({ id, name, quantity, price }, index) => {
          const subtotal = price * quantity;

          return (
            <tr
              className="checkout-table-body-tr"
              key={ `${name}__${index + 1}__${index}` }
            >
              <td
                className="checkout-table-body-td-item"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
                title={ index + 1 }
              >
                {index + 1}
              </td>

              <td
                className="checkout-table-body-td-name"
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
                title={ name }
              >
                {name}
              </td>

              <td
                className="checkout-table-body-td-quantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
                title={ quantity }
              >
                {quantity}
              </td>

              <td
                className="checkout-table-body-td-price"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
                title={
                  Number(price)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              >
                {Number(price)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>

              <td
                className="checkout-table-body-td-subtotal"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
                title={
                  subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              >
                {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>

              <td
                className="checkout-table-body-td-button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                title="Remover"
              >
                <button
                  id={ id }
                  onClick={ removeItem }
                  type="button"
                >
                  <img
                    alt="Ícone de lixeira para representar o botão de
                        remover item da lista de compra."
                    aria-hidden="true"
                    className="checkout-table-td-button-icon"
                    id={ id }
                    onClick={ removeItem }
                    src={ trashIcon }
                  />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </CheckoutTableContainer>
  );
}

CheckoutTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
  })).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CheckoutTable;
