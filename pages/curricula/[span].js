import { Box, Heading } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function SpanPage() {
  const {
    query: { span },
  } = useRouter()
  return (
    <Layout>
      <Box margin="0 auto" maxW="xl">
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
      </Box>
    </Layout>
  )
}
