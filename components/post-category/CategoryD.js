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

const CategoryD = (props) => {
  const { newsData } = props;
  return (
    <Box pt="3%" px="3%">
      <Grid
        templateColumns={{
          md: '1fr',

          lg: '6fr 4fr',

          base: ' repeat(1, 1fr)',
        }}
        gap="4"
        mb="4"
      >
        {/* first sub column */}
        <Box>
          <Box cursor="pointer" display="flex" alignItems="baseline">
            <DragHandleIcon color="red.600" />

            <Heading
              mb={2}
              color="#000"
              fontSize="17px"
              lineHeight="22px"
              fontWeight="700"
              px="1"
              overflowWrap="anywhere"
            >
              {process.env.home.categoryList.CATEGORY_D.CATEGORY_D_NAME}
            </Heading>
          </Box>

          {newsData &&
            newsData.edges &&
            newsData.edges.slice(0, 1).map((item, key) => {
              return (
                item &&
                item.node && (
                  <Link href={item.node.uri}>
                    <Box key={key} cursor="pointer">
                      <Image
                        border="1px solid #d1d1d1"
                        mb="2"
                        h="auto"
                        w="100%"
                        src={item.node.featuredImage.node.sourceUrl}
                        alt={item.node.title}
                      />
                    </Box>
                  </Link>
                )
              );
            })}

          <Box mb={2}>
            {newsData &&
              newsData.edges &&
              newsData.edges.slice(1, 2).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Grid
                        key={key}
                        cursor="pointer"
                        templateColumns={{
                          md: '3fr 7fr',
                          base: '3fr 7fr',
                        }}
                        gap="4"
                      >
                        {item.node.featuredImage && (
                          <Image
                            mb="2"
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                        )}
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
                    </Link>
                  )
                );
              })}
          </Box>
        </Box>
        {/* second sub column */}
        <Box>
          <Box px="3%">
            {newsData &&
              newsData.edges &&
              newsData.edges.slice(3, 9).map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.uri}>
                      <Box mb={2} key={key} cursor="pointer">
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
      </Grid>
    </Box>
  );
};

export default CategoryD;
