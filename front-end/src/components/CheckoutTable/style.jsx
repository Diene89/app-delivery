import styled from 'styled-components';

const CheckoutTableContainer = styled.table`
  border-collapse:separate;
  border-spacing: 0 7px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  height: fit-content;
  width: 100%;

  .checkout-table-head {
    color: #001813;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  .checkout-table-head-item {
    background-color: #FBFFFE;
    font-weight: 400;
    position: sticky;
    text-align: center;
    top: 0;
  }

  .checkout-table-body {
    font-weight: 400;
    text-align: center;
  }

  .checkout-table-body-td-item {
    background-color: #2FC18C;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #001813;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }

  .checkout-table-body-td-description {
    background-color: #EAF1EF;
    color: #001813;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    padding-left: 10px;
    max-width: 300px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .checkout-table-body-td-quantity {
    background-color: #036B52;
    color: #F2FFFC;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-shadow: 2px 2px #000000;
  }

  .checkout-table-body-td-price {
    background-color: #421981;
    color: #F2FFFC;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-shadow: 2px 2px #000000;
  }

  .checkout-table-body-td-subtotal {
    background-color: #056CF9;
    color: #F2FFFC;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-shadow: 2px 2px #000000;
  }

  .checkout-table-body-td-button {
  }

  .checkout-table-body-td-button > button {
    background-color: #2FC18C;
    border: none;
    color: #F2FFFC;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    height: 100%;
    line-height: 26px;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .checkout-table-body-td-button > button:hover {
    background-color: #29a276;
  }
`;

export default CheckoutTableContainer;
