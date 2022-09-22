import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 80px;
  background: green;

  ul {
    display: flex;
    justify-content: space-between;
  }

  ul li {
    margin: 30px 60px 0px 60px;
    list-style-type: none;
  }
`;

export default NavbarContainer;
