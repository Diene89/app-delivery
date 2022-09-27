import styled from 'styled-components';

const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 120px;
    height: 120px;
    margin: 30px;
  }

  .formLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    border: 1px solid black;
    width: 400px;
    height:560px;
    border-radius: 24px;
  }

  .formLogin form {
    height: 290px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
  
  .formLogin form label{
    display: flex;
    width: 300px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    font-size: 1em;
  }

  .formLogin form label input{
    width:290px;
    height: 48px;
    border-radius: 24px;
    padding-left: 20px;
    font-size: 1.2em;
  }

  button {
    width: 290px;
    height: 48px;
    margin-bottom: 12px;
    border-radius: 10px;
    font-size: 1.2em;
  }

  .register-button {
    background: white;
    border: none;
    color: black;
  }

  .login-button {
    background: white;    
  }

  .login-button:disabled {
    background: white;    
  }

`;

export default ContainerLogin;
