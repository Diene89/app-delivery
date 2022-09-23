import styled from 'styled-components';

const ProductsCardContainer = styled.div`  
  width: 220px;
  height: 320px;
  margin: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: center;
  box-shadow: 0px 0px 8px -4px black;

  img { 
    width: 120px;
    height: 130px;
    margin: 0px 18px 0px 18px;
  }

  h1, h2 {
    width: 220px;
  }
`;

export default ProductsCardContainer;
