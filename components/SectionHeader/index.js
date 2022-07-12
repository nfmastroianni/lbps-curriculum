import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'

const Header = styled.header`
  background-color: var(--dark-green);
  padding: 0.7rem 0;

  @media (min-width: 640px) {
    padding: 0.3rem;
    h2 {
      letter-spacing: 0.05rem;
    }
  }
`

export default function SectionHeader({ headerText }) {
  return (
    <Header>
      <Heading textAlign="center" color="white">
        {headerText}
      </Heading>
    </Header>
  )
}
