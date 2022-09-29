import styled from 'styled-components';

const NavbarContainer = styled.div`
  background: green;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100vw;

  .navbar-options-container {
    display: flex;
    padding: 15px 0;
    width: 100%;
  }

  .navbar-option {
    flex: 1;
    height: 100%;
    text-align: center;
  }

  button {
    width: 200px;
    background: gray;
    border: none;
  }

  button:hover {
    cursor:pointer;
  }
`;

export default NavbarContainer;
