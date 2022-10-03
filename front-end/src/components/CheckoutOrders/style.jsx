import styled from 'styled-components';

const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 10px;
  width: 80%;

  .checkout-orders-container {
    background-color: #FBFFFE;
    border: 1px solid #B1C2BE;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
    height: 280px;
    max-width: 1280px;
    min-width: 795px;
    padding: 15px 15px 5px;
    position: relative;
    width: 100%;
  }

  .checkout-orders-title {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    padding-left: 10px;
  }

  .checkout-orders-table-container {
    padding-right: 7px;
    max-height: 205px;
    overflow-y: scroll;
  }

  .checkout-orders-table-container::-webkit-scrollbar {
    width: 10px;
  }

  .checkout-orders-table-container::-webkit-scrollbar-track {
    background: #fafafa;
  }

  .checkout-orders-table-container::-webkit-scrollbar-thumb {
    background-color: #73aadd;
    border: 3px none #ffffff;
    border-radius: 10px;
  }

  .checkout-orders-amount-container {
    display: flex;
    justify-content: flex-end;
    padding: 5px 15px 0;
    padding-right: 15px;
  }

  .checkout-orders-amount {
    align-items: center;
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border-radius: 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 25%);
    color: #fff;
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    height: fit-content;
    line-height: 36px;
    padding: 5px 30px;
    text-align: center;
    width: fit-content;
  }

  @media screen and (min-height: 750px) {
    .checkout-orders-container {
      height: 400px;
    }

    .checkout-orders-table-container {
      max-height: 325px;
    }
  }

  @media screen and (min-height: 900px) {
    .checkout-orders-container {
      height: 530px;
    }

    .checkout-orders-table-container {
      max-height: 450px;
    }
  }

  @media screen and (min-height: 1080px) {
    .checkout-orders-container {
      height: 700px;
    }

    .checkout-orders-table-container {
      max-height: 625px;
    }
  }
`;

export default ContainerOrders;
