import Headroom from "react-headroom";
import styled from "@emotion/styled";
import Image from "next/image";

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 3px var(--dark-gray);
  h1 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 1.1rem;
    margin-left: 0.5rem;
  }
  @media (min-width: 640px) {
    h1 {
      font-size: 1.4rem;
      margin-left: 0.8rem;
    }
  }
`;

export default function Navbar(props) {
  return (
    <Headroom>
      <Nav>
        <Image
          src="/images/curriculum_logo.png"
          height={50}
          width={50}
          alt="Long Branch Public Schools Seal"
        />
        <h1>LBPS Curriculum Warehouse</h1>
      </Nav>
    </Headroom>
  );
}
