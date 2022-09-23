import PropTypes from 'prop-types';
import ProductsCardContainer from './style';

function ProductsCard({ price, urlImage, name, count }) {
  return (
    <ProductsCardContainer>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${count}` }
      />
      <h1
        data-testid={ `customer_products__element-card-price-${count}` }
      >
        { price }
      </h1>
      <h2
        data-testid={ `customer_products__element-card-title-${count}` }
      >
        { name }
      </h2>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${count}` }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${count}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${count}` }
      >
        +
      </button>
    </ProductsCardContainer>
  );
}

ProductsCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ProductsCard;
