import styled from 'styled-components';

const ContainerDetailsAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  margin-top: 15px;
  width: 80%;

  .checkout-details-title {
    color: #343434;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
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
    align-items: center;
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 25%);
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    height: fit-content;
    line-height: 36px;
    padding: 5px 50px;
    text-align: center;
    width: fit-content;
  }

  .checkout-details-finish-button-container > button:hover {
    background: linear-gradient(180deg, #5C97CD 0%, #438fd6 50.52%, #1a9eeb 100%);
  }
`;

export default ContainerDetailsAndAddress;
