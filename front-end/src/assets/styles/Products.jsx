import styled from 'styled-components';

const ContainerProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .products-section {
    max-width: 1446px;
    min-width: 400px;
    height: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }

  .total-button {
    position: fixed;
    bottom: 10%;
    right: 5%;
    height: 80px;
    width: 20%;
  }
`;

export default ContainerProducts;
