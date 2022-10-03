import styled from 'styled-components';

const ContainerOrders = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .orders-cards-container {
    background-color: #F5F6F6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    height: 80%;
    justify-content: space-evenly;
    margin: auto 0;
    overflow-y: scroll;
    padding: 15px;
    width: 90%;
  }

  .orders-cards-container::-webkit-scrollbar {
    width: 10px;
  }

  .orders-cards-container::-webkit-scrollbar-track {
    background: #fafafa;
  }

  .orders-cards-container::-webkit-scrollbar-thumb {
    background-color: #73aadd;
    border: 3px none #ffffff;
    border-radius: 10px;
  }
`;

export default ContainerOrders;
