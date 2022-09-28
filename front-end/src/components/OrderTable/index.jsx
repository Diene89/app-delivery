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
              <th>{index + 1}</th>
              <th>{product.name}</th>
              <th>{product.salesProducts.quantity}</th>
              <th>{product.price}</th>
              <th>{product.price * product.salesProducts.quantity}</th>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

OrderTable.propTypes = {
  order: PropTypes.shape(PropTypes.string).isRequired,
};

export default OrderTable;
