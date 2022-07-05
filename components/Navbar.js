import Headroom from "react-headroom";
import styled from "@emotion/styled";
import Image from "next/image";

const Nav = styled.nav`
  padding: 2rem 0;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    color: white;
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
