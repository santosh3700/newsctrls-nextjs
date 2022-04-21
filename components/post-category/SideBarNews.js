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
// import CategoryA from './post-category/CategoryA';
// import SideBarNews from './post-category/SideBarNews';

const SideBarNews = (props) => {
  const { newsData } = props;

  // console.log('newsdata', newsData.edges.length);
  return (
    <Box paddingRight="3%" className="desktopShareContainer">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box display="flex" alignItems="baseline">
            <DragHandleIcon color="red.600" />

            <Heading
              mb={2}
              color="#000"
              fontSize="17px"
              lineHeight="22px"
              fontWeight="700"
              px="1"
              overflowWrap="anywhere"
              noOfLines={1}
            >
              {process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME}
            </Heading>
          </Box>
        </Box>

        <Link href={process.env.home.categoryList.SIDEBAR.SIDEBAR_SLUG}>
          <Box
            cursor="pointer"
            display="flex"
            justifyContent="end"
            alignItems="baseline"
            px="3%"
          >
            <Heading
              mb={2}
              color="#C53030
"
              fontSize="17px"
              lineHeight="22px"
              fontWeight="700"
              px="1"
              overflowWrap="anywhere"
              noOfLines={4}
            >
              {process.env.text.MORE}
            </Heading>
            <FaPlay color="#C53030" size={14} />
          </Box>
        </Link>
      </Box>
      <Box>
        {newsData.edges &&
          newsData.edges.slice(0, 1).map((item, key) => {
            return (
              item &&
              item.node && (
                <Link href={item.node.uri}>
                  <Image
                    cursor="pointer"
                    key={key}
                    border="1px solid #d1d1d1"
                    mb="2"
                    h="auto"
                    w="100%"
                    src={item.node.featuredImage.node.sourceUrl}
                    alt={item.node.title}
                  />
                </Link>
              )
            );
          })}
        <Box>
          <Box px="3%">
            {newsData.edges &&
              newsData.edges.slice(1, 6).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Box key={key} mb={2} cursor="pointer">
                        <Grid
                          templateColumns={{
                            md: '3fr 7fr',
                            base: '3fr 7fr',
                          }}
                          gap="4"
                        >
                          <Image
                            mb="2"
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Box>
                            <Heading
                              textAlign="justify"
                              lineHeight="normal"
                              fontSize="sm"
                              noOfLines={2}
                            >
                              {item.node.title}
                            </Heading>
                          </Box>
                        </Grid>
                      </Box>
                    </Link>
                  )
                );
              })}
          </Box>
        </Box>
      </Box>
      <Box>
        {newsData.edges &&
          newsData.edges.slice(6, 7).map((item, key) => {
            return (
              item &&
              item.node && (
                <Link href={item.node.uri}>
                  <Image
                    cursor="pointer"
                    key={key}
                    border="1px solid #d1d1d1"
                    mb="2"
                    h="auto"
                    w="100%"
                    src={item.node.featuredImage.node.sourceUrl}
                    alt={item.node.title}
                  />
                </Link>
              )
            );
          })}
        <Box>
          <Box px="3%">
            {newsData.edges &&
              newsData.edges.slice(8, 15).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Box key={key} mb={2} cursor="pointer">
                        <Grid
                          templateColumns={{
                            md: '3fr 7fr',
                            base: '3fr 7fr',
                          }}
                          gap="4"
                        >
                          <Image
                            mb="2"
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Box>
                            <Heading
                              textAlign="justify"
                              lineHeight="normal"
                              fontSize="sm"
                              noOfLines={2}
                            >
                              {item.node.title}
                            </Heading>
                          </Box>
                        </Grid>
                      </Box>
                    </Link>
                  )
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarNews;
