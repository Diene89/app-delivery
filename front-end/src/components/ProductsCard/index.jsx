import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsCardContainer from './style';

function ProductsCard({
  price,
  urlImage,
  name,
  count,
  userCartData,
}) {
  const [quantity, setQuantity] = useState(0);

  const sumButton = () => {
    setQuantity(quantity + 1);
  };

  const subButton = async () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const obj = { price, name, urlImage, quantity };
    userCartData(obj);
  }, [quantity]);

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
        { Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </h1>
      <h2
        data-testid={ `customer_products__element-card-title-${count}` }
      >
        { name }
      </h2>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${count}` }
        onClick={ subButton }
      >
        -
      </button>
      <input
        type="text"
        value={ quantity }
        onChange={ (e) => setQuantity(Number(e.target.value)) }
        data-testid={ `customer_products__input-card-quantity-${count}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${count}` }
        onClick={ sumButton }
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
  userCartData: PropTypes.func.isRequired,
};

export default ProductsCard;
