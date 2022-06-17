"use strict";
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 77314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23863);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const SocialButton = ({ children , label , href  })=>{
    return /*#__PURE__*/ _jsxs(chakra.button, {
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
        rounded: "full",
        w: 8,
        h: 8,
        cursor: "pointer",
        as: "a",
        href: href,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
        _hover: {
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
        },
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, {
                children: label
            }),
            children
        ]
    });
};
const ListHeader = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Text, {
        fontWeight: "500",
        fontSize: "lg",
        mb: 2,
        children: children
    });
};
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            bg: "#002866",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                        maxW: "6xl",
                        py: 10,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                            templateColumns: {
                                sm: "1fr 1fr",
                                md: "2fr 1fr 1fr 2fr"
                            },
                            spacing: 8,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    spacing: 6,
                                    alignItems: "flex-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                objectFit: "contain",
                                                src: {"LOGO":"https://newsctrls.com/wp-content/uploads/2022/04/news-ctrls.com-1.png"}.LOGO,
                                                width: "100% !important",
                                                height: "80px"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            children: {"MORE":"More","FOOTER_DESC":"NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.FOOTER_DESC
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    align: "flex-start",
                                    color: "white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            size: "md",
                                            as: "h5",
                                            id: "footer-heading",
                                            children: "Quick Link"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "#",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/category/bollywood/",
                                            children: "Bollywood"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/category/sports-news/",
                                            children: "Sports News "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/category/social-news/",
                                            children: "Social News"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    align: "flex-start",
                                    color: "white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            size: "md",
                                            as: "h5",
                                            id: "footer-heading",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/about-us/",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/contact-us/",
                                            children: "Contact US"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/disclaimer/",
                                            children: "Disclaimer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "/privacy-policy/",
                                            children: "Privacy Policy"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderTopWidth: 1,
                    borderStyle: "solid",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                        maxW: "6xl",
                        py: 4,
                        spacing: 4,
                        justify: {
                            md: "space-between"
                        },
                        align: {
                            md: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "white",
                            children: "\xa9 2022 Nextwebguru. All rights reserved"
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 12811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs.prod.js
var chakra_ui_icons_cjs_prod = __webpack_require__(23005);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./helpers/helper-data.js

const HelperData = ()=>{
    const { colorMode  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
    const helperData = {
        "isDark": colorMode == "dark"
    };
    return {
        helperData
    };
};
/* harmony default export */ const helper_data = ((/* unused pure expression or super */ null && (HelperData)));

// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.cjs.js
var emotion_styled_cjs = __webpack_require__(81133);
;// CONCATENATED MODULE: ./components/layout/header/DesktopNav.js





const UL = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: Flex;
`;
const ULSub = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = emotion_styled_cjs["default"].li``;
const Item = emotion_styled_cjs["default"].div`
  font-weight: 600;
  display: flex;
  padding: 5px 8px;
  color: white;
  align-items: center;
`;
const Label = emotion_styled_cjs["default"].span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = emotion_styled_cjs["default"].span`
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
    transform: ${(props)=>props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
const DesktopNav = ({ menuItems  })=>{
    // console.log('checknavmenu=', menuItems);
    const { 0: activeMenus , 1: setActiveMenus  } = (0,react.useState)([]);
    const handleMenuClick = (data)=>{
    // console.log(data);
    };
    const handleArrowClick = (menuName)=>{
        let newActiveMenus = [
            ...activeMenus
        ];
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
    // console.log('data', menuItems);
    const ListMenu = ({ dept , data , hasSubMenu , menuName , menuIndex  })=>{
        // console.log('checkmenuitem=', data);
        return /*#__PURE__*/ jsx_runtime.jsx(LI, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Popover, {
                trigger: "hover",
                placement: "right-end",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverTrigger, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Item, {
                            dept: dept,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: data.node.path,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                        onClick: ()=>handleMenuClick(data),
                                        children: data.node.label
                                    })
                                }),
                                hasSubMenu && /*#__PURE__*/ jsx_runtime.jsx(Arrow, {
                                    onClick: ()=>handleArrowClick(menuName),
                                    toggle: activeMenus.includes(menuName)
                                })
                            ]
                        })
                    }),
                    hasSubMenu && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverContent, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverBody, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(SubMenu, {
                                dept: dept,
                                data: data.submenu,
                                toggle: activeMenus.includes(menuName),
                                menuIndex: menuIndex
                            })
                        })
                    })
                ]
            })
        });
    };
    const SubMenu = ({ dept , data , toggle , menuIndex  })=>{
        dept = dept + 1;
        return /*#__PURE__*/ jsx_runtime.jsx(ULSub, {
            id: "submenu",
            children: data.map((menu, index)=>{
                const menuName = `submenu-${dept}-${menuIndex}-${index}`;
                // console.log('greater', menu);
                return /*#__PURE__*/ jsx_runtime.jsx(ListMenu, {
                    dept: dept,
                    data: menu,
                    hasSubMenu: menu.submenu,
                    menuName: menuName,
                    menuIndex: index
                }, menuName);
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.HStack, {
        id: "mainul",
        listStyleType: " none",
        children: menuItems.map((menu, index)=>{
            // console.log('aagya', menu);
            const dept = 1;
            const menuName = `menu-${dept}-${index}`;
            return /*#__PURE__*/ jsx_runtime.jsx(ListMenu, {
                dept: dept,
                data: menu,
                hasSubMenu: menu.submenu,
                menuName: menuName,
                menuIndex: index
            }, menuName);
        })
    });
};

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
// EXTERNAL MODULE: ./node_modules/react-headroom/dist/index.js
var dist = __webpack_require__(51517);
;// CONCATENATED MODULE: ./components/layout/header/MobileNav.js






const MobileNav_UL = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MobileNav_LI = emotion_styled_cjs["default"].li``;
const MobileNav_Item = emotion_styled_cjs["default"].div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 5px 8px;
  color: #3e485d;
  padding-left: ${(props)=>`${props.dept * 8}px`};
  align-items: center;
`;
const MobileNav_Label = emotion_styled_cjs["default"].span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const MobileNav_Arrow = emotion_styled_cjs["default"].span`
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
    transform: ${(props)=>props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const DrawerToggle = /*#__PURE__*/ (0,react.createContext)();
const MobileNav = ({ menuItems , isOpendrawer , onClosedrawer , onToggleDrawer , state ,  })=>{
    //   var data = 'oka';
    // console.log('checkMObilemenu=', menuItems);
    return /*#__PURE__*/ jsx_runtime.jsx(DrawerToggle.Provider, {
        value: onClosedrawer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Drawer, {
            placement: "left",
            isOpen: isOpendrawer,
            onClose: onClosedrawer,
            w: "200px",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerOverlay, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.DrawerContent, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerCloseButton, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerHeader, {
                            borderBottomWidth: "1px",
                            children: "newscntrla Masenu"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerBody, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Stack, {
                                bg: (0,chakra_ui_react_cjs_prod.useColorModeValue)("white", "gray.800"),
                                p: 4,
                                display: {
                                    md: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(MobileMultiMenus, {
                                    menus: menuItems
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const MobileMultiMenus = ({ menus , state , actions , libraries  })=>{
    const { 0: activeMenus , 1: setActiveMenus  } = (0,react.useState)([]);
    const toggleDrawer = (0,react.useContext)(DrawerToggle);
    // console.log('hellodatasss', toggleDrawer);
    const handleMenuClick = (data)=>{
    // console.log(data);
    };
    const handleArrowClick = (menuName)=>{
        let newActiveMenus = [
            ...activeMenus
        ];
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
    const ListMenu = ({ dept , data , hasSubMenu , menuName , menuIndex  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileNav_LI, {
            id: "mobileMenu",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileNav_Item, {
                    dept: dept,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: data.node.path,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MobileNav_Label, {
                                onClick: ()=>{
                                    toggleDrawer();
                                    handleMenuClick(data);
                                },
                                children: data.node.label
                            })
                        }),
                        hasSubMenu && /*#__PURE__*/ jsx_runtime.jsx(MobileNav_Arrow, {
                            onClick: ()=>handleArrowClick(menuName),
                            toggle: activeMenus.includes(menuName)
                        })
                    ]
                }),
                hasSubMenu && /*#__PURE__*/ jsx_runtime.jsx(SubMenu, {
                    dept: dept,
                    data: data.submenu,
                    toggle: activeMenus.includes(menuName),
                    menuIndex: menuIndex
                })
            ]
        });
    const SubMenu = ({ dept , data , toggle , menuIndex  })=>{
        if (!toggle) {
            return null;
        }
        dept = dept + 1;
        return /*#__PURE__*/ jsx_runtime.jsx(MobileNav_UL, {
            children: data.map((menu, index)=>{
                const menuName = `submenu-${dept}-${menuIndex}-${index}`;
                return /*#__PURE__*/ jsx_runtime.jsx(ListMenu, {
                    dept: dept,
                    data: menu,
                    hasSubMenu: menu.submenu,
                    menuName: menuName,
                    menuIndex: index
                }, menuName);
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(MobileNav_UL, {
        children: menus.map((menu, index)=>{
            const dept = 1;
            const menuName = `menu-${dept}-${index}`;
            return /*#__PURE__*/ jsx_runtime.jsx(ListMenu, {
                dept: dept,
                data: menu,
                hasSubMenu: menu.submenu,
                menuName: menuName,
                menuIndex: index
            }, menuName);
        })
    });
};
/* harmony default export */ const header_MobileNav = ((/* unused pure expression or super */ null && (MobileMultiMenus)));

;// CONCATENATED MODULE: ./components/layout/header.js











// import { MobileNav } from './header/mobileNav';

// export const DrawerToggle = createContext();
function Header({ menu  }) {
    // const { isOpen, onToggle } = useDisclosure();
    const { helperData  } = HelperData();
    const { toggleColorMode  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
    const menuItems = menu.menuItems.edges;
    //console.log("menu =", menuItems)
    // new part start
    const { isOpen , onToggle , onOpen , onClose  } = (0,chakra_ui_react_cjs_prod.useDisclosure)();
    const { isOpen: isOpendrawer , onOpen: onOpendrawer , onClose: onClosedrawer ,  } = (0,chakra_ui_react_cjs_prod.useDisclosure)();
    // end
    //test comment
    return /*#__PURE__*/ jsx_runtime.jsx(dist/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
            bg: "#e2e8f0",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                bg: {"PRIMARY_COLOR":"#1e4683"}.PRIMARY_COLOR,
                px: {
                    base: "2",
                    md: "5",
                    lg: "10"
                },
                borderBottom: "1px solid #e2e8f0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                        color: (0,chakra_ui_react_cjs_prod.useColorModeValue)("gray.600", "white"),
                        minH: "60px",
                        // py={{ base: 2 }}
                        px: {
                            base: 4
                        },
                        align: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                flex: {
                                    base: 0,
                                    md: "auto"
                                },
                                ml: {
                                    base: -2
                                },
                                display: {
                                    base: "flex",
                                    lg: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.IconButton, {
                                    onClick: onOpendrawer,
                                    icon: isOpen ? /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.CloseIcon, {
                                        w: 3,
                                        h: 3
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.HamburgerIcon, {
                                        w: 5,
                                        h: 5,
                                        color: "white"
                                    }),
                                    variant: "ghost",
                                    "aria-label": "Toggle Navigation"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                justify: {
                                    base: "center",
                                    md: "start"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                        padding: "0px",
                                        objectFit: "contain",
                                        src: {"LOGO":"https://newsctrls.com/wp-content/uploads/2022/04/news-ctrls.com-1.png"}.LOGO,
                                        width: "100% !important",
                                        height: "40px !important"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                // my={2}
                                display: {
                                    base: "none",
                                    lg: "flex"
                                },
                                justifyContent: "space-around",
                                children: /*#__PURE__*/ jsx_runtime.jsx(DesktopNav, {
                                    menuItems: menuItems
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Modal, {
                        isOpen: isOpen,
                        onClose: onClose,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalOverlay, {}),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalContent, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalBody, {
                                    p: "0px",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.InputGroup, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.InputLeftElement, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaSearch */.U41, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Input, {
                                                type: "text",
                                                placeholder: "Search"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Collapse, {
                        in: isOpen,
                        animateOpacity: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx(MobileNav, {
                            menuItems: menuItems,
                            isOpendrawer: isOpendrawer,
                            onClosedrawer: onClosedrawer,
                            onToggleDrawer: true
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 23668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23863);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89583);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23005);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);






// import CategoryA from './post-category/CategoryA';
// import SideBarNews from './post-category/SideBarNews';
const SideBarNews = (props)=>{
    const { newsData  } = props;
    // console.log('newsdata', newsData.edges.length);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        paddingRight: "3%",
        className: "desktopShareContainer",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                display: "flex",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            display: "flex",
                            alignItems: "baseline",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.DragHandleIcon, {
                                    color: "red.600"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                    mb: 2,
                                    color: "#000",
                                    fontSize: "17px",
                                    lineHeight: "22px",
                                    fontWeight: "700",
                                    px: "1",
                                    overflowWrap: "anywhere",
                                    noOfLines: 1,
                                    children: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.SIDEBAR.SIDEBAR_NAME
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.SIDEBAR.SIDEBAR_SLUG,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "baseline",
                            px: "3%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                    mb: 2,
                                    color: "#C53030 ",
                                    fontSize: "17px",
                                    lineHeight: "22px",
                                    fontWeight: "700",
                                    px: "1",
                                    overflowWrap: "anywhere",
                                    noOfLines: 4,
                                    children: {"MORE":"More","FOOTER_DESC":"NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaPlay */ .gmG, {
                                    color: "#C53030",
                                    size: 14
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: [
                    newsData.edges && newsData.edges.slice(0, 1).map((item, key)=>{
                        return item && item.node && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.node.uri,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                cursor: "pointer",
                                border: "1px solid #d1d1d1",
                                mb: "2",
                                h: "auto",
                                w: "100%",
                                src: item.node.featuredImage.node.sourceUrl,
                                alt: item.node.title
                            }, key)
                        });
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            px: "3%",
                            children: newsData.edges && newsData.edges.slice(1, 6).map((item, key)=>{
                                return item && item.node && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        mb: 2,
                                        cursor: "pointer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            templateColumns: {
                                                md: "3fr 7fr",
                                                base: "3fr 7fr"
                                            },
                                            gap: "4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                                    mb: "2",
                                                    h: "auto",
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                                        textAlign: "justify",
                                                        lineHeight: "normal",
                                                        fontSize: "sm",
                                                        noOfLines: 2,
                                                        children: item.node.title
                                                    })
                                                })
                                            ]
                                        })
                                    }, key)
                                });
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: [
                    newsData.edges && newsData.edges.slice(6, 7).map((item, key)=>{
                        return item && item.node && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.node.uri,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                cursor: "pointer",
                                border: "1px solid #d1d1d1",
                                mb: "2",
                                h: "auto",
                                w: "100%",
                                src: item.node.featuredImage.node.sourceUrl,
                                alt: item.node.title
                            }, key)
                        });
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            px: "3%",
                            children: newsData.edges && newsData.edges.slice(8, 15).map((item, key)=>{
                                return item && item.node && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        mb: 2,
                                        cursor: "pointer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            templateColumns: {
                                                md: "3fr 7fr",
                                                base: "3fr 7fr"
                                            },
                                            gap: "4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                                    mb: "2",
                                                    h: "auto",
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                                        textAlign: "justify",
                                                        lineHeight: "normal",
                                                        fontSize: "sm",
                                                        noOfLines: 2,
                                                        children: item.node.title
                                                    })
                                                })
                                            ]
                                        })
                                    }, key)
                                });
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarNews);


/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BV": () => (/* binding */ getHeaderMenuByName),
/* harmony export */   "DT": () => (/* binding */ getAllPostsForHome),
/* harmony export */   "N_": () => (/* binding */ getPostDetailsByUri),
/* harmony export */   "ST": () => (/* binding */ getAllPostsWithUri),
/* harmony export */   "Yd": () => (/* binding */ getCateogryRecentPostbyName),
/* harmony export */   "cb": () => (/* binding */ getPageDetailsByUri)
/* harmony export */ });
/* unused harmony exports getPreviewPost, getAllPostsWithSlug, getPostAndMorePosts */
const API_URL = "https://newsctrls.stellate.sh/";
async function fetchAPI(query, { variables  } = {}) {
    const headers = {
        "Content-Type": "application/json"
    };
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }
    const res = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        // console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data;
}
async function getPreviewPost(id, idType = "DATABASE_ID") {
    const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
        variables: {
            id,
            idType
        }
    });
    return data.post;
}
async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
    return data?.posts;
}
async function getAllPostsWithUri() {
    const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `);
    return data?.posts;
}
async function getAllPostsForHome(preview) {
    const data = await fetchAPI(`
    query AllPosts {
      posts(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data?.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && previewData?.post;
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug));
    const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
    const isDraft = isSamePost && postPreview?.status === "draft";
    const isRevision = isSamePost && postPreview?.status === "publish";
    const data = await fetchAPI(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        ` : ""}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
        variables: {
            id: isDraft ? postPreview.id : slug,
            idType: isDraft ? "DATABASE_ID" : "SLUG"
        }
    });
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id;
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
        const revision = data.post.revisions.edges[0]?.node;
        if (revision) Object.assign(data.post, revision);
        delete data.post.revisions;
    }
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node  })=>node.slug !== slug);
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop();
    return data;
}
async function getCateogryRecentPostbyName(typeName, categoryName) {
    const data = await fetchAPI(`
    query CategoryPostbyName($categoryName: String! ="") {
  posts(where: {${typeName}: $categoryName }, first: 21) {
    pageInfo {
      seo {
        schema {
          raw
        }
      }
    }
    edges {
      node {
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            uri
          }
        }
        date
        uri
      }
    }
  }
}
`, {
        variables: {
            categoryName: categoryName
        }
    });
    return data?.posts;
}
async function getPostDetailsByUri(uri) {
    const data = await fetchAPI(`
   fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
      url
      locale
    }

    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
            uri
          }
        }
      }
      seo {
        title
        schema {
          raw
        }
        canonical
        metaDesc
        metaKeywords
        twitterDescription
        twitterTitle
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
      }
    }



    query PostDetailsbyUri($id: ID = "") {
      post(
        id: $id,
        idType: URI
      ) {
        ...PostFields
        content
      }
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }){
        edges {
          node {
            title
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            id: uri
        }
    });
    return data;
}
async function getPageDetailsByUri(uri) {
    const data = await fetchAPI(`
    fragment PageFields on Page {
      title
      slug
      date
      content
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      seo {
        title
        schema {
          raw
        }
        canonical
        metaDesc
        metaKeywords
        twitterDescription
        twitterTitle
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
      }
    }

    query PageDetailsByUri($id: ID = "") {
      page(id: $id, idType: URI){
        ...PageFields
      }
    }

  `, {
        variables: {
            id: uri
        }
    });
    return data?.page;
}
async function getHeaderMenuByName(menu_name) {
    const data = await fetchAPI(`
    query GetHeaderMenuByName($id: ID = "") {
  menu(id: $id, idType: NAME) {
    menuItems {
      edges {
        node {
          path
          label
        }
      }
    }
  }
}
  `, {
        variables: {
            id: menu_name
        }
    });
    return data;
}


/***/ })

};
;