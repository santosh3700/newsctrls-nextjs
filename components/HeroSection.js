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

const HeroSection = (props) => {
  // demo var
  const Livevideo = ['1', '2', '3', '4', '5'];
  const textrow = [1, 2, 3, 4, 5, 6];

  //   const heroPost = edges[0]?.node;
  //   const morePosts = edges.slice(1);

  const { post } = props;

  return (
    <>
      <Box mx="3%" mt="4">
        {/* first grid box */}
        <Box>
          <Grid
            templateColumns={{
              md: '1fr 1fr .8fr',
              lg: '1fr 1fr .5fr .8fr',
              base: ' repeat(1, 1fr)',
            }}
            gap="4"
            mb="10"
          >
            {/* first column */}
            <Box mb={6}>
              {post &&
                post.slice(0, 1).map((item, key) => {
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box key={key} mb={8} cursor="pointer">
                          <Heading
                            as="h2"
                            fontSize="2xl"
                            lineHeight="normal"
                            mb="4"
                            noOfLines={3}
                          >
                            {item.node.title}
                          </Heading>
                          {item.node.featuredImage && (
                            <Image
                              mb="2"
                              h="auto"
                              w="100%"
                              src={item.node.featuredImage.node.sourceUrl}
                              alt={item.node.title}
                            />
                          )}
                          <Text
                            textAlign="justify"
                            mb={2}
                            fontSize="sm"
                            noOfLines={4}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.node.excerpt,
                              }}
                            ></div>
                          </Text>
                        </Box>
                      </Link>
                    )
                  );
                })}
              {post &&
                post.slice(1, 2).map((item, key) => {
                  // console.log('checkitems=', item);
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box cursor="pointer">
                          <Heading
                            as="h2"
                            size="22px"
                            fontWeight="bold"
                            lineHeight="tall"
                            noOfLines={2}
                            mb={2}
                          >
                            {item.node.title}
                          </Heading>
                          <Box mb="2">
                            <Grid
                              templateColumns={{
                                md: '3fr 7fr',
                                sm: '1fr 7fr',
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
                                <Text
                                  textAlign="justify"
                                  noOfLines={2}
                                  fontSize="sm"
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.node.excerpt,
                                    }}
                                  ></div>
                                </Text>
                              </Box>
                            </Grid>
                          </Box>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Box>
            {/* second column */}

            <Box>
              {post &&
                post.slice(2, 3).map((item, key) => {
                  return (
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box mb="6" cursor="pointer">
                          <Image
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Heading
                            textAlign="justify"
                            lineHeight="normal"
                            fontSize="xm"
                            noOfLines={2}
                          >
                            {item.node.title}
                          </Heading>
                        </Box>
                      </Link>
                    )
                  );
                })}
              <Box px="3%">
                {post &&
                  post.slice(4, 8).map((item, key) => {
                    return (
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
                          </Box>
                        </Link>
                      )
                    );
                  })}
              </Box>
            </Box>
            {/* third column */}

            <Box>
              {/* first p */}
              {post &&
                post.slice(10, 16).map((item, key) => {
                  return (
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box key={key} mb="4" cursor="pointer">
                          <Text
                            textAlign="justify"
                            mb={4}
                            fontSize="sm"
                            noOfLines={3}
                          >
                            {item.node.title}
                          </Text>
                          <Divider mb="4" />
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Box>
            {/* fourth column */}

            <Box>
              {post &&
                post.slice(17, 18).map((item, key) => {
                  return (
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box key={key} mb="6" cursor="pointer">
                          <Image
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Heading
                            textAlign="justify"
                            lineHeight="normal"
                            fontSize="sm"
                            noOfLines={2}
                          >
                            {item.node.title}
                          </Heading>
                        </Box>
                      </Link>
                    )
                  );
                })}

              {post &&
                post.slice(18, 22).map((item, key) => {
                  return (
                    <Link href={item.node.uri}>
                      <Box key={key} mb="4" cursor="pointer">
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
                            <Text
                              textAlign="justify"
                              lineHeight="normal"
                              fontSize="sm"
                              noOfLines={2}
                            >
                              {item.node.title}
                            </Text>
                          </Box>
                        </Grid>
                        <Divider mb="4" />
                      </Box>
                    </Link>
                  );
                })}
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
