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

const CategoryC = (props) => {
  const { newsData } = props;
  // console.log('cehckcatc', newsData);
  return (
    <Box px="3%" pt="3%" bg="#002866">
      <Grid
        templateColumns={{
          md: '1fr',
          // lg: "3.5fr 4fr 2.5fr",
          lg: '7fr 3fr',

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
              {process.env.home.categoryList.CATEGORY_C.CATEGORY_C_NAME}
            </Heading>
          </Box>

          {newsData &&
            newsData.edges &&
            newsData.edges.slice(0, 1).map((item, key) => {
              return (
                item &&
                item.node && (
                  <Link href={item.node.uri}>
                    <Box>
                      {/* first column */}
                      <Box m="auto">
                        {/* first column */}
                        <Box
                          mb={8}
                          // bg="#e1eaff"
                          // minHeight="250px"
                          border="1px solid #d1d1d1"
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
                      </Box>
                    </Box>
                  </Link>
                )
              );
            })}
        </Box>

        {/* second  column */}
        <Box pl="4">
          <Link href={process.env.home.categoryList.CATEGORY_C.CATEGORY_C_SLUG}>
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
              {/* <DragHandleIcon color="red.600" /> */}
              <FaPlay color="#C53030" size={14} />
            </Box>
          </Link>

          <Box>
            {newsData &&
              newsData.edges &&
              newsData.edges.slice(1, 3).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Box
                        mb={4}
                        key={key}
                        cursor="pointer"
                        // minHeight="250px"
                      >
                        {item.node.featuredImage?.node?.sourceUrl && (
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
        </Box>
      </Grid>
    </Box>
  );
};

export default CategoryC;
