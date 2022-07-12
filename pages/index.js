import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>LBPS Curriculum and Instruction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid
          minH="250px"
          maxW="2560px"
          margin="0 auto"
          templateRows={{ lg: 'repeat(3, 1fr)' }}
          templateColumns={{ lg: 'repeat(5, 1fr)' }}
          justifyItems="center"
          padding="4"
        >
          <GridItem
            paddingBottom={{ base: 2, lg: 4 }}
            colSpan={{ lg: 2 }}
            rowSpan={{ lg: 2 }}
            alignSelf="end"
          >
            <Image
              src="/images/curriculum_logo.png"
              alt="LBPS Seal"
              width={300}
              height={300}
              priority
            />
          </GridItem>
          <GridItem colSpan={{ lg: 3 }} rowSpan="1" alignSelf="end">
            <Heading
              borderBottom="2px"
              borderColor="brand.300"
              paddingBottom="3"
            >
              Introductory Heading
            </Heading>
          </GridItem>
          <GridItem colSpan={{ lg: 3 }} rowSpan="1">
            <Text
              fontSize={['md', 'lg', 'xl', '2xl']}
              maxW={['2xl', '3xl', '4xl']}
              padding="4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit
              laboriosam ratione ipsam quaerat, sapiente porro, alias tempora
              officiis est fugit tempore magnam deleniti nesciunt veritatis
              velit quisquam sint rerum?
            </Text>
          </GridItem>
          <GridItem colSpan={{ lg: 2 }} rowSpan="1" alignSelf="end">
            <Heading
              as="h3"
              fontSize={'2xl'}
              textAlign="center"
              color="brand.200"
              borderBottom={{ base: '2px', lg: '0px' }}
              borderColor="brand.300"
              marginBottom={{ base: 4, lg: 0 }}
            >
              Nicole Esposito
              <br /> Assistant Superintendent <br /> of Curriculum &amp;
              Instruction
            </Heading>
          </GridItem>
          <GridItem colSpan={{ lg: 3 }} rowSpan="1">
            <Heading
              as="h4"
              marginBottom="4"
              fontSize={['lg', 'xl', '2xl']}
              textAlign="center"
            >
              Office Information
            </Heading>
            <address style={{ textAlign: 'center' }}>
              540 Broadway <br />
              Long Branch, NJ 07740
            </address>
            <br />
            <Text textAlign="center" fontSize={['md', 'lg', 'xl']}>
              <span style={{ fontWeight: 600 }}>Maria Graziano</span>
              <br />
              Confidential Secretary
              <br />
              732-571-2868 ext. 40240
            </Text>
          </GridItem>
        </Grid>
        <Section headerText="Department Overview"></Section>
      </Layout>
    </>
  )
}
