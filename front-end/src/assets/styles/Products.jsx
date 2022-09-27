import styled from 'styled-components';

const ContainerProducts = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position:absolute; top:240px;

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
      bottom: 70px;
      right: 40px;
      height: 80px;
      width: 20%;
    }
 
`;

export default ContainerProducts;
