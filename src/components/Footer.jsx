import styled from "styled-components";

function Footer() {
  return (

      <FooterDiv>
        <p>Made by Fam-Acran with Love &copy; 2022 All Rights Reserved</p>
      </FooterDiv>

  );
}

const FooterDiv = styled.div`
margin-top: -6.3%;
  background-color: #fe951c;
  z-index:2;
  width: 100%;
  text-align: center;
height:100%
`;

export default Footer;
