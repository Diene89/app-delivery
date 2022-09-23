import styled from 'styled-components';

const ContainerAdmin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0.5rem;
  margin-left: 1rem;

  .formAdmin {
    margin-top: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(191,219,213,0.9);
    -webkit-box-shadow: 0 10px 8px 1px #b7b9b9e5;
    box-shadow: 0 10px 8px 1px #b7b9b9e5;
  }

  .admin-container {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }

  .admin-input {
    padding: 0.5rem;
  }

  .admin-input-span {
    margin-bottom: 0.2rem;
  }

  .admin-button {
    width: 110px;
    height: 35px;
    background: #036B52;
    border-radius: 8px;
    border: none;
    margin-top: 1.1rem;
    margin-right: 1rem ;
    margin-left: 0.7rem ;
    color: #F2FFFC;
  }

  .admin-button:disabled {
    opacity: 0.7;
  }

  .admin_manage__error_container {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .admin_manage__error_span {
    font-size: small;
    color: red;
  }
`;

export default ContainerAdmin;
