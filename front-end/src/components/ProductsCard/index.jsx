import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsCardContainer from './style';

function ProductsCard({
  price,
  urlImage,
  name,
  count,
  userCartData,
  id,
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
    const { productCart } = JSON.parse(localStorage.getItem('user'));
    const findItem = productCart.find((item) => Number(item.id) === id);

    if (findItem) {
      setQuantity(findItem.quantity);
    }
  }, []);

  useEffect(() => {
    const obj = { price, name, quantity, id };
    userCartData(obj);
  }, [quantity]);

  return (
    <ProductsCardContainer>
      <img
        alt={ name }
        className="product-card-img"
        data-testid={ `customer_products__img-card-bg-image-${count}` }
        src={ urlImage }
      />

      <div className="product-card-bottom-infos">
        <span
          className="product-card-price"
          data-testid={ `customer_products__element-card-price-${count}` }
        >
          { Number(price)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </span>

        <span
          className="products-card-title"
          data-testid={ `customer_products__element-card-title-${count}` }
          title={ name }
        >
          { name }
        </span>

        <div className="product-card-btn-container">
          <button
            className="product-card-decrease-btn"
            data-testid={ `customer_products__button-card-rm-item-${count}` }
            disabled={ quantity === 0 }
            onClick={ subButton }
            type="button"
          >
            <span>-</span>
          </button>

          <input
            className="product-card-quantity-input"
            data-testid={ `customer_products__input-card-quantity-${count}` }
            onChange={ (e) => setQuantity(Number(e.target.value)) }
            type="text"
            value={ quantity }
          />

          <button
            className="product-card-increase-btn"
            data-testid={ `customer_products__button-card-add-item-${count}` }
            onClick={ sumButton }
            type="button"
          >
            +
          </button>
        </div>

      </div>

    </ProductsCardContainer>
  );
}

ProductsCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  userCartData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductsCard;
