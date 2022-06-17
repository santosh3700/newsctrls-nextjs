(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 65802:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__fqQS1"
};


/***/ }),

/***/ 93014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

      const compMod = __webpack_require__(33922)

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
        page: "/[...slug]",
        buildId: "7gWsz9lTLAFT7Ez7er3pv",
        escapedBuildId: "7gWsz9lTLAFT7Ez7er3pv",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"b9032902b132cacc1e4e72cc97bbf189",previewModeSigningKey:"4a7aa1fb8494937dc701cee92cdd2e56be96c2913f20caf50ac9f1af30973eff",previewModeEncryptionKey:"eb2899090fe59eac6c4b8784db8379be8822ed347968eeed5d6d42cccfc2e222"}
      })
      
    

/***/ }),

/***/ 33922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/seo/archive-seo.js



function ArchiveSeo({ data , pageType , pageName  }) {
    const seo = data.pageInfo.seo;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: `${pageType} : ${pageName}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: seo.schema.raw
                }
            })
        ]
    });
}
/* harmony default export */ const archive_seo = (ArchiveSeo);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/archives/post-item.js





function PostItem({ post  }) {
    const postItem = post.node;
    const title = postItem.title;
    const imagePath = postItem.featuredImage.node.sourceUrl;
    const author = postItem.author.node.name;
    const date = new Date(postItem.date);
    const uri = postItem.uri;
    //const date = new Date()
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: uri,
        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                maxW: "lg",
                borderWidth: "1px",
                minHeight: "200px",
                overflow: "hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: imagePath,
                        width: 320,
                        height: 180,
                        layout: "responsive",
                        alt: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                        p: "4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                fontSize: "xs",
                                children: [
                                    "By ",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        children: author
                                    }),
                                    "on ",
                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                        children: date.toDateString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                fontSize: "lg",
                                fontWeight: "semibold",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: title
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const post_item = (PostItem);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs.prod.js
var chakra_ui_icons_cjs_prod = __webpack_require__(23005);
;// CONCATENATED MODULE: ./components/archives/ArchiveHeroSection.js







const ArchiveHeroSection = (props)=>{
    const post = props.newsData;
    const router = (0,next_router.useRouter)();
    const pathName = router.asPath;
    const pathArr = router.asPath.split("/");
    const name1 = pathArr[pathArr.length - 1];
    const typeName = name1.split("-").join(" ").toUpperCase();
    const breadcrumb = router.asPath.split("/");
    //   console.log('checkherosection', breadcrumb);
    //   for(let i=0; i<pathArr.length;i++){
    //       if()
    //   }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                background: "linear-gradient(to right, #a55901 0%, #c77d00 50%, #f7b700 100%)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    display: {
                        base: "block",
                        md: "flex"
                    },
                    px: "3%",
                    py: "6%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    //   background="url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/lf-circel.png), url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/rh-circel.png)"
                    backgroundRepeat: " no-repeat",
                    backgroundPosition: "center left, center right 15px",
                    backgroundSize: "auto",
                    position: "relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                    as: "h3",
                                    color: "white",
                                    children: breadcrumb.map((item, key)=>{
                                        // console.log("key and item", item)
                                        if (item === "") {
                                            var name = "Home";
                                        } else {
                                            var name = item.replace(/-/g, " ");
                                        }
                                        var firstLetter = name.slice(0, 1);
                                        var name = firstLetter.toUpperCase() + name.substring(1);
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                name,
                                                key < breadcrumb.length - 1 ? /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_icons_cjs_prod.ChevronRightIcon, {}) : null
                                            ]
                                        }, key);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                    alignItems: "center",
                                    mt: 5,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                        as: "h2",
                                        fontSize: "2xl",
                                        color: "white",
                                        fontWeight: "bold",
                                        children: typeName
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            my: "2"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                px: "3%",
                py: "4",
                bg: "#eeeeee",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                    templateColumns: {
                        md: "8fr 4fr",
                        sm: "repeat(2, 1fr)"
                    },
                    textColor: "white",
                    gap: 4,
                    mb: 4,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                                    templateColumns: {
                                        md: "6fr 6fr  ",
                                        sm: "repeat(2, 1fr)"
                                    },
                                    textColor: "white",
                                    gap: 4,
                                    children: post && post.slice(0, 2).map((item, key)=>{
                                        return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.node.uri,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                mb: 5,
                                                mt: 0,
                                                cursor: "pointer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                        mb: "6",
                                                        h: "auto",
                                                        w: "100%",
                                                        src: item.node.featuredImage.node.sourceUrl,
                                                        alt: item.node.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        as: "h2",
                                                        fontSize: "17px",
                                                        color: "#000",
                                                        lineHeight: "28px",
                                                        fontWeight: "600",
                                                        mb: "4",
                                                        children: item.node.title
                                                    })
                                                ]
                                            }, key)
                                        });
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                                    mt: 4,
                                    templateColumns: {
                                        md: "4fr 4fr 4fr ",
                                        sm: "repeat(3, 1fr)"
                                    },
                                    textColor: "white",
                                    gap: 4,
                                    children: post && post.slice(2, 5).map((item, key)=>{
                                        return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.node.uri,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                textColor: "white",
                                                cursor: "pointer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                        h: "auto",
                                                        w: "100%",
                                                        src: item.node.featuredImage.node.sourceUrl,
                                                        alt: item.node.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        pt: 2,
                                                        fontWeight: 700,
                                                        fontSize: "2xl",
                                                        noOfLines: 4,
                                                        children: item.node.title
                                                    })
                                                ]
                                            })
                                        });
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            children: post.slice(5, 12).map((item, key)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    cursor: "pointer",
                                    mb: 4,
                                    borderBottom: "1px solid #964300 ",
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
                                                src: item.node.featuredImage.node.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                    textAlign: "justify",
                                                    noOfLines: 2,
                                                    fontWeight: "bold",
                                                    children: item.node.title
                                                })
                                            })
                                        ]
                                    })
                                });
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const archives_ArchiveHeroSection = (ArchiveHeroSection);

;// CONCATENATED MODULE: ./components/archives/post-list.js







function PostList({ urlType , urlName , data , slug  }) {
    //   console.log('chekcsulg', data.edges.length);
    const pageType = ucfirst(slug[0]);
    const pageName = ucfirst(slug[1].replace("-", " "));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(archive_seo, {
                data: data,
                pageType: pageType,
                pageName: pageName
            }),
            /*#__PURE__*/ jsx_runtime.jsx(archives_ArchiveHeroSection, {
                newsData: data.edges
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                overflow: "hidden",
                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.SimpleGrid, {
                    columns: {
                        sm: 1,
                        md: 3
                    },
                    spacing: 2,
                    mx: "3%",
                    mt: "5px",
                    children: data.edges.slice(12).map((node, index)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(post_item, {
                            post: node
                        }, `post-item${index}`);
                    })
                })
            })
        ]
    });
}
function ucfirst(str) {
    var firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
}
/* harmony default export */ const post_list = (PostList);

// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(50959);
;// CONCATENATED MODULE: ./components/intro.js


function Intro() {
    return /*#__PURE__*/ _jsxs("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ _jsx("h1", {
                className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Blog."
            }),
            /*#__PURE__*/ _jsxs("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: [
                    "A statically generated blog example using",
                    " ",
                    /*#__PURE__*/ _jsx("a", {
                        href: "https://nextjs.org/",
                        className: "underline hover:text-success duration-200 transition-colors",
                        children: "Next.js"
                    }),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ _jsx("a", {
                        href: CMS_URL,
                        className: "underline hover:text-success duration-200 transition-colors",
                        children: CMS_NAME
                    }),
                    "."
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(30654);
// EXTERNAL MODULE: ./components/layout/footer.js
var footer = __webpack_require__(77314);
// EXTERNAL MODULE: ./components/layout/header.js + 3 modules
var header = __webpack_require__(12811);
// EXTERNAL MODULE: ./styles/post-body.module.css
var post_body_module = __webpack_require__(65802);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
;// CONCATENATED MODULE: ./components/seo/page-seo.js


function PageSeo({ data  }) {
    const seo = data.seo;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: seo.metaDesc
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "canonical",
                href: seo.canonical
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: seo.schema.raw
                }
            })
        ]
    });
}
/* harmony default export */ const page_seo = (PageSeo);

;// CONCATENATED MODULE: ./components/page/page-data.js







function PageData({ data  }) {
    const date = new Date(data.date);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(page_seo, {
                data: data
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                overflow: "hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                        as: "h2",
                        textAlign: "center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: data.title
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `${(post_body_module_default()).content} contentBody`,
                        dangerouslySetInnerHTML: {
                            __html: data.content
                        }
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const page_data = (PageData);

;// CONCATENATED MODULE: ./components/seo/post-seo.js



function PostSeo({ data  }) {
    const seo = data.seo;
    const imagePath = data.featuredImage?.node.sourceUrl;
    const imageSize = data.featuredImage?.node.mediaDetails;
    const authorName = data.author.node.name;
    if (!imagePath) {
        return "not found";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: seo.metaDesc
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "canonical",
                href: seo.canonical
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:locale",
                content: "en_US"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:type",
                content: seo.opengraphType
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: seo.opengraphTitle
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: seo.opengraphDescription
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:url",
                content: seo.opengraphUrl
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:site_name",
                content: seo.opengraphSiteName
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "article:published_time",
                content: seo.opengraphPublishedTime
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "article:modified_time",
                content: seo.opengraphModifiedTime
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: imagePath
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image:width",
                content: imageSize.width
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image:height",
                content: imageSize.height
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:label1",
                content: "Written by"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:data1",
                content: authorName
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:label2",
                content: "Est. reading time"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:data2",
                content: "2 minutes"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: seo.schema.raw
                }
            })
        ]
    });
}
/* harmony default export */ const post_seo = (PostSeo);

;// CONCATENATED MODULE: ./components/sidebar/prime-membership-card.js



const PrimeMembeershipCard = ()=>{
    return /*#__PURE__*/ _jsx(Center, {
        py: 6,
        children: /*#__PURE__*/ _jsxs(Box, {
            maxW: "330px",
            w: "full",
            bg: useColorModeValue("white", "gray.800"),
            boxShadow: "2xl",
            rounded: "md",
            overflow: "hidden",
            children: [
                /*#__PURE__*/ _jsxs(Stack, {
                    textAlign: "center",
                    p: 6,
                    color: useColorModeValue("gray.800", "white"),
                    align: "center",
                    children: [
                        /*#__PURE__*/ _jsx(Text, {
                            fontSize: "md",
                            fontWeight: 500,
                            bg: useColorModeValue("green.50", "green.900"),
                            p: 2,
                            px: 3,
                            color: "green.500",
                            rounded: "full",
                            children: "Dream11 winning teams on Telegram"
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            align: "center",
                            justify: "center",
                            children: [
                                /*#__PURE__*/ _jsx(Text, {
                                    fontSize: "3xl",
                                    children: "\u20B9"
                                }),
                                /*#__PURE__*/ _jsx(Text, {
                                    fontSize: "6xl",
                                    fontWeight: 800,
                                    children: "0"
                                }),
                                /*#__PURE__*/ _jsx(Text, {
                                    color: "gray.500",
                                    children: "/month"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    bg: useColorModeValue("gray.50", "gray.900"),
                    px: 6,
                    py: 0,
                    children: [
                        /*#__PURE__*/ _jsxs(List, {
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ _jsxs(ListItem, {
                                    children: [
                                        /*#__PURE__*/ _jsx(ListIcon, {
                                            as: CheckIcon,
                                            color: "green.400"
                                        }),
                                        "1 safe and 5 GL teams"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(ListItem, {
                                    children: [
                                        /*#__PURE__*/ _jsx(ListIcon, {
                                            as: CheckIcon,
                                            color: "green.400"
                                        }),
                                        "3 to 4 grand league winning tips every month"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(ListItem, {
                                    children: [
                                        /*#__PURE__*/ _jsx(ListIcon, {
                                            as: CheckIcon,
                                            color: "green.400"
                                        }),
                                        "YouTube video prediction"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(ListItem, {
                                    children: [
                                        /*#__PURE__*/ _jsx(ListIcon, {
                                            as: CheckIcon,
                                            color: "green.400"
                                        }),
                                        "Covering all international and top league matches"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            mt: 10,
                            mb: 2,
                            w: "full",
                            bg: "green.400",
                            color: "white",
                            rounded: "xl",
                            boxShadow: "0 5px 20px 0px rgb(72 187 120 / 43%)",
                            _hover: {
                                bg: "green.500"
                            },
                            _focus: {
                                bg: "green.500"
                            },
                            children: "Join Telegram Channel Now"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const prime_membership_card = ((/* unused pure expression or super */ null && (PrimeMembeershipCard)));

;// CONCATENATED MODULE: ./components/sidebar/sidebar.js





function Sidebar({ posts  }) {
    //console.log(posts)
    return /*#__PURE__*/ _jsxs("div", {
        className: "sidebarContainer",
        children: [
            /*#__PURE__*/ _jsx(Heading, {
                size: "md",
                textAlign: "center",
                mt: "5",
                p: "2",
                bgColor: "#08ffc5",
                color: "blackAlpha.800",
                children: "Recent Post"
            }),
            posts.edges.map((node, index)=>{
                return /*#__PURE__*/ _jsx(RecentPostItem, {
                    post: node
                }, `post-item-recent${index}`);
            })
        ]
    });
}
function RecentPostItem({ post  }) {
    const postItem = post.node;
    const date = new Date(postItem.date);
    return /*#__PURE__*/ _jsxs(Box, {
        marginTop: {
            base: "1",
            sm: "5"
        },
        display: "flex",
        flexDirection: {
            base: "column",
            sm: "row"
        },
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                display: "flex",
                flex: "1",
                marginRight: "3",
                position: "relative",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ _jsx(Box, {
                        width: {
                            base: "100%",
                            sm: "85%"
                        },
                        zIndex: "2",
                        marginLeft: {
                            base: "0",
                            sm: "5%"
                        },
                        marginTop: "5%",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: postItem.uri,
                            textDecoration: "none",
                            _hover: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: postItem.featuredImage.node.sourceUrl,
                                width: 320,
                                height: 180,
                                alt: postItem.title
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Box, {
                        zIndex: "1",
                        width: "100%",
                        position: "absolute",
                        height: "100%",
                        children: /*#__PURE__*/ _jsx(Box, {
                            bgGradient: useColorModeValue("radial(orange.600 1px, transparent 1px)", "radial(orange.300 1px, transparent 1px)"),
                            backgroundSize: "20px 20px",
                            opacity: "0.4",
                            height: "100%"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Box, {
                display: "flex",
                flex: "1",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: {
                    base: "3",
                    sm: "0"
                },
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        as: "p",
                        fontSize: "sm",
                        fontWeight: "bold",
                        marginTop: "1",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: postItem.uri,
                            textDecoration: "none",
                            _hover: {
                                textDecoration: "none"
                            },
                            children: postItem.title
                        })
                    }),
                    /*#__PURE__*/ _jsx(Text, {
                        fontSize: "xs",
                        children: date.toDateString()
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const sidebar = ((/* unused pure expression or super */ null && (Sidebar)));

;// CONCATENATED MODULE: ./components/post/post-data.js





function PostData({ data  }) {
    const author = data.author.node;
    const date = new Date(data.date);
    const imagePath = data.featuredImage?.node.sourceUrl;
    const tags = data.tags.edges;
    if (!imagePath) {
        return "not found";
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Box, {
            overflow: "hidden",
            children: [
                /*#__PURE__*/ _jsx(Text, {
                    fontSize: "lg",
                    as: "h1",
                    fontWeight: "semibold",
                    align: "center",
                    children: /*#__PURE__*/ _jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: data.title
                        }
                    })
                }),
                /*#__PURE__*/ _jsxs(Text, {
                    fontSize: "md",
                    as: "p",
                    align: "center",
                    children: [
                        "By ",
                        /*#__PURE__*/ _jsx("b", {
                            children: `${author.firstName} ${author.lastName}`
                        }),
                        ` `,
                        " on ",
                        /*#__PURE__*/ _jsx("b", {
                            children: date.toDateString()
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Image, {
                    priority: true,
                    src: imagePath,
                    width: 320,
                    height: 180,
                    layout: "responsive",
                    alt: data.title
                }),
                /*#__PURE__*/ _jsx("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "block"
                    },
                    "data-ad-client": "ca-pub-7076157039576041",
                    "data-ad-slot": 3539306056,
                    "data-ad-format": "auto",
                    "data-full-width-responsive": "true"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: `${ClassesPostBody.content} contentBody`,
                    dangerouslySetInnerHTML: {
                        __html: data.content
                    }
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "tagContainer",
                    children: tags ? tags.map((tag)=>{
                        //console.log(tag.node)
                        return /*#__PURE__*/ _jsx(Tag, {
                            className: "tagBox",
                            children: /*#__PURE__*/ _jsx(Link, {
                                href: tag.node.uri,
                                children: `#${tag.node.name}`
                            })
                        }, tag.node.name);
                    }) : null
                }),
                /*#__PURE__*/ _jsx("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "block"
                    },
                    "data-ad-format": "autorelaxed",
                    "data-ad-client": "ca-pub-7076157039576041",
                    "data-ad-slot": 3184082831
                }),
                /*#__PURE__*/ _jsxs("script", {
                    children: [
                        "(adsbygoogle = window.adsbygoogle || []).push(",
                        ");"
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const post_data = ((/* unused pure expression or super */ null && (PostData)));

// EXTERNAL MODULE: ./node_modules/react-share/lib/index.js
var lib = __webpack_require__(12484);
// EXTERNAL MODULE: ./node_modules/react-web-share/dist/react-web-share.cjs.production.min.js
var react_web_share_cjs_production_min = __webpack_require__(63027);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
;// CONCATENATED MODULE: ./components/post/social-share.js







function SocialShare({ data  }) {
    const post_link = data.seo.canonical;
    const post_title = data.title;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                display: {
                    base: "none",
                    md: "block"
                },
                className: "desktopShareContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                        fontSize: "md",
                        children: "Share"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.SimpleGrid, {
                        columns: 1,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(lib.FacebookShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.FacebookIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TwitterShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TwitterIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TelegramShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TelegramIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.WhatsappShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.WhatsappIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.LinkedinShareButton, {
                                edinShareButton: true,
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.LinkedinIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TumblrShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TumblrIcon, {
                                    size: 32,
                                    round: true
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                display: {
                    base: "block",
                    md: "none"
                },
                className: "mobileShareContainer",
                children: /*#__PURE__*/ jsx_runtime.jsx(react_web_share_cjs_production_min/* RWebShare */.u, {
                    data: {
                        text: post_title,
                        url: post_link,
                        title: "Share this news to"
                    },
                    onClick: ()=>console.log("shared successfully!"),
                    children: /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaShareAlt */.PPi, {
                        size: 30
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const social_share = (SocialShare);

// EXTERNAL MODULE: ./components/post-category/SideBarNews.js
var SideBarNews = __webpack_require__(23668);
;// CONCATENATED MODULE: ./components/post/post.js






// import SideBarNews from '../.'






function Post({ props  }) {
    const data = props.data.post;
    const { 0: recentPost , 1: setRecentPost  } = (0,react.useState)();
    const tags = data.tags.edges;
    const post = props.postList.edges;
    console.log("checkpostdata", post.length);
    var tempArr = [];
    var tempObj = [];
    // const [startIndex, setStartIndex] = useState(1);
    const { 0: lastIndex , 1: setLastIndex  } = (0,react.useState)(10);
    const loadMore = ()=>{
        setLastIndex(lastIndex = lastIndex + 9);
        console.log("checklastIndex", lastIndex);
    };
    // useEffect(() => {
    //   loadMore();
    //   // for (var i = 0; i < 10; i++) {
    //   //   setRecentPost(post);
    //   // }
    // }, [lastIndex]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(post_seo, {
                data: data
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Stack, {
                mx: "3%",
                mt: "4",
                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                        templateColumns: {
                            md: "12 fr",
                            lg: "12 fr",
                            base: " repeat(1, 1fr)"
                        },
                        gap: "4",
                        mb: "10",
                        position: "relative",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                    templateColumns: {
                                        md: "1fr 8fr 3fr",
                                        lg: "1fr 8fr 3fr",
                                        base: " repeat(1, 1fr)"
                                    },
                                    gap: "2",
                                    mb: "10",
                                    position: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(social_share, {
                                                data: data
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    mb: "6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                            as: "h1",
                                                            mb: 2,
                                                            fontSize: "32px",
                                                            color: "##000",
                                                            lineHeight: "42px",
                                                            noOfLines: 3,
                                                            children: data.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                            as: "h2",
                                                            mb: 4,
                                                            fontSize: "20px",
                                                            color: "#333333",
                                                            lineHeight: "30px",
                                                            noOfLines: 3,
                                                            fontWeight: "400",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: data.content
                                                                }
                                                            })
                                                        }),
                                                        data.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                            h: "auto",
                                                            w: "100%",
                                                            src: data.featuredImage.node.sourceUrl,
                                                            alt: data.title
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                    mb: "10"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `${(post_body_module_default()).content} contentBody`,
                                                    dangerouslySetInnerHTML: {
                                                        __html: data.content
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tagContainer",
                                                    children: tags ? tags.map((tag)=>{
                                                        //console.log(tag.node)
                                                        return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Tag, {
                                                            className: "tagBox",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: tag.node.uri,
                                                                children: `#${tag.node.name}`
                                                            })
                                                        }, tag.node.name);
                                                    }) : null
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                            children: props.sideBarData && /*#__PURE__*/ jsx_runtime.jsx(SideBarNews/* default */.Z, {
                                                newsData: props.sideBarData
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                    mb: "4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            mb: "10",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    py: "1",
                                                    as: "h2",
                                                    mb: 2,
                                                    mt: 10,
                                                    fontSize: "2xl",
                                                    color: "#000",
                                                    lineHeight: "30px",
                                                    noOfLines: 1,
                                                    children: "Recent Post"
                                                }),
                                                post && post.slice(0, 1).map((item, key)=>{
                                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: item.node.uri,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                            mb: 5,
                                                            mt: 10,
                                                            cursor: "pointer",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                                    mb: "6",
                                                                    h: "auto",
                                                                    w: "100%",
                                                                    src: item.node.featuredImage.node.sourceUrl,
                                                                    alt: item.node.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                    as: "h2",
                                                                    fontSize: "17px",
                                                                    color: "#000",
                                                                    lineHeight: "28px",
                                                                    fontWeight: "600",
                                                                    mb: "4",
                                                                    children: item.node.title
                                                                })
                                                            ]
                                                        })
                                                    }, key);
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                    border: "3px solid #d1d1d1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                mb: "6",
                                                border: "1px solid #cfcfcf"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                                                    templateColumns: {
                                                        md: "1fr 1fr 1fr",
                                                        lg: "1fr 1fr 1fr",
                                                        base: " repeat(1, 1fr)"
                                                    },
                                                    gap: "4",
                                                    mb: "4",
                                                    children: post && post.slice(1, lastIndex).map((item, key)=>{
                                                        return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: item.node.uri,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                                cursor: "pointer",
                                                                children: [
                                                                    item.node.featuredImage && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                                                                        mb: "2",
                                                                        h: "auto",
                                                                        w: "100%",
                                                                        src: item.node.featuredImage.node?.sourceUrl,
                                                                        alt: item.node.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                        as: "h2",
                                                                        fontSize: "17px",
                                                                        color: "#000",
                                                                        lineHeight: "28px",
                                                                        fontWeight: "600",
                                                                        noOfLines: 2,
                                                                        mb: "4",
                                                                        children: item.node.title
                                                                    })
                                                                ]
                                                            })
                                                        });
                                                    })
                                                }),
                                                lastIndex > post.length ? /*#__PURE__*/ jsx_runtime.jsx("div", {}) : /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Center, {
                                                    my: 5,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                                                        onClick: ()=>{
                                                            loadMore();
                                                        },
                                                        variant: "solid",
                                                        color: "white",
                                                        bg: "blue.700",
                                                        _hover: {
                                                            color: "red"
                                                        },
                                                        children: "Load More"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                                                    border: "1px solid #cfcfcf"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const post = (Post);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
;// CONCATENATED MODULE: ./pages/[...slug].js














//export const config = { amp: 'hybrid' }
function OtherPages(props) {
    //console.log("original data = ", props)
    const router = (0,next_router.useRouter)();
    let componentToShow;
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "Loading"
            })
        });
    } else {
        //console.log(props)
        const urlType = props.urlType;
        const pageType = props.pageType;
        // console.log('checkpagetype', pageType);
        //if found any data
        if (props.data && props.data) {
            //check for category, tag, author
            if (pageType === "archive") {
                componentToShow = /*#__PURE__*/ jsx_runtime.jsx(post_list, {
                    urlType: props.urlType,
                    urlName: props.urlName,
                    data: props.data,
                    slug: props.slug
                });
            } else if (pageType === "page") {
                //it means it is a page
                componentToShow = /*#__PURE__*/ jsx_runtime.jsx(page_data, {
                    data: props.data
                });
            } else {
                //it means it is a post
                componentToShow = /*#__PURE__*/ jsx_runtime.jsx(post, {
                    props: props
                });
            }
        } else {
            componentToShow = "<h1>Not Found Page</h1>";
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {
                menu: props.menu
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "mainContent",
                        children: componentToShow
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
}
async function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const urlType = slug[0];
    const postList = await (0,api/* getAllPostsForHome */.DT)();
    const sideBarData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"Breaking News","SIDEBAR_SLUG":"/category/breaking-news"},"CATEGORY_A":{"CATEGORY_A_NAME":"Entertainment","CATEGORY_A_SLUG":"/category/entertainment"},"CATEGORY_B":{"CATEGORY_B_NAME":"Bollywood","CATEGORY_B_SLUG":"/category/bollywood"},"CATEGORY_C":{"CATEGORY_C_NAME":"IPL 2022","CATEGORY_C_SLUG":"/category/ipl-2022"},"CATEGORY_D":{"CATEGORY_D_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"},"CATEGORY_E":{"CATEGORY_E_NAME":"Social News","CATEGORY_D_SLUG":"/category/social-news"}}}.categoryList.SIDEBAR.SIDEBAR_NAME);
    //get data
    let data;
    let pageType;
    if (urlType === "category" || urlType === "tag" || urlType === "author") {
        let typeName;
        if (urlType === "tag") {
            typeName = urlType;
        } else {
            typeName = urlType + "Name";
        }
        data = await (0,api/* getCateogryRecentPostbyName */.Yd)(typeName, slug[1]);
        pageType = "archive";
    } else if (urlType === "about-us" || urlType === "blog" || urlType === "contact-us" || urlType === "disclaimer" || urlType === "home" || urlType === "tiehome" || urlType === "privacy-policy") {
        //it means is is a page
        const uri = slug[0];
        data = await (0,api/* getPageDetailsByUri */.cb)(uri);
        pageType = "page";
    } else {
        //it means it is a post
        const uri = params.slug.join("/");
        data = await (0,api/* getPostDetailsByUri */.N_)(uri);
        pageType = "post";
    }
    // menu data
    const menuData = await (0,api/* getHeaderMenuByName */.BV)("TieLabs Main Menu");
    return {
        props: {
            sideBarData: sideBarData,
            postList: postList,
            urlType: urlType,
            urlName: slug[0],
            data: data,
            menu: menuData.menu,
            pageType: pageType,
            slug: slug
        },
        revalidate: 30
    };
}
// export async function getStaticProps({ preview = false }) {
//   return { props: { postList: postList } };
// }
async function getStaticPaths() {
    const allPosts = await (0,api/* getAllPostsWithUri */.ST)();
    //const mostVisitedUri = ['/fantasy-cricket/dream11-investment-strategy-5-years-of-experience/']
    const categoryListUri = [
        "/category/ipl",
        "/category/fantasy-cricket",
        "/category/cricket",
        "/category/birthday",
        "/category/fantasy-platform", 
    ];
    const postListUri = allPosts.edges.map(({ node  })=>`${node.uri}`);
    const allUri = [
        ...categoryListUri,
        ...postListUri
    ];
    return {
        paths: allUri,
        fallback: true
    };
}
/* harmony default export */ const _slug_ = (OtherPages);


/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 67643:
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [304,927,258,528,481], () => (__webpack_exec__(93014)));
module.exports = __webpack_exports__;

})();