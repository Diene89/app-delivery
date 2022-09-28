import PropTypes from 'prop-types';

function OrderTable({ order }) {
  const { products } = order;

  return (
    <div>
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
                data-testid={ `
                seller_order_details__element-order-table-item-number-${index}` }
              >
                {index + 1}
              </th>
              <th
                data-testid={ `
                seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </th>
              <th
                data-testid={ `
                seller_order_details__element-order-table-quantity-${index}` }
              >
                {product.salesProducts.quantity}
              </th>
              <th
                data-testid={ `
                seller_order_details__element-order-table-unit-price-${index}` }
              >
                {product.price}
              </th>
              <th
                data-testid={ `
                seller_order_details__element-order-table-sub-total-${index}` }
              >
                {(product.price * product.salesProducts.quantity).toFixed(2)}
              </th>
            </tr>
          )) }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="seller_order_details__element-order-total-price"
      >
        {order.totalPrice.toString().replace('.', ',')}
      </button>
    </div>
  );
}

OrderTable.propTypes = {
  order: PropTypes.shape(PropTypes.string).isRequired,
};

export default OrderTable;
