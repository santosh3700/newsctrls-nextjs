import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  DrawerFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { getHeaderMenuByName } from '../../lib/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HelperData } from '../../helpers/helper-data';
import { DesktopNav } from './header/DesktopNav';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaBell,
} from 'react-icons/fa';
import { FaTram, FaTv, FaSearch } from 'react-icons/fa';
import Headroom from 'react-headroom';
// import { MobileNav } from './header/mobileNav';
import { MobileNav } from './header/MobileNav';

// export const DrawerToggle = createContext();

function Header({ menu }) {
  // const { isOpen, onToggle } = useDisclosure();

  const { helperData } = HelperData();

  const { toggleColorMode } = useColorMode();

  const menuItems = menu.menuItems.edges;
  //console.log("menu =", menuItems)

  // new part start
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer,
  } = useDisclosure();

  // end
  //test comment

  return (
    <Headroom>
      <Box bg={'#e2e8f0'}>
        <Box
          bg={process.env.color.PRIMARY_COLOR}
          px={{ base: '2', md: '5', lg: '10' }}
          borderBottom={'1px solid #e2e8f0'}
        >
          <Flex
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            // py={{ base: 2 }}
            px={{ base: 4 }}
            align={'center'}
            justifyContent={'space-between'}
          >
            <Flex
              flex={{ base: 0, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', lg: 'none' }}
            >
              <IconButton
                onClick={onOpendrawer}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} color={'white'} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex justify={{ base: 'center', md: 'start' }}>
              <Link href="/">
                <Image
                  padding="0px"
                  objectFit="contain"
                  src={process.env.image.LOGO}
                  width="100% !important"
                  height="40px !important"
                />
              </Link>
            </Flex>

            <Flex
              // my={2}
              display={{ base: 'none', lg: 'flex' }}
              justifyContent="space-around"
            >
              <DesktopNav menuItems={menuItems} />
              {/* <DeskMultiMenus menus={menus} /> */}
            </Flex>

            {/* <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
            >
              <Link href="/">
                <Icon color={'white'} as={FaBell} boxSize={6} />
              </Link>
              <Link href="/">
                <Icon color={'white'} as={FaTram} boxSize={6} />
              </Link>
              <Link href="/">
                <Icon color={'white'} as={FaTv} boxSize={6} />
              </Link>
              <Icon
                color={'white'}
                as={FaSearch}
                onClick={onOpen}
                boxSize={6}
              />
            </Stack> */}
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody p={'0px'}>
                <InputGroup>
                  <InputLeftElement children={<FaSearch />} />
                  <Input type="text" placeholder="Search" />
                </InputGroup>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav
              menuItems={menuItems}
              isOpendrawer={isOpendrawer}
              onClosedrawer={onClosedrawer}
              onToggleDrawer
            />
          </Collapse>
        </Box>
      </Box>
    </Headroom>
  );
}

export default Header;
