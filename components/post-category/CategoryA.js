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

const CategoryA = (props) => {
  const { newsData } = props;

  // console.log('checkcategoryA', newsData);
  return (
    <Box px="3%" pt="3%" bg="#002866">
      <Grid
        templateColumns={{
          md: '1fr',

          lg: '8fr 2fr',

          base: ' repeat(1, 1fr)',
        }}
        gap="4"
      >
        {/* first main column */}
        <Box>
          <Box display="flex" alignItems="baseline">
            <DragHandleIcon color="red.600" />

            <Heading
              mb={2}
              color="white"
              fontSize="17px"
              lineHeight="22px"
              fontWeight="700"
              px="1"
              overflowWrap="anywhere"
            >
              {process.env.home.categoryList.CATEGORY_A.CATEGORY_A_NAME}
            </Heading>
          </Box>
          <Box>
            <Grid
              templateColumns={{
                md: '2.5fr 7.5fr ',
                // lg: "3.5fr 4fr 2.5fr",
                lg: '2.5fr 7.5fr  ',

                base: ' repeat(1, 1fr)',
              }}
              gap="4"
            >
              {/* first column */}
              <Box pr="4">
                {/* first video */}
                {newsData.edges &&
                  newsData.edges.slice(0, 4).map((item, key) => {
                    return (
                      item &&
                      item.node && (
                        <Link href={item.node.uri}>
                          <Box key={key} mb={4} cursor="pointer">
                            {item.node.featuredImage && (
                              <Image
                                border="1px solid #d1d1d1"
                                mb="2"
                                h="auto"
                                w="100%"
                                src={item.node.featuredImage?.node?.sourceUrl}
                                alt={item.node.title}
                              />
                            )}
                            <Heading
                              mb={2}
                              color="white"
                              fontSize="17px"
                              lineHeight="22px"
                              fontWeight="700"
                              overflowWrap="anywhere"
                              noOfLines={4}
                            >
                              {item.node.title}
                            </Heading>
                          </Box>
                        </Link>
                      )
                    );
                  })}
                {/* second video */}
              </Box>
              {/* second column */}
              <Box
                m="auto"
                px="38px"
                borderLeft="1px solid #1a3e76"
                borderRight="1px solid #1a3e76"
              >
                {/* first column */}
                {newsData.edges &&
                  newsData.edges.slice(5, 7).map((item, key) => {
                    return (
                      item &&
                      item.node && (
                        <Link href={item.node.uri}>
                          <Box
                            key={key}
                            cursor="pointer"
                            mb={8}
                            // bg="#e1eaff"
                            // minHeight="250px"
                            border="1px solid #d1d1d1"
                          >
                            <Image
                              mb="2"
                              h="auto"
                              w="100%"
                              src={item.node.featuredImage?.node?.sourceUrl}
                              alt={item.node.title}
                            />
                            <Box>
                              <Heading
                                mb={2}
                                color="white"
                                fontSize="17px"
                                lineHeight="22px"
                                fontWeight="700"
                                px="4"
                                overflowWrap="anywhere"
                                noOfLines={4}
                              >
                                {item.node.title}
                              </Heading>
                              {/* <Icon as={FaYoutube} color={'red'} boxSize={8} /> */}
                            </Box>
                          </Box>
                        </Link>
                      )
                    );
                  })}
              </Box>
            </Grid>
          </Box>
        </Box>

        {/* second main column */}
        <Box pl="4">
          <Link href={process.env.home.categoryList.CATEGORY_A.CATEGORY_A_SLUG}>
            <Box
              cursor="pointer"
              display="flex"
              justifyContent="end"
              alignItems="baseline"
            >
              <Heading
                mb={2}
                color="white"
                fontSize="17px"
                lineHeight="22px"
                fontWeight="700"
                px="1"
                overflowWrap="anywhere"
              >
                {process.env.text.MORE}
              </Heading>
              {/* <DragHandleIcon /> */}
              <FaPlay color="#C53030" size={14} />
            </Box>
          </Link>

          <Box>
            {/* first video */}

            {/* second video */}
            {newsData.edges &&
              newsData.edges.slice(8, 12).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Box key={key} mb={4} cursor="pointer">
                        <Image
                          border="1px solid #d1d1d1"
                          mb="2"
                          h="auto"
                          w="100%"
                          src={item.node.featuredImage?.node?.sourceUrl}
                          alt={item.node.title}
                        />
                        <Heading
                          mb={2}
                          color="white"
                          fontSize="17px"
                          lineHeight="22px"
                          fontWeight="700"
                          overflowWrap="anywhere"
                          noOfLines={4}
                        >
                          {item.node.title}
                        </Heading>
                      </Box>
                    </Link>
                  )
                );
              })}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default CategoryA;
