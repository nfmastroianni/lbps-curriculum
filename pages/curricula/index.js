import { Box, Heading } from '@chakra-ui/react'
import Layout from '../../components/Layout'

export default function CurriculaIndex() {
  return (
    <Layout>
      <Box maxW="xl" margin="0 auto">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          borderBottom="2px"
          borderColor="brand.300"
          paddingBottom="4"
          marginTop="1.5rem"
        >
          CURRICULA INDEX PAGE
        </Heading>
      </Box>
    </Layout>
  )
}
