import styled from 'styled-components';

const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 80%;

  .checkout-orders-container {
    background-color: #FBFFFE;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    max-width: 1280px;
    min-width: 795px;
    padding: 15px 15px 5px;
    position: relative;
    width: 100%;
  }

  .checkout-orders-title {
    font-family: Roboto, sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    padding-left: 10px;
  }

  .checkout-orders-table-container {
    max-height: 200px;
    overflow-y: scroll;
  }

  .checkout-orders-amount-container {
    display: flex;
    justify-content: flex-end;
    padding: 5px 15px 0;
    padding-right: 15px;
  }

  .checkout-orders-amount {
    align-items: center;
    background-color: #036B52;
    border-radius: 10px;
    color: #F2FFFC;
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    height: fit-content;
    line-height: 36px;
    padding: 10px 20px;
    text-align: center;
    width: fit-content;
  }

  .checkout-orders-amount {
    text-shadow: 2px 2px #000000;
  }
`;

export default ContainerOrders;
