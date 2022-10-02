import styled from 'styled-components';

const ContainerProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100vw;

  .products-section {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
    max-height: 435px;
    overflow-y: scroll;
    padding: 5px 0;
    width: 85%;
  }

  .products-section::-webkit-scrollbar {
    width: 10px;
  }

  .products-section::-webkit-scrollbar-track {
    background: #fafafa;
  }

  .products-section::-webkit-scrollbar-thumb {
    background-color: #73aadd;
    border: 3px none #ffffff;
    border-radius: 10px;
  }

  .total-button {
    align-self: flex-end;
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 24px;
    height: fit-content;
    margin-right: 110px;
    margin-top: 17px;
    padding: 10px 15px;
    width: fit-content;
  }
`;

export default ContainerProducts;
