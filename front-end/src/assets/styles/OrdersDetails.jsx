import styled from 'styled-components';

const ContainerOrdersDetails = styled.div`
  align-items: center;
  background-color: #F5F6F6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .order-details-body {
    margin: auto 0;
    width: 90%;
  }

  .order-details-title {
    align-self: flex-start;
    font-size: 26px;
    font-weight: 500;
  }

  .order-details-infos-and-items-container {
    background: #FFFFFF;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 420px;
    margin-bottom: 30px;
    width: 100%;
  }

  .order-details-table-container {
    padding: 0 10px 0 20px;
    overflow-y: scroll;
  }

  .order-details-table-container::-webkit-scrollbar {
    width: 10px;
  }

  .order-details-table-container::-webkit-scrollbar-track {
    background: #fafafa;
  }

  .order-details-table-container::-webkit-scrollbar-thumb {
    background-color: #73aadd;
    border: 3px none #ffffff;
    border-radius: 10px;
  }

  .order-details-totalprice {
    align-self: flex-end;
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #fff;
    font-size: 24px;
    margin: 15px 20px;
    padding: 0 25px;
    width: fit-content;
  }
`;

export default ContainerOrdersDetails;
