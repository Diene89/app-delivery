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
    z-index: 1;
  }

  .checkout-table-body {
    font-weight: 400;
    text-align: center;
  }

  .checkout-table-body-td-item {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border-radius: 4px 0px 0px 4px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  .checkout-table-body-td-name {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    padding-left: 10px;
    max-width: 300px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .checkout-table-body-td-quantity {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

  .checkout-table-body-td-price {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

  .checkout-table-body-td-subtotal {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

  .checkout-table-body-td-button {
  }

  .checkout-table-body-td-button > button {
    background: linear-gradient(180deg, #FF9457 0%, #FF7B31 48.96%, #FF6A15 100%);
    border: none;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    border-radius: 0px 4px 4px 0px;
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
    background: linear-gradient(180deg, #FF9457 0%, #ff6309 48.96%, #e25300 100%);
  }

  .checkout-table-td-button-icon {
    position: relative;
    top: 3px;
    width: 22px;
  }
`;

export default CheckoutTableContainer;
