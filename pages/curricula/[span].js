import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { fetchAllCurricula, fetchFilteredCurricula } from '../../libs/sheets'
import { slugify } from '../../utils'
import Section from '../../components/Section'
import { HiChevronRight } from 'react-icons/hi'

export default function SpanPage({ areas }) {
  const {
    query: { span },
  } = useRouter()

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
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{span.toUpperCase()}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box margin="0 auto" maxW="3xl">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          borderBottom="2px"
          borderColor="brand.300"
          paddingBottom="4"
          marginTop="1.5rem"
        >
          {span}
        </Heading>
        <Text padding={[2, 4, 6, 8]} fontSize={['md', 'lg', 'xl', '2xl']}>
          You have reached the curriculum page for grades {span.toUpperCase()}.
          Please select a subject area below to access the documents.
        </Text>
      </Box>
      <Section headerText={'Subject Areas'}>
        <List margin={'1.5rem auto'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {areas.map((area) => {
              const slug = slugify(area)
              return (
                <ListItem key={slug}>
                  <NextLink href={`${span}/${slug}`} passHref>
                    <Link
                      bg="brand.100"
                      color="white"
                      padding=".5rem 1rem"
                      display={'block'}
                      textAlign="center"
                      fontSize={['md', 'lg', 'xl']}
                    >
                      {area}
                    </Link>
                  </NextLink>
                </ListItem>
              )
            })}
          </SimpleGrid>
        </List>
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const curricula = await fetchAllCurricula()
  const allSpans = []
  curricula.forEach((curriculum) => {
    allSpans.push(curriculum.span)
  })
  const uniqueSpans = [...new Set(allSpans)]
  const paths = []
  uniqueSpans.forEach((span) => {
    paths.push({ params: { span: slugify(span) } })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { span },
  } = context
  const filteredCurricula = await fetchFilteredCurricula(span)
  const allAreas = []
  filteredCurricula.forEach((curriculum) => {
    allAreas.push(curriculum.area)
  })
  const uniqueAreas = [...new Set(allAreas)]
  return {
    props: {
      areas: uniqueAreas,
    },
    revalidate: 60,
  }
}
