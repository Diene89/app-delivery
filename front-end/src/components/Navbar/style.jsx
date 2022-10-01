import styled from 'styled-components';

const NavbarContainer = styled.div`
  background: linear-gradient(180deg, #5C97CD 0%, #73AADD 50.52%, #48B3EF 100%);
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 15px;
  width: 100vw;

  .navbar-options-container {
    display: flex;
    flex: 2;
    justify-content: space-evenly;
  }

  .navbar-options-container a {
    color: #fff;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  .navbar-options-container a img {
    height: 25px;
    margin-right: 5px;
    position: relative;
    top: 5px;
    width: 25px;
  }

  .navbar-username-container {
    color: #fff;
    flex: 2;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }

  .navbar-logout-btn-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: relative;
    right: 20px;
  }

  .navbar-logout-btn-container button {
    background-color: #F5F6F6;
    box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    border: none;
    color: #181D3A;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    padding: 0 25px;
  }
`;

export default NavbarContainer;
