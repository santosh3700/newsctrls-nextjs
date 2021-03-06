import { VStack } from '@chakra-ui/react';
import { filterProps } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PostList from '../components/archives/post-list';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import PageData from '../components/page/page-data';
import Post from '../components/post/post';
import {
  getAllPostsWithSlug,
  getCateogryRecentPostbyName,
  getHeaderMenuByName,
  getPageDetailsByUri,
  getPostDetailsByUri,
  getAllPostsWithUri,
  getAllPostsForHome,
} from '../lib/api';

//export const config = { amp: 'hybrid' }

function OtherPages(props) {
  //console.log("original data = ", props)

  const router = useRouter();

  let componentToShow;

  if (router.isFallback) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  } else {
    //console.log(props)

    const urlType = props.urlType;
    const pageType = props.pageType;

    // console.log('checkpagetype', pageType);

    //if found any data
    if (props.data && props.data) {
      //check for category, tag, author
      if (pageType === 'archive') {
        componentToShow = (
          <PostList
            urlType={props.urlType}
            urlName={props.urlName}
            data={props.data}
            slug={props.slug}
          />
        );
      } else if (pageType === 'page') {
        //it means it is a page
        componentToShow = <PageData data={props.data} />;
      } else {
        //it means it is a post

        componentToShow = <Post props={props} />;
      }
    } else {
      componentToShow = '<h1>Not Found Page</h1>';
    }
  }

  return (
    <>
      <Header menu={props.menu} />
      <VStack>
        <div>
          <main className="mainContent">{componentToShow}</main>
        </div>
      </VStack>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const urlType = slug[0];
  const postList = await getAllPostsForHome();
  const sideBarData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME
  );

  //get data
  let data;
  let pageType;

  if (urlType === 'category' || urlType === 'tag' || urlType === 'author') {
    let typeName;
    if (urlType === 'tag') {
      typeName = urlType;
    } else {
      typeName = urlType + 'Name';
    }

    data = await getCateogryRecentPostbyName(typeName, slug[1]);

    pageType = 'archive';
  } else if (
    urlType === 'about-us' ||
    urlType === 'blog' ||
    urlType === 'contact-us' ||
    urlType === 'disclaimer' ||
    urlType === 'home' ||
    urlType === 'tiehome' ||
    urlType === 'privacy-policy'
  ) {
    //it means is is a page

    const uri = slug[0];
    data = await getPageDetailsByUri(uri);

    pageType = 'page';
  } else {
    //it means it is a post
    const uri = params.slug.join('/');
    data = await getPostDetailsByUri(uri);

    pageType = 'post';
  }

  // menu data
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);

  return {
    props: {
      sideBarData: sideBarData,
      postList: postList,
      urlType: urlType,
      urlName: slug[0],
      data: data,
      menu: menuData.menu,
      pageType: pageType,
      slug: slug,
    },
    revalidate: 30, //30 minutes
  };
}

// export async function getStaticProps({ preview = false }) {

//   return { props: { postList: postList } };
// }
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithUri();

  //const mostVisitedUri = ['/fantasy-cricket/dream11-investment-strategy-5-years-of-experience/']

  const categoryListUri = [
    '/category/ipl',
    '/category/fantasy-cricket',
    '/category/cricket',
    '/category/birthday',
    '/category/fantasy-platform',
  ];

  const postListUri = allPosts.edges.map(({ node }) => `${node.uri}`);

  const allUri = [...categoryListUri, ...postListUri];

  return {
    paths: allUri,
    fallback: true,
  };
}

export default OtherPages;
