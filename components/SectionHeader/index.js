import styled from '@emotion/styled'

const Header = styled.header`
  background-color: var(--dark-green);
  padding: 0.7rem 0;
  h2 {
    color: white;
    text-align: center;
    font-size: 1.3rem;
  }
  @media (min-width: 640px) {
    padding: 0.3rem;
    h2 {
      font-size: 1.7rem;
      letter-spacing: 0.05rem;
    }
  }
`

export default function SectionHeader({ headerText }) {
  return (
    <Header>
      <h2>{headerText}</h2>
    </Header>
  )
}
