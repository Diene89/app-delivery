import PropTypes from 'prop-types';
import OrderTableContainer from './style';

function OrderTable({ order }) {
  const { products } = order;

  return (
    <OrderTableContainer>
      <table>
        <thead>
          <tr className="checkout-table-head">
            <th className="checkout-table-head-item">Item</th>
            <th className="checkout-table-head-item">Descrição</th>
            <th className="checkout-table-head-item">Quantidade</th>
            <th className="checkout-table-head-item">Valor Unitário</th>
            <th className="checkout-table-head-item">Subtotal</th>
          </tr>
        </thead>
        <tbody className="checkout-table-body">
          { products && products.map((product, index) => (
            <tr key={ product.id }>
              <th
                className="checkout-table-body-td-item"
                data-testid={ `
                seller_order_details__element-order-table-item-number-${index}` }
              >
                {index + 1}
              </th>
              <th
                className="checkout-table-body-td-name"
                data-testid={ `
                seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </th>
              <th
                className="checkout-table-body-td-quantity"
                data-testid={ `
                seller_order_details__element-order-table-quantity-${index}` }
              >
                {product.salesProducts.quantity}
              </th>
              <th
                className="checkout-table-body-td-price"
                data-testid={ `
                seller_order_details__element-order-table-unit-price-${index}` }
              >
                {product.price}
              </th>
              <th
                className="checkout-table-body-td-subtotal"
                data-testid={ `
                seller_order_details__element-order-table-sub-total-${index}` }
              >
                {(product.price * product.salesProducts.quantity).toFixed(2)}
              </th>
            </tr>
          )) }
        </tbody>
      </table>
      <span className="order-details-totalprice">
        Total: R$
        {' '}
        <span
          data-testid="seller_order_details__element-order-total-price"
        >
          { order.totalPrice.toString().replace('.', ',') }
        </span>
      </span>
    </OrderTableContainer>
  );
}

OrderTable.propTypes = {
  order: PropTypes.shape(PropTypes.string).isRequired,
};

export default OrderTable;
