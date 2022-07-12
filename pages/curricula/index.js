import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { HiBookOpen, HiChevronRight } from 'react-icons/hi'

export default function CurriculaIndex() {
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
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Curricula</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box margin="0 auto" maxW="3xl">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          borderBottom="2px"
          borderColor="brand.300"
          padding={['.5rem 1rem', '1rem 1.5rem']}
          marginTop="1.5rem"
        >
          About Our Curricula
        </Heading>
        <Text
          padding={['.5rem 1rem', '1rem 1.5rem']}
          fontSize={['md', 'lg', 'xl', '2xl']}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nihil
          voluptas dicta obcaecati blanditiis esse perspiciatis voluptate
          architecto, aut unde? Omnis provident nostrum consequuntur, quae ipsam
          facilis exercitationem suscipit libero?
        </Text>
      </Box>
      <Section headerText={'K-5 Curricula'}>
        <Box margin="0 auto" maxW={'1280px'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center">
            <Text padding={[2, 4, 6, 8]} fontSize={['md', 'lg', 'xl', '2xl']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem
              magni pariatur assumenda eveniet accusamus, delectus dolor
              adipisci officiis laudantium dolore inventore facere, sapiente
              eaque dolorem corporis tempore suscipit impedit!
            </Text>
            <Box
              textAlign={'center'}
              border={'1px'}
              borderColor={'brand.300'}
              borderRadius="3px"
              padding="1rem 2rem"
              marginBottom={4}
            >
              <NextLink href="/curricula/k-5" passHref>
                <Link>
                  <Icon as={HiBookOpen} w={24} h={24} color="brand.200" />
                </Link>
              </NextLink>
              <NextLink href="/curricula/k-5" passHref>
                <Link>
                  <Text
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="bold"
                    color="brand.200"
                  >
                    K-5 Subjects
                  </Text>
                </Link>
              </NextLink>
            </Box>
          </SimpleGrid>
        </Box>
      </Section>
      <Section headerText={'6-8 Curricula'}>
        <Box margin="0 auto" maxW={'1280px'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center">
            <Box
              textAlign={'center'}
              border={'1px'}
              borderColor={'brand.300'}
              borderRadius="3px"
              padding="1rem 2rem"
              marginTop={4}
            >
              <NextLink href="/curricula/6-8" passHref>
                <Link>
                  <Icon as={HiBookOpen} w={24} h={24} color="brand.200" />
                </Link>
              </NextLink>
              <NextLink href="/curricula/6-8" passHref>
                <Link>
                  <Text
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="bold"
                    color="brand.200"
                  >
                    6-8 Subjects
                  </Text>
                </Link>
              </NextLink>
            </Box>
            <Text padding={[2, 4, 6, 8]} fontSize={['md', 'lg', 'xl', '2xl']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem
              magni pariatur assumenda eveniet accusamus, delectus dolor
              adipisci officiis laudantium dolore inventore facere, sapiente
              eaque dolorem corporis tempore suscipit impedit!
            </Text>
          </SimpleGrid>
        </Box>
      </Section>
      <Section headerText={'9-12 Curricula'}>
        <Box margin="0 auto" maxW={'1280px'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center">
            <Text padding={[2, 4, 6, 8]} fontSize={['md', 'lg', 'xl', '2xl']}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              dolorem eligendi adipisci optio accusamus necessitatibus, vitae,
              sapiente, temporibus unde iure deleniti! Molestiae nostrum
              officiis aspernatur assumenda cum minus voluptatum expedita.
            </Text>
            <Box
              textAlign={'center'}
              border={'1px'}
              borderColor={'brand.300'}
              borderRadius="3px"
              padding="1rem 2rem"
              marginBottom={4}
            >
              <NextLink href="/curricula/9-12" passHref>
                <Link>
                  <Icon as={HiBookOpen} w={24} h={24} color="brand.200" />
                </Link>
              </NextLink>
              <NextLink href="/curricula/9-12" passHref>
                <Link>
                  <Text
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="bold"
                    color="brand.200"
                  >
                    9-12 Subjects
                  </Text>
                </Link>
              </NextLink>
            </Box>
          </SimpleGrid>
        </Box>
      </Section>
    </Layout>
  )
}
