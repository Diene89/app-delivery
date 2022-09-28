import styled from 'styled-components';

const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  height: 469px;
  width: 80%;

  .checkout-orders-container {
    background-color: #FBFFFE;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    margin-top: 10px;
    min-width: 795px;
    max-width: 1280px;
    padding: 15px;
    position: relative;
    width: 100%;
  }

  .checkout-orders-title {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 42px;
    padding-left: 10px;
  }

  .checkout-orders-table-container {
    max-height: 300px;
    overflow-y: scroll;
  }

  .checkout-orders-amount {
    color: #F2FFFC;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #036B52;
    border-radius: 10px;
    height: fit-content;
    padding: 10px 20px;
    width: fit-content;
  }

  .checkout-orders-amount {
    text-shadow: 2px 2px #000000;
  }
`;

export default ContainerOrders;
