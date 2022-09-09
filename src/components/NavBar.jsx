import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <a href="">
        <BsCart4 />
      </a>
    </Nav>
  );
}

const Nav = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  background-color: #fe951c;
  padding: 2.75vh;
`;

export default NavBar;
