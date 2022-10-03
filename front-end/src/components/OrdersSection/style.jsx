import styled from 'styled-components';

const OrdersDetailsContainer = styled.div`
  background-color: #fff;
  display: flex;

  .order-details-infos-container {
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    justify-content: space-between;
    padding: 7px 20px 7px 10px;
    width: 100%;
  }

  .order-details-infos-id-and-seller {
    align-items: center;
    display: flex;
    gap: 10px;
  }

  .order-details-infos-id {
    font-size: 20px;
    font-weight: 500;
  }

  .order-details-infos-name {
    font-size: 20px;
  }

  .order-details-infos-date {
    background: #F5F6F6;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    color: #181D3A;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;
  }

  .order-details-infos-status {
    background: #FAB752;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    color: #181D3A;
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
  }

  .order-details-infos-status-complete {
    background: rgba(0, 204, 155, 0.75);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    color: #181D3A;
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
  }

  .order-details-infos-btn {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 8px -1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    height: fit-content;
    width: fit-content;
  }

  .order-details-infos-btn:hover {
    background: linear-gradient(180deg, #5C97CD 0%, #3386d4 50.52%, #0584ce 100%);
  }

  .order-details-infos-btn:disabled {
    background: linear-gradient(180deg, #c4c4c4 0%, #a3a3a3 50.52%, #979797 100%);
    cursor: default;
  }
`;

export default OrdersDetailsContainer;
