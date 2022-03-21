import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Image,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { createContext } from 'react';
import MobileMultiMenus from './MobileMultiMenus';
import DeskMultiMenus from './DeskMultiMenus';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    const {
        isOpen: isOpendrawer,
        onOpen: onOpendrawer,
        onClose: onClosedrawer,
    } = useDisclosure();

    return (

        <Box bg={'#e2e8f0'} >
            <Box bg={'white'} px={{ base: '2', md: '5', lg: '10' }} borderBottom={'1px solid #e2e8f0'} >
                <Flex
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    align={'center'}
                    justifyContent={'space-between'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onOpendrawer}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={"ghost"}
                            aria-label={"Toggle Navigation"}
                        />
                    </Flex>
                    <Flex justify={{ base: 'center', md: 'start' }}>
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
                    </Flex>


                    <Flex
                        // my={2}
                        display={{ base: "none", md: "flex" }}
                        justifyContent="space-around"
                    >
                        <DeskMultiMenus menus={menus} />

                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}>
                            Sign In
                        </Button>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'pink.400'}
                            href={'#'}
                            _hover={{
                                bg: 'pink.300',
                            }}>
                            Sign Up
                        </Button>
                    </Stack>
                </Flex>




                <Collapse in={isOpen} animateOpacity>
                    <MobileNav isOpendrawer={isOpendrawer}
                        onClosedrawer={onClosedrawer}
                        onToggleDrawer />
                </Collapse>
            </Box>
        </Box>
    );
}




export const DrawerToggle = createContext();

export const MobileNav = ({
    isOpendrawer,
    onClosedrawer,
    onToggleDrawer,
    state,
}) => {
    var data = "oka";

    return (
        <DrawerToggle.Provider value={onClosedrawer}>
            <Drawer
                placement="left"
                isOpen={isOpendrawer}
                onClose={onClosedrawer}
                w="200px"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">newscntrl Menu</DrawerHeader>

                    <DrawerBody>
                        <Stack
                            bg={useColorModeValue("white", "gray.800")}
                            p={4}
                            display={{ md: "none" }}
                        >
                            <MobileMultiMenus menus={menus} />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </DrawerToggle.Provider>
    );
};




const menus = [
    {
        label: "Menu 1",
        href: "/",
    },
    {
        label: "Menu 2",
        submenu: [
            {
                label: "Post",
                href: "/post",
            },
            {
                label: "Latest News 2",
                href: "/latest-news",
            },
            {
                label: "Full Width",
                href: "/full-width",
            },
        ]
    },
    {
        label: "Menu 3",
        href: "/",
        submenu: [
            {
                label: "Sub Menu 1",
                submenu: [

                    {
                        label: "Boom 2",
                        href: "/",
                    }
                ]
            },
            {
                label: "Sub Menu 2",
                submenu: [
                    {
                        label: "Deep 1",
                        href: "/",
                    },
                    {
                        label: "Deep 2",
                        submenu: [
                            {
                                label: "Lorem 1",
                                href: "/",
                            },
                            {
                                label: "Lorem 2",
                                submenu: [
                                    {
                                        label: "Super Deep",
                                        href: "/",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: "Sub Menu 3",
                href: "/",
            },
            {
                label: "Sub Menu 4",
                submenu: [
                    {
                        label: "Last 1",
                        href: "/",
                    },
                    {
                        label: "Last 2",
                        href: "/",
                    },
                    {
                        label: "Last 3",
                        href: "/",
                    }
                ]
            }
        ]
    },
    {
        label: "Menu 4",
        href: "/",
    }
];