import styled from "@emotion/styled";

const Header = styled.header`
  background-color: var(--dark-green);
  padding: 0.7rem 0;
  h2 {
    color: white;
    text-align: center;
  }
  @media (min-width: 640px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default function SectionHeader({ headerText }) {
  return (
    <Header>
      <h2>{headerText}</h2>
    </Header>
  );
}
