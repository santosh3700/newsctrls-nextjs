import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FaExclamationTriangle,
  FaPlay,
  FaTruckMoving,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import { DragHandleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import CategoryA from './post-category/CategoryA';
import SideBarNews from './post-category/SideBarNews';
import CategoryB from './post-category/CategoryB';
import CategoryC from './post-category/CategoryC';
import CategoryD from './post-category/CategoryD';
import HeroSection from './HeroSection';

const Home = (props) => {
  const {
    post,
    sideBarData,
    categoryAData,
    categoryBData,
    categoryCData,
    categoryDData,
    // categoryEData,
  } = props;

  // console.log('checkhomedata', categoryCData);
  return (
    <>
      {/* first grid box */}
      <HeroSection post={post} />
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7076157039576041" data-ad-slot={3539306056} data-ad-format="auto" data-full-width-responsive="true" />
      {/* second grid box */}
      <CategoryA newsData={categoryAData} />
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7076157039576041" data-ad-slot={3539306056} data-ad-format="auto" data-full-width-responsive="true" />
      {/* third grid box */}
      <Box mx="3%" py="3%">
        <Grid
          templateColumns={{
            md: '1fr',

            lg: '7.5fr 2.5fr',

            base: ' repeat(1, 1fr)',
          }}
          gap="4"
        >
          {/* first column */}
          <Box>
            <CategoryB newsData={categoryBData} />
            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7076157039576041" data-ad-slot={3539306056} data-ad-format="auto" data-full-width-responsive="true" />

            {/* fifth grid box */}

            <CategoryC newsData={categoryCData} />
            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7076157039576041" data-ad-slot={3539306056} data-ad-format="auto" data-full-width-responsive="true" />

            {/* fifth grid box end */}
            {/* add section */}
            {/* <Box pt="3%" w="auto">
              <Heading textAlign="center">This is add sections????</Heading>
            </Box> */}
            {/* sixth grid box */}
            <CategoryD newsData={categoryDData} />
            <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7076157039576041" data-ad-slot={3539306056} data-ad-format="auto" data-full-width-responsive="true" />
            {/* sixth grid box end*/}
          </Box>
          {/* third column as sidebar */}
          {/* breaking news start */}

          <SideBarNews newsData={sideBarData} />

          {/* breaking news end */}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
