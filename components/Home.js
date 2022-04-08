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
      {/* second grid box */}
      <CategoryA newsData={categoryAData} />
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

            {/* fifth grid box */}

            <CategoryC newsData={categoryCData} />

            {/* fifth grid box end */}
            {/* add section */}
            {/* <Box pt="3%" w="auto">
              <Heading textAlign="center">This is add sections????</Heading>
            </Box> */}
            {/* sixth grid box */}
            <CategoryD newsData={categoryDData} />
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
