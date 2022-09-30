import styled from 'styled-components';

const SellerOrderDetailsContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .order_details_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
    font-size: 17px;
    font-weight: 600;
    background-color: #bde3fa;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    height: 80px;
    width: 80vw;
  }

  .order_details_status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-left: 15px;
  }

  /* .order_details_button_preparing {
    display: ${(props) => {
    if (props.statusColor === 'Pendente') {
      return 'inLine';
    }
    return 'none';
  }};
  }

  .order_details_button_dispatch {
    display: ${(props) => {
    if (props.statusColor === 'Preparando') {
      return 'inLine';
    }
    return 'none';
  }};
  } */
  
  button {
    margin: 10px;
    border: none;
    padding: 15px;
    border-radius: 4px;
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    font-size: 17px;
    color: #010758;
  }

  .order_status {
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
    padding: 10px;
    border-radius: 4px;
  }
`;

export default SellerOrderDetailsContainer;
