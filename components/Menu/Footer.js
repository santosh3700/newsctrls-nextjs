import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';



const SocialButton = ({
    children,
    label,
    href,
}) => {
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
            }}>
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
            <Box >
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                        spacing={8}>
                        <Stack spacing={6} alignItems={'flex-start'}>
                            <Link
                                href="/"
                            >
                                <Image
                                    objectFit="contain"
                                    src="https://mvpthemes.com/theleague/wp-content/themes/the-league/images/logos/logo-nav.png"
                                    width="100% !important"
                                    height="44px !important"
                                />
                            </Link>
                            <Text>
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum...
                            </Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Company</ListHeader>
                            <Link href={'#'}>About us</Link>
                            <Link href={'#'}>Blog</Link>
                            <Link href={'#'}>Contact us</Link>
                            <Link href={'#'}>Pricing</Link>
                            <Link href={'#'}>Testimonials</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Support</ListHeader>
                            <Link href={'#'}>Help Center</Link>
                            <Link href={'#'}>Terms of Service</Link>
                            <Link href={'#'}>Legal</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Satus</Link>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <ListHeader>About</ListHeader>
                            <Link href={'#'}>Help Center</Link>
                            <Link href={'#'}>Terms of Service</Link>
                            <Link href={'#'}>Legal</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Satus</Link>
                        </Stack>

                        {/* <Stack align={'flex-start'}>
                            <ListHeader>Stay up to date</ListHeader>
                            <Stack direction={'row'}>
                                <Input
                                    placeholder={'Your email address'}
                                    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                    border={0}
                                    _focus={{
                                        bg: 'whiteAlpha.300',
                                    }}
                                />
                                <IconButton
                                    bg={useColorModeValue('green.400', 'green.800')}
                                    color={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        bg: 'green.600',
                                    }}
                                    aria-label="Subscribe"
                                    icon={<BiMailSend />}
                                />
                            </Stack>
                        </Stack> */}
                    </SimpleGrid>
                </Container>
            </Box>


            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2022 Chakra Templates. All rights reserved</Text>

                </Container>
            </Box>


        </>

    );
}