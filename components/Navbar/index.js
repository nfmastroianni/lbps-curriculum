import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'

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
  img {
    display: none;
  }
  @media (min-width: 640px) {
    img {
      display: inline;
    }
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
        <Show above='lg'>
          <Image
            src='/images/lbps_logo.png'
            height={50}
            width={50}
            alt='Long Branch Public Schools Seal'
          />
        </Show>
        <Show below='lg'>
          <p>HIDE ABOVE MD</p>
        </Show>
        <h1>LBPS Curriculum &amp; Instruction</h1>
      </Nav>
    </Headroom>
  )
}
