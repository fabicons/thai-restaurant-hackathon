import styled from "styled-components";
import Home from "../../src/assets/Home.png";
import "./../index.css"



export default function HomePage() {
  return (
    <div>
      <img src={Home} alt="Famacran Restaurant's Logo" width="100%" />
      <Button>Order</Button>
    </div>
  );
}
const Button = styled.button`
background-color: #fe951c;
z-Index: 3;
font-family: 'Poppins';
font-size: 2vh;
padding: 2vh;
border-radius:25px;
transform: translate(1000%, -800%);
  -ms-transform: translate(-50%, -50%);
`;