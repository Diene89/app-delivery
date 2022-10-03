import styled from 'styled-components';

const OrderDetailsTableContainer = styled.table`
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
    border-radius: 0px 4px 4px 0px;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`;

export default OrderDetailsTableContainer;
