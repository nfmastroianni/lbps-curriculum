import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaFilePdf, FaRegCalendarAlt } from 'react-icons/fa'
import Layout from '../../components/Layout'
import { fetchAllCurricula, fetchFilteredCurricula } from '../../libs/sheets'
import { getSpanPaths } from '../../utils'
import { HiChevronRight } from 'react-icons/hi'

export default function FilteredCurriculaPage({
  curricula,
  area,
  span,
  areaSlug,
  spanSlug,
}) {
  return (
    <Layout>
      <Box
        textAlign="center"
        margin={'1.5rem 3rem'}
        paddingTop="1.5rem"
        fontSize={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <Breadcrumb separator={<HiChevronRight />}>
          <BreadcrumbItem>
            <NextLink href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <NextLink href="/curricula" passHref>
              <BreadcrumbLink>Curricula</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NextLink href={`/curricula/${spanSlug}`} passHref>
              <BreadcrumbLink>{span}</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{area}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box maxWidth="xl" margin={'0 auto'}>
        <Heading
          textAlign="center"
          borderBottom="2px"
          borderColor="brand.300"
          paddingBottom="4"
          marginTop="1.5rem"
        >
          {`${span} · ${area}`}
        </Heading>
        <Accordion allowToggle>
          {curricula.map((areaCurriculum) => {
            return (
              <AccordionItem key={areaCurriculum.title}>
                <h4>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={['sm', 'md', 'lg', 'xl']}
                    >
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
                    {!areaCurriculum.guide && !areaCurriculum.calendar && (
                      <ListItem>
                        <p>
                          No curriculum documents are available for this course
                          at this time. Please check back later.
                        </p>
                      </ListItem>
                    )}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const curricula = await fetchAllCurricula()
  const paths = getSpanPaths(curricula)

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context) {
  const { params } = context
  const spanSlug = params.slug[0]
  const areaSlug = params.slug[1]

  const curricula = await fetchFilteredCurricula(spanSlug, areaSlug)
  const area = curricula[0].area
  const span = curricula[0].span
  return {
    props: {
      curricula,
      area,
      span,
      areaSlug,
      spanSlug,
    },
    revalidate: 60,
  }
}
