import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
  Link,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: Flex;
`;

const ULSub = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li``;
const Item = styled.div`
  font-weight: 600;
  display: flex;
  padding: 5px 8px;
  color: white;
  align-items: center;
`;

const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  width: 30px;
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

export const DesktopNav = ({ menuItems }) => {
  console.log('checknavmenu=', menuItems);
  const [activeMenus, setActiveMenus] = useState([]);

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
  console.log('data', menuItems);

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => {
    console.log('checkmenuitem=', data);
    return (
      <LI>
        <Popover trigger={'hover'} placement={'right-end'}>
          <PopoverTrigger>
            <Item dept={dept}>
              <Link href={data.node.path}>
                <Label onClick={() => handleMenuClick(data)}>
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
          </PopoverTrigger>
          {hasSubMenu && (
            <PopoverContent>
              <PopoverBody>
                <SubMenu
                  dept={dept}
                  data={data.submenu}
                  toggle={activeMenus.includes(menuName)}
                  menuIndex={menuIndex}
                />
              </PopoverBody>
            </PopoverContent>
          )}
        </Popover>
      </LI>
    );
  };

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    dept = dept + 1;

    return (
      <ULSub id="submenu">
        {data.map((menu, index) => {
          const menuName = `submenu-${dept}-${menuIndex}-${index}`;
          console.log('greater', menu);

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
      </ULSub>
    );
  };

  return (
    <HStack id="mainul" listStyleType=" none">
      {menuItems.map((menu, index) => {
        console.log('aagya', menu);
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
    </HStack>
  );
};
