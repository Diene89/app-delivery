import PropTypes from 'prop-types';
import ProductDetailsContainer from './style';

function ProductDetails({ order, key }) {
  const { name, price, salesProducts } = order;

  return (
    <ProductDetailsContainer>
      <div
        data-testid={
          `customer_order_details__element-order-table-item-number-${key - 1}`
        }
      >
        {key}
      </div>
      <div
        data-testid={
          `customer_order_details__element-order-table-name-${key - 1}`
        }
      >
        {name}
      </div>
      <div
        data-testid={
          `customer_order_details__element-order-table-quantity-${key - 1}`
        }
      >
        {salesProducts.quantity}
      </div>
      <div
        data-testid={
          `customer_order_details__element-order-table-unit-price-${key - 1}`
        }
      >
        {price}
      </div>
      <div
        data-testid={
          `customer_order_details__element-order-table-sub-total-${key - 1}`
        }
      >
        {salesProducts.quantity * price}
      </div>
    </ProductDetailsContainer>
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
