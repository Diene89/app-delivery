import styled from 'styled-components';

const AdminFormContainer = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 4px 8px 0px #919191;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  .admin-input-container {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    width: 70%;
  }

  .admin-input-span {
    color: #181D3A;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 30px;
    padding-left: 5px;
  }

  .admin-input, .admin-input-password, .admin-input-dropdown {
    border: 1px;
    border-radius: 7px;
    box-shadow: inset 0px 0px 0px 2px rgba(41, 114, 155, 0.25);
    font-size: 20px;
    height: 35px;
    line-height: 20px;
    padding: 5px 0 5px 15px;
  }

  .admin-input-password::placeholder {
    position: relative;
    top: 5px;
  }

  .admin-button-container {

  }

  .admin-input-dropdown {
    padding: 5px 0 5px 7px;
  }

  .admin-button {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 7px;
    color: #F2FFFC;
    cursor: pointer;
    font-size: 17px;
    font-family: Roboto;
    font-weight: 500;
    height: 35px;
    padding: 0 15px;
    position: relative;
    top: 15px;
    width: fit-content;
  }

  .admin-button:disabled {
    background: linear-gradient(180deg, #c4c4c4 0%, #a3a3a3 50.52%, #979797 100%);
    cursor: default;
  }
`;

export default AdminFormContainer;
