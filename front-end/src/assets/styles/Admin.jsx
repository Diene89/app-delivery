import styled from 'styled-components';

const ContainerAdmin = styled.div`
  align-items: center;
  background-color: #F5F6F6;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 100vw;

  .admin-title-and-form-container {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .admin_manage__error_container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90vw;
  }

  .admin_manage__error_span {
    color: red;
    font-size: small;
  }

  .admin-title {
    color: #181D3A;
    font-family: Roboto;
    font-size: 32px;
    line-height: 32px;
    padding-left: 7px;
  }

  .admin_manage__table-container{
    height: 330px;
    width: 90%;
  }

  .admin-table-container {
    box-shadow: 2px 4px 8px 0px #919191;
    background: #fff;
    border-radius: 4px;
    height: 300px;
    margin-top: 0.5rem;
    overflow-y: scroll;
    padding: 0 15px;
  }

  .admin-table-container::-webkit-scrollbar {
    width: 10px;
  }

  .admin-table-container::-webkit-scrollbar-track {
    background: #fafafa;
  }

  .admin-table-container::-webkit-scrollbar-thumb {
    background-color: #73aadd;
    border: 3px none #ffffff;
    border-radius: 10px;
  }
`;

export default ContainerAdmin;
