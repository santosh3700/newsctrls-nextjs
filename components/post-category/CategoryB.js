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

const CategoryB = (props) => {
  const { newsData } = props;

  return (
    <Grid
      paddingLeft="3%"
      templateColumns={{
        md: '1fr',
        // lg: "3.5fr 4fr 2.5fr",
        lg: '6fr 4fr',

        base: ' repeat(1, 1fr)',
      }}
      gap="4"
      mb="4"
    >
      {/* first sub column */}
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
          >
            {process.env.home.categoryList.CATEGORY_B.CATEGORY_B_NAME}
          </Heading>
        </Box>
        {newsData.edges &&
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
                      src={item.node.featuredImage?.node?.sourceUrl}
                      alt={item.node.title}
                    />
                  </Box>
                </Link>
              )
            );
          })}
      </Box>
      {/* second sub column */}
      <Box>
        <Link href={process.env.home.categoryList.CATEGORY_B.CATEGORY_B_SLUG}>
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
        <Box px="3%">
          {newsData.edges &&
            newsData.edges.slice(1, 5).map((item, key) => {
              return (
                item &&
                item.node && (
                  <Link href={item.node.uri}>
                    <Box key={key} cursor="pointer" mb={2}>
                      <Grid
                        templateColumns={{
                          md: '3fr 7fr',
                          base: '3fr 7fr',
                        }}
                        gap="4"
                      >
                        {' '}
                        <Image
                          mb="2"
                          h="auto"
                          w="100%"
                          src={item.node.featuredImage?.node?.sourceUrl}
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
  );
};

export default CategoryB;
