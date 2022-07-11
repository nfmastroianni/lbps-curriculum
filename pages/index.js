import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { alphaSortArrayAscending } from '../utils'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import Section from '../components/Section'
import { FaFilePdf, FaRegCalendarAlt } from 'react-icons/fa'
import { fetchCurricula } from '../libs/sheets'

const NavWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

const ButtonLink = styled.a`
  text-align: center;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  padding: 0.75rem 1.2rem;
  background-color: var(--dark-green);
  color: white;
  border-radius: 3px;
  min-width: 300px;
  &:hover {
    box-shadow: 0 0 4px 2px var(--light-gray);
  }
`

export default function Home({ curricula }) {
  if (!curricula) {
    return (
      <>
        <h1>No Connection to Database</h1>
      </>
    )
  }
  const allSpans = []
  curricula.forEach((curriculum) => {
    curriculum.published === 'TRUE' && allSpans.push(curriculum.span)
  })
  const spans = [...new Set(allSpans)]
  return (
    <>
      <Head>
        <title>LBPS Curriculum and Instruction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid
          minH="250px"
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
          <GridItem colSpan={{ lg: 2 }} rowspan="1">
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
            <Text textAlign="center" fontSize={['md', 'lg', 'xl']}>
              <Heading as="h4" fontSize="xl" marginBottom="4">
                Office Information
              </Heading>
              <address>
                540 Broadway <br />
                Long Branch, NJ 07740
              </address>
              <br />
              <span style={{ fontWeight: 600 }}>Maria Graziano</span>
              <br />
              Confidential Secretary
              <br />
              732-571-2868 ext. 40240
            </Text>
          </GridItem>
        </Grid>

        {spans.map((span, i) => {
          let allAreas = []
          curricula.forEach((curriculum) => {
            if (curriculum.span == span && curriculum.published === 'TRUE') {
              allAreas.push(curriculum.area)
            }
          })
          const areas = [...new Set(allAreas)]
          alphaSortArrayAscending(areas)
          return (
            <Section key={span + i} id={span} headerText={span}>
              {areas.map((area, j) => {
                let areaCurricula = curricula.filter(
                  (curriculum) =>
                    curriculum.span === span &&
                    curriculum.area === area &&
                    curriculum.published === 'TRUE'
                )
                alphaSortArrayAscending(areaCurricula, 'title')
                return (
                  <div key={span + i + area + j}>
                    <h3>{area}</h3>
                    <Accordion allowToggle>
                      {areaCurricula.map((areaCurriculum) => {
                        return (
                          <AccordionItem key={areaCurriculum.title}>
                            <h4>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  {areaCurriculum.title}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h4>
                            <AccordionPanel pb={4}>
                              <List spacing={3}>
                                {areaCurriculum.guide && (
                                  <ListItem>
                                    <ListIcon as={FaFilePdf} />
                                    <a
                                      href={areaCurriculum.guide}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Curriculum Guide
                                    </a>
                                  </ListItem>
                                )}
                                {areaCurriculum.calendar && (
                                  <ListItem>
                                    <ListIcon as={FaRegCalendarAlt} />
                                    <a
                                      href={areaCurriculum.calendar}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Pacing Calendar
                                    </a>
                                  </ListItem>
                                )}
                                {!areaCurriculum.guide &&
                                  !areaCurriculum.calendar && (
                                    <ListItem>
                                      <p>
                                        No curriculum documents are available
                                        for this course at this time. Please
                                        check back later.
                                      </p>
                                    </ListItem>
                                  )}
                              </List>
                            </AccordionPanel>
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                  </div>
                )
              })}
            </Section>
          )
        })}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const curricula = await fetchCurricula()

  return {
    props: {
      curricula: curricula,
    },
    revalidate: 60, // netlify doesn't support values lower than 60
  }
}
