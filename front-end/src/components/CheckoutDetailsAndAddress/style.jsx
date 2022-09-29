import styled from 'styled-components';

const ContainerDetailsAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 80%;

  .checkout-details-title {
    color: #343434;
    font-family: Roboto, sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
  }

  .checkout-details-container {
    background-color: #FBFFFE;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    min-width: 795px;
  }

  .checkout-details-subtitle {
    color: #001813;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    padding-left: 19px;
  }

  .checkout-details-options-container {
    display: flex;
  }

  .checkout-details-option {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 15px;
  }

  .checkout-detailts-input {
    background: #FFFFFF;
    border: 1px solid #001813;
    border-radius: 5px;
    height: 40px;
    padding-left: 19px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }

  .checkout-detailts-input::placeholder {
    color: #828282;
  }

  .checkout-details-finish-button-container {
    align-self: center;
    margin-bottom: 10px;
  }

  .checkout-details-finish-button-container > button {
    border: none;
    color: #F2FFFC;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #036B52;
    border-radius: 10px;
    height: fit-content;
    padding: 10px 20px;
    width: fit-content;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .checkout-details-finish-button-container > button > span {
    text-shadow: 2px 2px #000000;
  }
`;

export default ContainerDetailsAndAddress;
