import styled from 'styled-components';

const ProductsCardContainer = styled.div`
  align-content: stretch;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 2px 1px rgba(60, 148, 231, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: center;
  text-align: center;
  width: 150px;

  .product-card-img {
    flex: 2;
    height: 100px;
    margin-bottom: 10px;
  }

  .product-card-bottom-infos {
    align-items: center;
    background-color: #F5FCFD;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 10px 5px;
    width: 100%;
  }

  .product-card-price {
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
  }

  .products-card-title {
    display: -webkit-box;
    font-size: 16px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .product-card-btn-container {
    display: flex;
    height: 25px;
    box-shadow: 0px 0px 0px 2px rgba(60, 148, 231, 0.25);
  }

  .product-card-quantity-input {
    background: #fff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    width: 50px;
  }

  .product-card-decrease-btn, .product-card-increase-btn {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: none;
    border-radius: 2px 0px 0px 2px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    width: 25px;
  }

  .product-card-decrease-btn:disabled {
    background: #b9b9b9;
    cursor: default;
  }
`;

export default ProductsCardContainer;
