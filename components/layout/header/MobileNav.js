import React, { createContext, useState, useContext } from 'react';
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
  PhoneIcon,
} from '@chakra-ui/icons';

import { FaBell, FaTram, FaTv, FaSearch } from 'react-icons/fa';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LI = styled.li``;
const Item = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 5px 8px;
  color: #3e485d;
  padding-left: ${(props) => `${props.dept * 8}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #3e485d;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${(props) => (props.toggle ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
import styled from '@emotion/styled';

export const DrawerToggle = createContext();

export const MobileNav = ({
  menuItems,
  isOpendrawer,
  onClosedrawer,
  onToggleDrawer,
  state,
}) => {
  //   var data = 'oka';

  console.log('checkMObilemenu=', menuItems);

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
          <DrawerHeader borderBottomWidth="1px">newscntrla Masenu</DrawerHeader>

          <DrawerBody>
            <Stack
              bg={useColorModeValue('white', 'gray.800')}
              p={4}
              display={{ md: 'none' }}
            >
              <MobileMultiMenus menus={menuItems} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DrawerToggle.Provider>
  );
};

const MobileMultiMenus = ({ menus, state, actions, libraries }) => {
  const [activeMenus, setActiveMenus] = useState([]);

  const toggleDrawer = useContext(DrawerToggle);
  console.log('hellodatasss', toggleDrawer);

  const handleMenuClick = (data) => {
    console.log(data);
  };

  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI id="mobileMenu">
      <Item dept={dept}>
        <Link href={data.node.path}>
          <Label
            onClick={() => {
              toggleDrawer();
              handleMenuClick(data);
            }}
          >
            {data.node.label}
          </Label>
        </Link>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    );
  };

  return (
    <UL>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </UL>
  );
};

export default MobileMultiMenus;
