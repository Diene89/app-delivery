import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 80px;
  background: green;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: relative;
    top:0;
    left: 0;

  ul {
    display: flex;
    justify-content: space-between;
  }

  ul li {
    margin: 30px 60px 0px 60px;
    list-style-type: none;
  }

  button {
    width: 200px;
    background: gray;
    border: none;
  }

  button: hover {
    cursor:pointer;
  }
`;

export default NavbarContainer;
