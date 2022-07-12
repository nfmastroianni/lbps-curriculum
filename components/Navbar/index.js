import styled from '@emotion/styled'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Flex, Link, Heading, Show, background } from '@chakra-ui/react'
import DrawerNav from './Drawer'

export default function Navbar() {
  return (
    <Box position={'fixed'} width="100%" zIndex={99}>
      <Flex
        bg={'rgba(255,255,255,.95)'}
        color={'brand.400'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow={'sm'}
        align={'center'}
        justify={{ base: 'end', md: 'center' }}
      >
        <DrawerNav />
        <Box display={'flex'} alignItems="center">
          <Show above="lg">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src="/images/lbps_logo.png"
                  height={50}
                  width={50}
                  alt="Long Branch Public Schools Seal"
                />
              </Link>
            </NextLink>
          </Show>
          <Heading
            as="h1"
            ml={{ lg: 4 }}
            fontSize={['md', 'lg', 'xl', '2xl', '3xl']}
            color={'brand.200'}
          >
            <NextLink href="/">
              <Link>LBPS Curriculum &amp; Instruction</Link>
            </NextLink>
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}
