"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 90594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(1514)

      const appMod = __webpack_require__(91662)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(48213)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(97345),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/",
        buildId: "7gWsz9lTLAFT7Ez7er3pv",
        escapedBuildId: "7gWsz9lTLAFT7Ez7er3pv",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"b9032902b132cacc1e4e72cc97bbf189",previewModeSigningKey:"4a7aa1fb8494937dc701cee92cdd2e56be96c2913f20caf50ac9f1af30973eff",previewModeEncryptionKey:"eb2899090fe59eac6c4b8784db8379be8822ed347968eeed5d6d42cccfc2e222"}
      })
      
    

/***/ }),

/***/ 48213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./components/avatar.js


function avatar_Avatar({ author  }) {
    const name = author ? author.firstName && author.lastName ? `${author.firstName} ${author.lastName}` : author.name : null;
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "w-12 h-12 relative mr-4",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: author.avatar.url,
                    layout: "fill",
                    className: "rounded-full",
                    alt: name
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "text-xl font-bold",
                children: name
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/date.js


function date_Date({ dateString  }) {
    const date = parseISO(dateString);
    return /*#__PURE__*/ _jsx("time", {
        dateTime: dateString,
        children: format(date, "LLLL	d, yyyy")
    });
};

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/cover-image.js




function cover_image_CoverImage({ title , coverImage , uri  }) {
    const image = /*#__PURE__*/ _jsx(Image, {
        priority: true,
        width: 2000,
        height: 1000,
        alt: `Cover Image for ${title}`,
        src: coverImage?.sourceUrl,
        className: cn("shadow-small", {
            "hover:shadow-medium transition-shadow duration-200": uri
        })
    });
    return /*#__PURE__*/ _jsx("div", {
        className: "sm:mx-0",
        children: uri ? /*#__PURE__*/ _jsx(Link, {
            href: uri,
            children: /*#__PURE__*/ _jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    });
};

;// CONCATENATED MODULE: ./components/post-preview.js






function post_preview_PostPreview({ title , coverImage , date , excerpt , author , slug , uri ,  }) {
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: coverImage && /*#__PURE__*/ _jsx(CoverImage, {
                    title: title,
                    coverImage: coverImage,
                    uri: uri
                })
            }),
            /*#__PURE__*/ _jsxs(Box, {
                p: 4,
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        as: "h3",
                        fontSize: "large",
                        fontWeight: "bold",
                        className: "text-3xl mb-3 leading-snug",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: uri,
                            children: /*#__PURE__*/ _jsx("a", {
                                className: "hover:underline",
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "text-lg mb-4",
                        children: /*#__PURE__*/ _jsx(Date, {
                            dateString: date
                        })
                    }),
                    /*#__PURE__*/ _jsx(Avatar, {
                        author: author
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/more-stories.js


function MoreStories({ posts  }) {
    return /*#__PURE__*/ _jsx("section", {
        children: /*#__PURE__*/ _jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
            children: posts.map(({ node  })=>/*#__PURE__*/ _jsx(PostPreview, {
                    title: node.title,
                    coverImage: node.featuredImage?.node,
                    date: node.date,
                    author: node.author?.node,
                    slug: node.slug,
                    uri: node.uri,
                    excerpt: node.excerpt
                }, node.slug))
        })
    });
};

;// CONCATENATED MODULE: ./components/hero-post.js






function HeroPost({ title , coverImage , date , excerpt , author , slug , uri ,  }) {
    return /*#__PURE__*/ _jsxs("section", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: coverImage && /*#__PURE__*/ _jsx(CoverImage, {
                    title: title,
                    coverImage: coverImage,
                    uri: uri
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsxs(Box, {
                    p: 4,
                    children: [
                        /*#__PURE__*/ _jsx(Text, {
                            as: "h3",
                            fontSize: "large",
                            fontWeight: "bold",
                            className: "mb-4 text-4xl lg:text-6xl leading-tight",
                            children: /*#__PURE__*/ _jsx(Link, {
                                href: uri,
                                children: /*#__PURE__*/ _jsx("a", {
                                    className: "hover:underline",
                                    dangerouslySetInnerHTML: {
                                        __html: title
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "mb-4 md:mb-0 text-lg",
                            children: /*#__PURE__*/ _jsx(Date, {
                                dateString: date
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./components/layout/header.js + 3 modules
var header = __webpack_require__(12811);
// EXTERNAL MODULE: ./components/layout/footer.js
var footer = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs.prod.js
var chakra_ui_icons_cjs_prod = __webpack_require__(23005);
;// CONCATENATED MODULE: ./components/post-category/CategoryA.js






const CategoryA = (props)=>{
    const { newsData  } = props;
    // console.log('checkcategoryA', newsData);
    return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        px: "3%",
        pt: "3%",
        bg: "#002866",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
                md: "1fr",
                lg: "8fr 2fr",
                base: " repeat(1, 1fr)"
            },
            gap: "4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            display: "flex",
                            alignItems: "baseline",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.DragHandleIcon, {
                                    color: "red.600"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                    mb: 2,
                                    color: "white",
                                    fontSize: "17px",
                                    lineHeight: "22px",
                                    fontWeight: "700",
                                    px: "1",
                                    overflowWrap: "anywhere",
                                    children: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_A.CATEGORY_A_NAME
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                templateColumns: {
                                    md: "2.5fr 7.5fr ",
                                    // lg: "3.5fr 4fr 2.5fr",
                                    lg: "2.5fr 7.5fr  ",
                                    base: " repeat(1, 1fr)"
                                },
                                gap: "4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                        pr: "4",
                                        children: newsData.edges && newsData.edges.slice(0, 4).map((item, key)=>{
                                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.node.uri,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    mb: 4,
                                                    cursor: "pointer",
                                                    children: [
                                                        item.node.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                            border: "1px solid #d1d1d1",
                                                            mb: "2",
                                                            h: "auto",
                                                            w: "100%",
                                                            src: item.node.featuredImage?.node?.sourceUrl,
                                                            alt: item.node.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                            mb: 2,
                                                            color: "white",
                                                            fontSize: "17px",
                                                            lineHeight: "22px",
                                                            fontWeight: "700",
                                                            overflowWrap: "anywhere",
                                                            noOfLines: 4,
                                                            children: item.node.title
                                                        })
                                                    ]
                                                }, key)
                                            });
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                        m: "auto",
                                        px: "38px",
                                        borderLeft: "1px solid #1a3e76",
                                        borderRight: "1px solid #1a3e76",
                                        children: newsData.edges && newsData.edges.slice(5, 7).map((item, key)=>{
                                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.node.uri,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    cursor: "pointer",
                                                    mb: 8,
                                                    // bg="#e1eaff"
                                                    // minHeight="250px"
                                                    border: "1px solid #d1d1d1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                            mb: "2",
                                                            h: "auto",
                                                            w: "100%",
                                                            src: item.node.featuredImage?.node?.sourceUrl,
                                                            alt: item.node.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                mb: 2,
                                                                color: "white",
                                                                fontSize: "17px",
                                                                lineHeight: "22px",
                                                                fontWeight: "700",
                                                                px: "4",
                                                                overflowWrap: "anywhere",
                                                                noOfLines: 4,
                                                                children: item.node.title
                                                            })
                                                        })
                                                    ]
                                                }, key)
                                            });
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    pl: "4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_A.CATEGORY_A_SLUG,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "baseline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                        mb: 2,
                                        color: "white",
                                        fontSize: "17px",
                                        lineHeight: "22px",
                                        fontWeight: "700",
                                        px: "1",
                                        overflowWrap: "anywhere",
                                        children: {"MORE":"More","FOOTER_DESC":"NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaPlay */.gmG, {
                                        color: "#C53030",
                                        size: 14
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            children: newsData.edges && newsData.edges.slice(8, 12).map((item, key)=>{
                                return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                        mb: 4,
                                        cursor: "pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                border: "1px solid #d1d1d1",
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage?.node?.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                mb: 2,
                                                color: "white",
                                                fontSize: "17px",
                                                lineHeight: "22px",
                                                fontWeight: "700",
                                                overflowWrap: "anywhere",
                                                noOfLines: 4,
                                                children: item.node.title
                                            })
                                        ]
                                    }, key)
                                });
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const post_category_CategoryA = (CategoryA);

// EXTERNAL MODULE: ./components/post-category/SideBarNews.js
var SideBarNews = __webpack_require__(23668);
;// CONCATENATED MODULE: ./components/post-category/CategoryB.js






const CategoryB = (props)=>{
    const { newsData  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
        paddingLeft: "3%",
        templateColumns: {
            md: "1fr",
            // lg: "3.5fr 4fr 2.5fr",
            lg: "6fr 4fr",
            base: " repeat(1, 1fr)"
        },
        gap: "4",
        mb: "4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                        display: "flex",
                        alignItems: "baseline",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.DragHandleIcon, {
                                color: "red.600"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                mb: 2,
                                color: "#000",
                                fontSize: "17px",
                                lineHeight: "22px",
                                fontWeight: "700",
                                px: "1",
                                overflowWrap: "anywhere",
                                children: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_B.CATEGORY_B_NAME
                            })
                        ]
                    }),
                    newsData.edges && newsData.edges.slice(0, 1).map((item, key)=>{
                        return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: item.node.uri,
                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                cursor: "pointer",
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                    border: "1px solid #d1d1d1",
                                    mb: "2",
                                    h: "auto",
                                    w: "100%",
                                    src: item.node.featuredImage?.node?.sourceUrl,
                                    alt: item.node.title
                                })
                            }, key)
                        });
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_B.CATEGORY_B_SLUG,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "baseline",
                            px: "3%",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
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
                                /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaPlay */.gmG, {
                                    color: "#C53030",
                                    size: 14
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        px: "3%",
                        children: newsData.edges && newsData.edges.slice(1, 5).map((item, key)=>{
                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.node.uri,
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    cursor: "pointer",
                                    mb: 2,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                        templateColumns: {
                                            md: "3fr 7fr",
                                            base: "3fr 7fr"
                                        },
                                        gap: "4",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage?.node?.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
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
                ]
            })
        ]
    });
};
/* harmony default export */ const post_category_CategoryB = (CategoryB);

;// CONCATENATED MODULE: ./components/post-category/CategoryC.js






const CategoryC = (props)=>{
    const { newsData  } = props;
    // console.log('cehckcatc', newsData);
    return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        px: "3%",
        pt: "3%",
        bg: "#002866",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
                md: "1fr",
                // lg: "3.5fr 4fr 2.5fr",
                lg: "7fr 3fr",
                base: " repeat(1, 1fr)"
            },
            gap: "4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            display: "flex",
                            alignItems: "baseline",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.DragHandleIcon, {
                                    color: "red.600"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                    mb: 2,
                                    color: "white",
                                    fontSize: "17px",
                                    lineHeight: "22px",
                                    fontWeight: "700",
                                    px: "1",
                                    overflowWrap: "anywhere",
                                    children: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_C.CATEGORY_C_NAME
                                })
                            ]
                        }),
                        newsData && newsData.edges && newsData.edges.slice(0, 1).map((item, key)=>{
                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.node.uri,
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                        m: "auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: 8,
                                            // bg="#e1eaff"
                                            // minHeight="250px"
                                            border: "1px solid #d1d1d1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                    mb: "2",
                                                    h: "auto",
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        mb: 2,
                                                        color: "white",
                                                        fontSize: "17px",
                                                        lineHeight: "22px",
                                                        fontWeight: "700",
                                                        px: "4",
                                                        overflowWrap: "anywhere",
                                                        noOfLines: 4,
                                                        children: item.node.title
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            });
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    pl: "4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_C.CATEGORY_C_SLUG,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "baseline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                        mb: 2,
                                        color: "white",
                                        fontSize: "17px",
                                        lineHeight: "22px",
                                        fontWeight: "700",
                                        px: "1",
                                        overflowWrap: "anywhere",
                                        children: {"MORE":"More","FOOTER_DESC":"NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaPlay */.gmG, {
                                        color: "#C53030",
                                        size: 14
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            children: newsData && newsData.edges && newsData.edges.slice(1, 3).map((item, key)=>{
                                return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                        mb: 4,
                                        cursor: "pointer",
                                        children: [
                                            item.node.featuredImage?.node?.sourceUrl && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                border: "1px solid #d1d1d1",
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage?.node?.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                mb: 2,
                                                color: "white",
                                                fontSize: "17px",
                                                lineHeight: "22px",
                                                fontWeight: "700",
                                                overflowWrap: "anywhere",
                                                noOfLines: 4,
                                                children: item.node.title
                                            })
                                        ]
                                    }, key)
                                });
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const post_category_CategoryC = (CategoryC);

;// CONCATENATED MODULE: ./components/post-category/CategoryD.js






const CategoryD = (props)=>{
    const { newsData  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        pt: "3%",
        px: "3%",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
                md: "1fr",
                lg: "6fr 4fr",
                base: " repeat(1, 1fr)"
            },
            gap: "4",
            mb: "4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "baseline",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.DragHandleIcon, {
                                    color: "red.600"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                    mb: 2,
                                    color: "#000",
                                    fontSize: "17px",
                                    lineHeight: "22px",
                                    fontWeight: "700",
                                    px: "1",
                                    overflowWrap: "anywhere",
                                    children: {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_D.CATEGORY_D_NAME
                                })
                            ]
                        }),
                        newsData && newsData.edges && newsData.edges.slice(0, 1).map((item, key)=>{
                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.node.uri,
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    cursor: "pointer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                        border: "1px solid #d1d1d1",
                                        mb: "2",
                                        h: "auto",
                                        w: "100%",
                                        src: item.node.featuredImage.node.sourceUrl,
                                        alt: item.node.title
                                    })
                                }, key)
                            });
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            mb: 2,
                            children: newsData && newsData.edges && newsData.edges.slice(1, 2).map((item, key)=>{
                                return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                        cursor: "pointer",
                                        templateColumns: {
                                            md: "3fr 7fr",
                                            base: "3fr 7fr"
                                        },
                                        gap: "4",
                                        children: [
                                            item.node.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage.node.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    textAlign: "justify",
                                                    lineHeight: "normal",
                                                    fontSize: "sm",
                                                    noOfLines: 2,
                                                    children: item.node.title
                                                })
                                            })
                                        ]
                                    }, key)
                                });
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        px: "3%",
                        children: newsData && newsData.edges && newsData.edges.slice(3, 9).map((item, key)=>{
                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.node.uri,
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    mb: 2,
                                    cursor: "pointer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                        templateColumns: {
                                            md: "3fr 7fr",
                                            base: "3fr 7fr"
                                        },
                                        gap: "4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage.node.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
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
    });
};
/* harmony default export */ const post_category_CategoryD = (CategoryD);

;// CONCATENATED MODULE: ./components/HeroSection.js











const HeroSection = (props)=>{
    // demo var
    const Livevideo = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];
    const textrow = [
        1,
        2,
        3,
        4,
        5,
        6
    ];
    //   const heroPost = edges[0]?.node;
    //   const morePosts = edges.slice(1);
    const { post  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
            mx: "3%",
            mt: "4",
            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                    templateColumns: {
                        md: "1fr 1fr .8fr",
                        lg: "1fr 1fr .5fr .8fr",
                        base: " repeat(1, 1fr)"
                    },
                    gap: "4",
                    mb: "10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            mb: 6,
                            children: [
                                post && post.slice(0, 1).map((item, key)=>{
                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.uri,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: 8,
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    as: "h2",
                                                    fontSize: "2xl",
                                                    lineHeight: "normal",
                                                    mb: "4",
                                                    noOfLines: 3,
                                                    children: item.node.title
                                                }),
                                                item.node.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                    mb: "2",
                                                    h: "auto",
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                    textAlign: "justify",
                                                    mb: 2,
                                                    fontSize: "sm",
                                                    noOfLines: 4,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: item.node.excerpt
                                                        }
                                                    })
                                                })
                                            ]
                                        }, key)
                                    });
                                }),
                                post && post.slice(1, 2).map((item, key)=>{
                                    // console.log('checkitems=', item);
                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.uri,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    as: "h2",
                                                    size: "22px",
                                                    fontWeight: "bold",
                                                    lineHeight: "tall",
                                                    noOfLines: 2,
                                                    mb: 2,
                                                    children: item.node.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    mb: "2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                                        templateColumns: {
                                                            md: "3fr 7fr",
                                                            sm: "1fr 7fr"
                                                        },
                                                        gap: "4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                                mb: "2",
                                                                h: "auto",
                                                                w: "100%",
                                                                src: item.node.featuredImage.node.sourceUrl,
                                                                alt: item.node.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                    textAlign: "justify",
                                                                    noOfLines: 2,
                                                                    fontSize: "sm",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: item.node.excerpt
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    });
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                post && post.slice(2, 3).map((item, key)=>{
                                    return item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.uri,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: "6",
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    textAlign: "justify",
                                                    lineHeight: "normal",
                                                    fontSize: "xm",
                                                    noOfLines: 2,
                                                    children: item.node.title
                                                })
                                            ]
                                        })
                                    });
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    px: "3%",
                                    children: post && post.slice(4, 8).map((item, key)=>{
                                        return item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.node.uri,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                mb: 2,
                                                cursor: "pointer",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                                    templateColumns: {
                                                        md: "3fr 7fr",
                                                        base: "3fr 7fr"
                                                    },
                                                    gap: "4",
                                                    children: [
                                                        item.node.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                            mb: "2",
                                                            h: "auto",
                                                            w: "100%",
                                                            src: item.node.featuredImage.node.sourceUrl,
                                                            alt: item.node.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
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
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            children: post && post.slice(10, 16).map((item, key)=>{
                                return item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.uri,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                        mb: "4",
                                        cursor: "pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                textAlign: "justify",
                                                mb: 4,
                                                fontSize: "sm",
                                                noOfLines: 3,
                                                children: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                mb: "4"
                                            })
                                        ]
                                    }, key)
                                });
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                post && post.slice(17, 18).map((item, key)=>{
                                    return item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.uri,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: "6",
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                    h: "auto",
                                                    w: "100%",
                                                    src: item.node.featuredImage.node.sourceUrl,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    textAlign: "justify",
                                                    lineHeight: "normal",
                                                    fontSize: "sm",
                                                    noOfLines: 2,
                                                    children: item.node.title
                                                })
                                            ]
                                        }, key)
                                    });
                                }),
                                post && post.slice(18, 22).map((item, key)=>{
                                    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.uri,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: "4",
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                                    templateColumns: {
                                                        md: "3fr 7fr",
                                                        base: "3fr 7fr"
                                                    },
                                                    gap: "4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                            mb: "2",
                                                            h: "auto",
                                                            w: "100%",
                                                            src: item.node.featuredImage.node.sourceUrl,
                                                            alt: item.node.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                textAlign: "justify",
                                                                lineHeight: "normal",
                                                                fontSize: "sm",
                                                                noOfLines: 2,
                                                                children: item.node.title
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                    mb: "4"
                                                })
                                            ]
                                        }, key)
                                    });
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_HeroSection = (HeroSection);

;// CONCATENATED MODULE: ./components/Home.js












const Home = (props)=>{
    const { post , sideBarData , categoryAData , categoryBData , categoryCData , categoryDData ,  } = props;
    // console.log('checkhomedata', categoryCData);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_HeroSection, {
                post: post
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ins", {
                className: "adsbygoogle",
                style: {
                    display: "block"
                },
                "data-ad-client": "ca-pub-7076157039576041",
                "data-ad-slot": 3539306056,
                "data-ad-format": "auto",
                "data-full-width-responsive": "true"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(post_category_CategoryA, {
                newsData: categoryAData
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ins", {
                className: "adsbygoogle",
                style: {
                    display: "block"
                },
                "data-ad-client": "ca-pub-7076157039576041",
                "data-ad-slot": 3539306056,
                "data-ad-format": "auto",
                "data-full-width-responsive": "true"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                mx: "3%",
                py: "3%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                    templateColumns: {
                        md: "1fr",
                        lg: "7.5fr 2.5fr",
                        base: " repeat(1, 1fr)"
                    },
                    gap: "4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(post_category_CategoryB, {
                                    newsData: categoryBData
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("ins", {
                                    className: "adsbygoogle",
                                    style: {
                                        display: "block"
                                    },
                                    "data-ad-client": "ca-pub-7076157039576041",
                                    "data-ad-slot": 3539306056,
                                    "data-ad-format": "auto",
                                    "data-full-width-responsive": "true"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(post_category_CategoryC, {
                                    newsData: categoryCData
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("ins", {
                                    className: "adsbygoogle",
                                    style: {
                                        display: "block"
                                    },
                                    "data-ad-client": "ca-pub-7076157039576041",
                                    "data-ad-slot": 3539306056,
                                    "data-ad-format": "auto",
                                    "data-full-width-responsive": "true"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(post_category_CategoryD, {
                                    newsData: categoryDData
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("ins", {
                                    className: "adsbygoogle",
                                    style: {
                                        display: "block"
                                    },
                                    "data-ad-client": "ca-pub-7076157039576041",
                                    "data-ad-slot": 3539306056,
                                    "data-ad-format": "auto",
                                    "data-full-width-responsive": "true"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(SideBarNews/* default */.Z, {
                            newsData: sideBarData
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Home = (Home);

;// CONCATENATED MODULE: ./pages/index.js











function Index({ allPosts: { edges  } , preview , menu , sideBarData , categoryAData , categoryBData , categoryCData , categoryDData ,  }) {
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);
    // const categoryData = '';
    const router = (0,next_router.useRouter)();
    // console.log('chekcedgedata=', sideBarData);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        "data-rh": "true",
                        children: "News Control - get the latest news"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Get the latest news for Bollywood, IPL, Sports and Other Social breaking news"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://newsctrls.com/"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {
                menu: menu
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Home, {
                    post: edges,
                    sideBarData: sideBarData,
                    categoryAData: categoryAData,
                    categoryBData: categoryBData,
                    categoryCData: categoryCData,
                    categoryDData: categoryDData
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps({ preview =false  }) {
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
    const menuData = await (0,api/* getHeaderMenuByName */.BV)("TieLabs Main Menu");
    const sideBarData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.SIDEBAR.SIDEBAR_NAME);
    const categoryAData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_A.CATEGORY_A_NAME);
    const categoryBData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_B.CATEGORY_B_NAME);
    const categoryCData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_C.CATEGORY_C_NAME);
    const categoryDData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.CATEGORY_D.CATEGORY_D_NAME);
    // const categoryEData = await getCateogryRecentPostbyName(
    //   'categoryName',
    //   process.env.home.categoryList.CATEGORY_E.CATEGORY_E_NAME
    // );
    // const categoryData = 'my';
    return {
        props: {
            allPosts,
            preview,
            menu: menuData.menu,
            sideBarData: sideBarData,
            categoryAData: categoryAData,
            categoryBData: categoryBData,
            categoryCData: categoryCData,
            categoryDData: categoryDData
        },
        revalidate: 15
    };
}


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 67643:
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [304,927,528,481], () => (__webpack_exec__(90594)));
module.exports = __webpack_exports__;

})();