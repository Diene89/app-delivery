import styled from 'styled-components';

const OrdersCardContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;

  .orders-order-card-link {
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #181D3A;
    display: flex;
    text-decoration: none;
  }

  .orders-order-card-order {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    justify-content: space-around;
    line-height: 25px;
    padding: 7px;
  }

  .orders-order-card-status-date-amount {
    align-items: center;
    background: #F5FCFD;
    border-radius: 4px;
    display: flex;
    flex: 2;
    gap: 10px;
    justify-content: center;
    padding: 10px 7px;
  }

  .orders-order-card-status {
    align-items: center;
    background: #FAB752;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex: 1;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    height: 100%;
    padding: 0 10px;
  }

  .orders-order-card-date-and-amount {
    border-radius: 4px;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 5px;
  }

  .orders-order-card-date {
    background: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    flex: 1;
    font-family: Roboto;
    font-size: 20px;
    padding: 0 5px;
    text-align: center;
  }

  .orders-order-card-amount {
    background: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    flex: 1;
    font-family: Roboto;
    font-size: 20px;
    text-align: center;
  }
`;

export default OrdersCardContainer;
