import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Heading, Show } from '@chakra-ui/react'
import DrawerNav from './Drawer'

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: 0 0 6px 3px var(--dark-gray);
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 1.1rem;
    margin-left: 0.5rem;
  }
  .chakra-button {
    position: absolute;
    left: 1rem;
    &:hover {
      background-color: var(--dark-gray);
    }
  }
  @media (min-width: 30em) {
    justify-content: center;
  }
  @media (min-width: 62em) {
    h1 {
      font-size: 1.4rem;
      margin-left: 0.8rem;
    }
  }
`

export default function Navbar(props) {
  return (
    <Headroom>
      <Nav>
        <Show above="lg">
          <Image
            src="/images/lbps_logo.png"
            height={50}
            width={50}
            alt="Long Branch Public Schools Seal"
          />
        </Show>

        <DrawerNav />

        <Heading as="h1" justifySelf={{ sm: 'center' }}>
          LBPS Curriculum &amp; Instruction
        </Heading>
      </Nav>
    </Headroom>
  )
}
