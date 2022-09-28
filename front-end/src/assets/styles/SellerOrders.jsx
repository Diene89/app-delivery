import styled from 'styled-components';

const SellerOrdersContainer = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin: 10px;
  
  button {
    width: 500px;
    height: 155px;
    display: flex;
    font-size: 26px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border: none;
    background-color: #bde3fa;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
  }

  .order_container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .order_price {
    display: flex;
    flex-direction: column;
  }

  .status_order {
    background-color: ${(props) => {
    if (props.statusColor === 'Preparando') {
      return '#66CC00';
    }
    if (props.statusColor === 'Entregue') {
      return '#00CC9B';
    }
    if (props.statusColor === 'Em Trânsito') {
      return '#3469fa';
    }
    return '#FAB752';
  }};
    padding: 25px;
    border-radius: 4px;
  }

  span {
    margin: 5px;
  }

  .order_address {
    font-size: 20px;
  }
`;

export default SellerOrdersContainer;
