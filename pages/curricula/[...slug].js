import { Box, Heading } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { fetchAllCurricula } from '../../libs/sheets'
import { slugify } from '../../utils'

export default function FilteredCurriculaPage() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <Box>
        <Heading>FILTERED CURRICULA PAGE</Heading>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const curricula = await fetchAllCurricula()
  const pairs = []
  curricula.forEach((curriculum) => {
    let pair = [curriculum.span, curriculum.area]
    pairs.push(pair)
  })
  let stringPairs = pairs.map(JSON.stringify)
  const uniquePairs = [...new Set(stringPairs)]
  const uniqueArray = Array.from(uniquePairs, JSON.parse)
  const paths = []
  uniqueArray.forEach((path) => {
    paths.push({ params: { slug: [path] } })
  })
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context) {
  console.log(context)
  return {
    props: {
      text: 'ooops!',
    },
  }
}
