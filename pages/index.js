import Head from 'next/head'
import Link from 'next/link'
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Section id='top'>
          <h2>Introductory Heading</h2>
          <p>
            Introductory paragraph explaining how this site is organized. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sit
            exercitationem laborum consectetur voluptas recusandae, ab, quo
            voluptates odio ad nisi quod, repudiandae ex iure delectus molestiae
            eum quidem placeat unde.
          </p>
        </Section>
        <Section>
          <h2>Jump to a Grade Span</h2>
          <NavWrapper>
            {spans.map((span) => {
              return (
                <Link key={span} href={`#${span}`} passHref>
                  <ButtonLink>{span}</ButtonLink>
                </Link>
              )
            })}
          </NavWrapper>
        </Section>
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
                                <Box flex='1' textAlign='left'>
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
                                      target='_blank'
                                      rel='noreferrer'
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
                                      target='_blank'
                                      rel='noreferrer'
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
