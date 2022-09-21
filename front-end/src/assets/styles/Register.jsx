import styled from 'styled-components';

const ContainerRegister = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .formRegister {
    align-items: center;
    background-color: #EAF1EF;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height:508px;
    justify-content: space-evenly;
    width: 425px;
  }

  .register-title {
    font-family: Roboto, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    height: 80px;
    line-height: 42px;
    text-align: center;
    width: 425px;
  }

  .register-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 371px;
  }

  .register-input-span {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    height: 35px;
    line-height: 28px;
    padding-left: 19px;
    text-align: left;
    width: 100%;
  }

  .register-input {
    background-color: #FFFFFF;
    border: 1px solid #001813;
    border-radius: 5px;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    height: 70.42px;
    padding-left: 19px;
    text-align: left;
    width: 100%;
  }

  .register-input::placeholder {
    color: #828282;
  }

  .register-button {
    background-color: #036B52;
    border: none;
    border-radius: 10px;
    height: 59.35px;
    width: 371px;
  }

  .register-button-span {
    color: #F2FFFC;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
  }

  .register-error-span {
    color: #878787;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin-top: 30px;
  }
`;

export default ContainerRegister;
