import styled from 'styled-components';

const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  position: relative;
  z-index: 3;

  .register-form-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: center;
  }

  .register-form-label-title {
    color: #1D2633;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
  }

  .register-form-input {
    background-color: rgba(248, 252, 254, 0.25);
    border: 1px;
    border-radius: 50px;
    box-shadow: inset 0px 0px 0px 2px rgba(41, 114, 155, 0.25);
    font-size: 20px;
    height: 40px;
    padding: 20px;
    text-align: center;
    width: 350px;
  }

  .register-form-input:focus-visible {
    outline: #7CD7FE auto 2px;
  }

  .register-form-login-btn {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: 1px solid #7CD7FE;
    border-radius: 12px;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .register-form-login-btn:disabled {
    background: #94abc0;
    border: 1px solid #45b3ff9e;
    cursor: default;
  }

  .register-form-login-btn:disabled > span {
    color: #fff;
  }

  .register-form-login-btn-title {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
  }
`;

export default RegisterFormContainer;
