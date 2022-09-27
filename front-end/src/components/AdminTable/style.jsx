import styled from 'styled-components';

const AdminTableContainer = styled.div`
  table {
    width: 100%;
    text-align: center;
    border: none;
    border-collapse: separate;
    border-spacing: 0 5px;
  }

  thead {
    background-color: white;
  }

  th {
    padding: 10px;
  }

  td {
    padding: 15px;
  }

  .user-item {
    background-color: #2FC18C;
    border-radius: 10px 0 0 10px;
  }

  .user-nome {
    background-color: white;
    background-color: rgba(191,219,213,0.9);
  }
  
  .user-email {
    background-color: #036B52;
    color: white;
  }

  .user-tipo {
    background-color: #421981;
    color: white;
  }

  .user-excluir {
    background-color: #056CF9;
    border-radius: 0 10px 10px 0;
  }

  .user-excluir:hover {
    background: #043a85;
  }

  .admin-delete {
    background-color: transparent;
    border: none;
    color: #F2FFFC;
  }
`;

export default AdminTableContainer;
