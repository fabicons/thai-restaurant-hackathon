import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <Link to="/home">
        <AiOutlineHome />
      </Link>
      <Link to="/food">
        <BiFoodMenu />
      </Link>
      <Link to="/cart">
        <BsCart4 />
      </Link>
    </Nav>
  );
}

const Nav = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  background-color: #fe951c;
  padding: 2.75vh;
  gap: 2vh;

`;

export default NavBar;
