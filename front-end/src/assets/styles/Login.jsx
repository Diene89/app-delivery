import styled from 'styled-components';

const LoginContainer = styled.div`
  align-items: center;
  background-color: #F5F6F6;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .login-form-container {
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 12px -1px rgba(99, 186, 235, 0.25);
    display: flex;
    flex-direction: column;
    padding: 40px 20px 20px;
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
