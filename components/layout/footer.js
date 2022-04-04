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

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

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
                    src={process.env.image.LOGO}
                    width="100% !important"
                    height="80px"
                  />
                </Link>
                <Text color={'white'}>{process.env.text.FOOTER_DESC}</Text>
              </Stack>
              <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  Quick Link
                </Heading>
                {/* Home Bollywood Sports News Social News */}
                <Link href={'#'}>Home</Link>
                <Link href={'/category/bollywood/'}>Bollywood</Link>
                <Link href={'/category/sports-news/'}>Sports News </Link>

                <Link href={'/category/social-news/'}>Social News</Link>
              </Stack>
              <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  Company
                </Heading>
                <Link href={'/about-us/'}>About Us</Link>
                <Link href={'/contact-us/'}>Contact US</Link>
                <Link href={'/disclaimer/'}>Disclaimer</Link>
                <Link href={'/privacy-policy/'}>Privacy Policy</Link>
              </Stack>

              {/* <Stack align={'flex-start'} color={'white'}>
                <Heading size="md" as="h5" id="footer-heading">
                  About
                </Heading>
                <Link href={'#'}>Help Center</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Legal</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Satus</Link>
              </Stack> */}
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
            <Text color={'white'}>© 2022 Nextwebguru. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
