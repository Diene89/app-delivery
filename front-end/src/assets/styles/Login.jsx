import styled from 'styled-components';
import loginBg from '../images/login-bg.jpg';

const LoginContainer = styled.div`
  align-items: center;
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .login-background-color {
    background-color: #00000058;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 0;
  }

  .login-form-container {
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 3px 12px 0px rgb(0 0 0);
    display: flex;
    flex-direction: column;
    padding: 40px 20px 20px;
    position: relative;
    z-index: 2;
  }

  .login-logo {
    margin-bottom: 20px;
    width: 200px;
  }

  .login-title {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export default LoginContainer;
