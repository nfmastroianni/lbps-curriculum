import styled from "@emotion/styled";
import Image from "next/image";

const Foot = styled.footer`
  margin-top: auto;
  padding: 1rem;
  min-height: 5rem;
  background-color: var(--dark-gray);
  color: var(--light-gray);
  text-align: center;
  p {
    margin: 0;
    font-size: 0.65rem;
    font-style: italic;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <Image
        src="/images/curriculum_logo.png"
        alt="LBPS Curriculum Seal"
        width={40}
        height={40}
      />
      <p>Together We Can, Juntos Nós Podemos, Juntos Podemos</p>
    </Foot>
  );
}
