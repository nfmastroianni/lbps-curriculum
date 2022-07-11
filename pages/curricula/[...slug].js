import { Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function FilteredCurriculaPage() {
  const router = useRouter()
  console.log(router)
  return (
    <Box>
      <Heading>FILTERED CURRICULA PAGE</Heading>
    </Box>
  )
}
