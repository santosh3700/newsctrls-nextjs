"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 50959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function Container({ children  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: "container mx-auto px-5",
        children: children
    });
};


/***/ }),

/***/ 30654:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/alert.js





function alert_Alert({ preview  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: cn("border-b", {
            "bg-accent-7 border-accent-7 text-white": preview,
            "bg-accent-1 border-accent-2": !preview
        }),
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsx("div", {
                className: "py-2 text-center text-sm",
                children: preview ? /*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                        "This is a page preview.",
                        " ",
                        /*#__PURE__*/ _jsx(Link, {
                            href: "/api/exit-preview",
                            className: "underline hover:text-cyan duration-200 transition-colors",
                            children: "Click here"
                        }),
                        " ",
                        "to exit preview mode."
                    ]
                }) : /*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                        "The source code for this blog is",
                        " ",
                        /*#__PURE__*/ _jsx(Link, {
                            href: `https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`,
                            className: "underline hover:text-success duration-200 transition-colors",
                            children: "available on GitHub"
                        }),
                        "."
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js


// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };
function footer_Footer() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Box, {
            bg: "#002866",
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    children: /*#__PURE__*/ _jsx(Container, {
                        as: Stack,
                        maxW: "6xl",
                        py: 10,
                        children: /*#__PURE__*/ _jsxs(SimpleGrid, {
                            templateColumns: {
                                sm: "1fr 1fr",
                                md: "2fr 1fr 1fr 2fr"
                            },
                            spacing: 8,
                            children: [
                                /*#__PURE__*/ _jsxs(Stack, {
                                    spacing: 6,
                                    alignItems: "flex-start",
                                    children: [
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "/",
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                objectFit: "contain",
                                                src: process.env.LOGO,
                                                width: "100% !important",
                                                height: "80px"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Text, {
                                            color: "white",
                                            children: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Stack, {
                                    align: "flex-start",
                                    color: "white",
                                    children: [
                                        /*#__PURE__*/ _jsx(Heading, {
                                            size: "md",
                                            as: "h5",
                                            id: "footer-heading",
                                            children: "Quick Link"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Bollywood"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Sports"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "News"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Social News"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Stack, {
                                    align: "flex-start",
                                    color: "white",
                                    children: [
                                        /*#__PURE__*/ _jsx(Heading, {
                                            size: "md",
                                            as: "h5",
                                            id: "footer-heading",
                                            children: "Support"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Help Center"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Terms of Service"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Legal"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Privacy Policy"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Satus"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Stack, {
                                    align: "flex-start",
                                    color: "white",
                                    children: [
                                        /*#__PURE__*/ _jsx(Heading, {
                                            size: "md",
                                            as: "h5",
                                            id: "footer-heading",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Help Center"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Terms of Service"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Legal"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Privacy Policy"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: "Satus"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Box, {
                    borderTopWidth: 1,
                    borderStyle: "solid",
                    borderColor: useColorModeValue("gray.200", "gray.700"),
                    children: /*#__PURE__*/ _jsx(Container, {
                        as: Stack,
                        maxW: "6xl",
                        py: 4,
                        spacing: 4,
                        justify: {
                            md: "space-between"
                        },
                        align: {
                            md: "center"
                        },
                        children: /*#__PURE__*/ _jsx(Text, {
                            color: "white",
                            children: "\xa9 2022 Chakra Templates. All rights reserved"
                        })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/meta.js



function meta_Meta() {
    return /*#__PURE__*/ _jsxs(Head, {
        children: [
            /*#__PURE__*/ _jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "description",
                content: `A statically generated blog example using Next.js and ${CMS_NAME}.`
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:image",
                content: HOME_OG_IMAGE_URL
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js




function Layout({ preview , children  }) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Meta, {}),
            /*#__PURE__*/ _jsxs("div", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ _jsx(Alert, {
                        preview: preview
                    }),
                    /*#__PURE__*/ _jsx("main", {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 91662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(50959);
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(30654);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./components/GoogleAnalytics.jsx




const GA_TRACKING_ID = "G-0NG18K6BZ4";
const GoogleAnalytics = ()=>{
    const router = useRouter();
    useEffect(()=>{
        const handleRouteChange = (url)=>{
            window.gtag("config", GA_TRACKING_ID, {
                page_path: url
            });
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Script, {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
            }),
            /*#__PURE__*/ _jsx(Script, {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                }
            })
        ]
    });
};
/* harmony default export */ const components_GoogleAnalytics = ((/* unused pure expression or super */ null && (GoogleAnalytics)));

;// CONCATENATED MODULE: ./pages/_app.js




//import MainLayout from '../components/layout/main-layout'








const MyApp = ({ Component , pageProps  })=>{
    (0,react.useEffect)(()=>{
        window.OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
                appId: "d56b37f6-aabe-4162-af9b-f84619ecda46",
                safari_web_id: "web.onesignal.auto.3db514d6-c75f-4a27-ad99-adae19a9a814",
                promptOptions: {
                    slidedown: {
                        enabled: true,
                        autoPrompt: true,
                        timeDelay: 20,
                        pageViews: 1
                    }
                }
            });
        });
        return ()=>{
            window.OneSignal = undefined;
        };
    }, []); // <-- run this effect once on mount
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "manifest",
                        href: "/pwa/manifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/pwa/ios/50.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        "data-rh": "true",
                        name: "google-site-verification",
                        content: "3FCgkBGO8Qfael6rkqbx7be0JHNduxct6Xc7TFsc5_0"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        "data-rh": "true",
                        name: "facebook-domain-verification",
                        content: "vylwdr385iepjfnp4mkn0s77p6p94b"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                src: "https://cdn.onesignal.com/sdks/OneSignalSDK.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "afterInteractive",
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7076157039576041",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.ChakraProvider, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.ColorModeScript, {
                        initialColorMode: "default"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.CSSReset, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-0d1b80a048d4787e.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/7gWsz9lTLAFT7Ez7er3pv/_buildManifest.js","static/7gWsz9lTLAFT7Ez7er3pv/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-eeb1e4a6befe36e1.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-4d00332480e157e5.js","static/chunks/1bfc9850-a4a5e114ec240401.js","static/chunks/77-685e1fa15e3332f7.js","static/chunks/671-0e96020cb35f3acc.js","static/chunks/pages/index-cc7b4cac77e5ce79.js"],"/[...slug]":["static/chunks/webpack-eeb1e4a6befe36e1.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-4d00332480e157e5.js","static/chunks/1bfc9850-a4a5e114ec240401.js","static/chunks/77-685e1fa15e3332f7.js","static/chunks/817-5f72ecced89a5755.js","static/chunks/671-0e96020cb35f3acc.js","static/css/47b48ddb0a4ebed8.css","static/chunks/pages/[...slug]-c53ad04b13c3fcc2.js"],"/_app":["static/chunks/webpack-eeb1e4a6befe36e1.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-4d00332480e157e5.js","static/css/9c14d721444c232e.css","static/chunks/pages/_app-906ca55dc809a227.js"],"/_error":["static/chunks/webpack-eeb1e4a6befe36e1.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-4d00332480e157e5.js","static/chunks/pages/_error-0a004b8b8498208d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;