import Head from 'next/head';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import {
  getAllPostsForHome,
  getHeaderMenuByName,
  getCateogryRecentPostbyName,
} from '../lib/api';
import { useRouter } from 'next/router';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { VStack } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import Home from '../components/Home';

export default function Index({
  allPosts: { edges },
  preview,
  menu,
  sideBarData,
  categoryAData,
  categoryBData,
  categoryCData,
  categoryDData,
  // categoryEData,
}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  // const categoryData = '';

  const router = useRouter();
  // console.log('chekcedgedata=', sideBarData);

  return (
    <>
      <Head>
        <title data-rh="true">News Control - get the latest news</title>
        <meta
          name="description"
          content="Get the latest news for Bollywood, IPL, Sports and Other Social breaking news"
        />

        <link rel="canonical" href="https://newsctrls.com/" />
      </Head>

      <Header menu={menu} />
      <VStack>
        <Home
          post={edges}
          sideBarData={sideBarData}
          categoryAData={categoryAData}
          categoryBData={categoryBData}
          categoryCData={categoryCData}
          categoryDData={categoryDData}
          // categoryEData={categoryEData}
        />
        {/* <HeroSection post={edges} /> */}

        {/* <div className="mainBody">
          <main className="mainContent">
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage?.node}
                date={heroPost.date}
                author={heroPost.author?.node}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                uri={heroPost.uri}
              />
            )}

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </main>
        </div> */}
      </VStack>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);
  const sideBarData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME
  );
  const categoryAData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_A.CATEGORY_A_NAME
  );
  const categoryBData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_B.CATEGORY_B_NAME
  );
  const categoryCData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_C.CATEGORY_C_NAME
  );
  const categoryDData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_D.CATEGORY_D_NAME
  );
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
      categoryDData: categoryDData,
      // categoryEData: categoryEData,
    },
    revalidate: 15, //10 minutes
  };
}
