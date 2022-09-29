import styled from 'styled-components';

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;

  .login-form-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    text-align: center;
  }

  .login-form-label-title {
    color: #1D2633;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
  }

  .login-form-input {
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

  .login-form-input:focus-visible {
    outline: #7CD7FE auto 2px;
  }

  .login-form-login-btn {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border: 1px solid #7CD7FE;
    border-radius: 12px;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .login-form-login-title {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
  }

  .login-form-register-btn {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export default LoginFormContainer;
