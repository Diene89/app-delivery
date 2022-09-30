import PropTypes from 'prop-types';
import OrderTableContainer from './style';

function OrderTable({ order }) {
  const { products } = order;

  return (
    <OrderTableContainer>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          { products && products.map((product, index) => (
            <tr key={ product.id }>
              <th
                className="product-item"
                data-testid={ `
                seller_order_details__element-order-table-item-number-${index}` }
              >
                {index + 1}
              </th>
              <th
                className="product-nome"
                data-testid={ `
                seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </th>
              <th
                className="product-quantity"
                data-testid={ `
                seller_order_details__element-order-table-quantity-${index}` }
              >
                {product.salesProducts.quantity}
              </th>
              <th
                className="product-price"
                data-testid={ `
                seller_order_details__element-order-table-unit-price-${index}` }
              >
                {product.price}
              </th>
              <th
                className="product-subtotal"
                data-testid={ `
                seller_order_details__element-order-table-sub-total-${index}` }
              >
                {(product.price * product.salesProducts.quantity).toFixed(2)}
              </th>
            </tr>
          )) }
        </tbody>
      </table>
      <div
        className="total_price"
        type="button"
        data-testid="seller_order_details__element-order-total-price"
      >
        {`Total: R$ ${order.totalPrice.toString().replace('.', ',')}`}
      </div>
    </OrderTableContainer>
  );
}

OrderTable.propTypes = {
  order: PropTypes.shape(PropTypes.string).isRequired,
};

export default OrderTable;
