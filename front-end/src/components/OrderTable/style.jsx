import styled from 'styled-components';

const OrderTableContainer = styled.div`
  width: 80vw;

  table {
    width: 100%;
    text-align: center;
    border: none;
    border-collapse: separate;
    border-spacing: 0 5px;
  }

  thead {
    background-color: white;
  }

  th {
    padding: 10px;
  }

  td {
    padding: 15px;
  }

  .product-item {
    background-color: #2FC18C;
    border-radius: 10px 0 0 10px;
  }

  .product-nome {
    background-color: white;
    background-color: rgba(191,219,213,0.9);
  }
  
  .product-quantity {
    background-color: #036B52;
    color: white;
  }

  .product-price {
    background-color: #421981;
    color: white;
  }

  .product-subtotal {
    background-color: #056CF9;
    border-radius: 0 10px 10px 0;
  }

  .total_price {
    width: 140px;
    float: right;
    margin-top: 20px;
    background-color: #036B52;
    color: white;
    padding: 15px;
    font-weight: 600;
    border-radius: 4px;
  }
`;

export default OrderTableContainer;
