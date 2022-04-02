import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';

// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

export default function Footer() {
  return (
    <>
      <Box bg={'#002866'}>
        <Box>
          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid
              templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
              spacing={8}
            >
              <Stack spacing={6} alignItems={'flex-start'}>
                <Link href="/">
                  <Image
                    objectFit="contain"
                    src={process.env.LOGO}
                    width="100% !important"
                    height="80px"
                  />
                </Link>
                <Text color={'white'}>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum...
                </Text>
              </Stack>
              <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  Quick Link
                </Heading>
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>Bollywood</Link>
                <Link href={'#'}>Sports</Link>
                <Link href={'#'}>News</Link>
                <Link href={'#'}>Social News</Link>
                {/* Home Bollywood Sports News Social News */}
              </Stack>
              <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  Support
                </Heading>
                <Link href={'#'}>Help Center</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Legal</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Satus</Link>
              </Stack>

              <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  About
                </Heading>
                <Link href={'#'}>Help Center</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Legal</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Satus</Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text color={'white'}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
