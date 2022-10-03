import PropTypes from 'prop-types';
import OrderDetailsTableContainer from './style';

function ProductDetails({ items }) {
  return (
    <OrderDetailsTableContainer>
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
        </tr>
      </thead>

      <tbody className="checkout-table-body">
        {items.map(({ name, salesProducts, price }, index) => {
          const { quantity } = salesProducts;
          const subtotal = Number(price) * quantity;

          return (
            <tr
              className="checkout-table-body-tr"
              key={ `${name}__${index + 1}__${index}` }
            >
              <td
                className="checkout-table-body-td-item"
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index - 1}`
                }
                title={ index + 1 }
              >
                {index + 1}
              </td>

              <td
                className="checkout-table-body-td-name"
                data-testid={
                  `customer_order_details__element-order-table-name-${index - 1}`
                }
                title={ name }
              >
                {name}
              </td>

              <td
                className="checkout-table-body-td-quantity"
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index - 1}`
                }
                title={ quantity }
              >
                {quantity}
              </td>

              <td
                className="checkout-table-body-td-price"
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index - 1}`
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
                  `customer_order_details__element-order-table-sub-total-${index - 1}`
                }
                title={
                  subtotal
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              >
                {subtotal
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </OrderDetailsTableContainer>
  );
}

ProductDetails.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    salesProducts: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

export default ProductDetails;
