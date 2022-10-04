import styled from 'styled-components';

const AdminTableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0 7px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  height: fit-content;
  width: 100%;

  .admin-table-head {
    color: #001813;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  .admin-table-head-item {
    background-color: #fff;
    font-weight: 400;
    position: sticky;
    text-align: center;
    top: 0;
    z-index: 1;
  }

  .admin-table-body {
    font-weight: 400;
    text-align: center;
  }

  .admin-table-body-td-item {
    background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
    border-radius: 4px 0px 0px 4px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  .admin-table-body-td-name {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    padding: 0 10px;
    max-width: 200px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .admin-table-body-td-email {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    max-width: 200px;
    padding: 0 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .admin-table-body-td-role {
    background-color: #fff;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    color: #181D3A;
    font-size: 20px;
    font-weight: 500;
    max-width: 70px;
    line-height: 26px;
  }

  .admin-table-body-td-button > button {
    background: linear-gradient(180deg, #FF9457 0%, #FF7B31 48.96%, #FF6A15 100%);
    border: none;
    border-bottom: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    border-top: 1px solid #8b8b8b;
    border-radius: 0px 4px 4px 0px;
    color: #F2FFFC;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    height: 100%;
    line-height: 26px;
    padding: 0 20px;
    margin: 0;
    width: 100%;
  }

  .admin-table-body-td-button > button:hover {
    background: linear-gradient(180deg, #FF9457 0%, #ff6309 48.96%, #e25300 100%);
  }

  .admin-table-td-button-icon {
    position: relative;
    top: 3px;
    width: 22px;
  }
`;

export default AdminTableContainer;
