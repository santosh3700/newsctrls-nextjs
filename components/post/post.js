import {
  Box,
  Grid,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  Tag,
  Button,
  Center,
} from '@chakra-ui/react';
import PostSeo from '../seo/post-seo';
import Sidebar from '../sidebar/sidebar';
import PostData from './post-data';
import SocialShare from './social-share';
// import SideBarNews from '../.'
import SideBarNews from '../post-category/SideBarNews';
import { FaPlay } from 'react-icons/fa';
import { DragHandleIcon } from '@chakra-ui/icons';
import ClassesPostBody from '../../styles/post-body.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Post({ props }) {
  const data = props.data.post;

  const [recentPost, setRecentPost] = useState();

  const tags = data.tags.edges;
  const post = props.postList.edges;
  console.log('checkpostdata', post.length);

  var tempArr = [];
  var tempObj = [];
  // const [startIndex, setStartIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(10);

  const loadMore = () => {
    setLastIndex((lastIndex = lastIndex + 9));
    console.log('checklastIndex', lastIndex);
  };

  // useEffect(() => {
  //   loadMore();
  //   // for (var i = 0; i < 10; i++) {
  //   //   setRecentPost(post);
  //   // }
  // }, [lastIndex]);

  return (
    <>
      <PostSeo data={data} />
      {/* start aaj tak */}

      <Stack mx="3%" mt="4">
        {/* add section */}

        {/* main grid */}
        <Box>
          <Grid
            templateColumns={{
              md: '12 fr',
              lg: '12 fr',
              base: ' repeat(1, 1fr)',
            }}
            gap="4"
            mb="10"
            position={'relative'}
          >
            {/* single post side */}
            <Box>
              <Grid
                templateColumns={{
                  md: '1fr 8fr 3fr',
                  lg: '1fr 8fr 3fr',
                  base: ' repeat(1, 1fr)',
                }}
                gap="2"
                mb="10"
                position={'relative'}
              >
                <Box>
                  <SocialShare data={data} />
                </Box>
                <Box>
                  {/* single post content */}
                  <Box mb="6">
                    <Heading
                      as="h1"
                      mb={2}
                      fontSize="32px"
                      color="##000"
                      lineHeight="42px"
                      noOfLines={3}
                    >
                      {data.title}
                    </Heading>
                    <Heading
                      as="h2"
                      mb={4}
                      fontSize="20px"
                      color="#333333"
                      lineHeight="30px"
                      noOfLines={3}
                      fontWeight="400"
                    >
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </Heading>

                    {data.featuredImage && (
                      <Image
                        h="auto"
                        w="100%"
                        src={data.featuredImage.node.sourceUrl}
                        alt={data.title}
                      />
                    )}
                  </Box>
                  <Divider mb="10" />
                  <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                  <div className="tagContainer">
                    {tags
                      ? tags.map((tag) => {
                          //console.log(tag.node)
                          return (
                            <Tag key={tag.node.name} className="tagBox">
                              <Link
                                href={tag.node.uri}
                              >{`#${tag.node.name}`}</Link>
                            </Tag>
                          );
                        })
                      : null}
                  </div>
                </Box>
                <Box>
                  {props.sideBarData && (
                    <SideBarNews newsData={props.sideBarData} />
                  )}
                </Box>
              </Grid>

              {/* after single post */}
              <Box mb="4">
                {/*  */}
                <Box mb="10">
                  {' '}
                  <Heading
                    py="1"
                    as="h2"
                    mb={2}
                    mt={10}
                    fontSize="2xl"
                    color="#000"
                    lineHeight="30px"
                    noOfLines={1}
                  >
                    Recent Post
                  </Heading>
                  {post &&
                    post.slice(0, 1).map((item, key) => {
                      return (
                        item &&
                        item.node && (
                          <Link key={key} href={item.node.uri}>
                            <Box mb={5} mt={10} cursor="pointer">
                              <Image
                                mb="6"
                                h="auto"
                                w="100%"
                                src={item.node.featuredImage.node.sourceUrl}
                                alt={item.node.title}
                              />
                              <Heading
                                as="h2"
                                fontSize="17px"
                                color="#000"
                                lineHeight="28px"
                                fontWeight="600"
                                mb="4"
                              >
                                {item.node.title}
                              </Heading>
                            </Box>
                          </Link>
                        )
                      );
                    })}
                  <Divider border="3px solid #d1d1d1" />
                </Box>

                {/* two and three column grid */}

                <Box>
                  {/* two column grid */}
                  {/* <Grid
                    templateColumns={{
                      md: '5fr 5fr',
                      lg: '5fr 5fr',
                      base: ' repeat(1, 1fr)',
                    }}
                    gap="4"
                    // mb="2"
                  >
                    {post &&
                      post.slice(1, 3).map((item, key) => {
                        return (
                          item &&
                          item.node && (
                            <Link href={item.node.uri}>
                              <Box cursor="pointer">
                                <Image
                                  mb="2"
                                  h="auto"
                                  w="100%"
                                  src={item.node.featuredImage.node.sourceUrl}
                                  alt={item.node.title}
                                />
                                <Heading
                                  as="h2"
                                  fontSize="17px"
                                  color="#000"
                                  lineHeight="28px"
                                  fontWeight="600"
                                  mb="4"
                                >
                                  {item.node.title}
                                </Heading>
                              </Box>
                            </Link>
                          )
                        );
                      })}
                  </Grid> */}
                  <Divider mb="6" border="1px solid #cfcfcf" />
                  {/* three column grid */}
                  {/* <Grid
                    templateColumns={{
                      md: '1fr 1fr 1fr',
                      lg: '1fr 1fr 1fr',
                      base: ' repeat(1, 1fr)',
                    }}
                    gap="4"
                    mb="4"
                  >
                    {post &&
                      post.slice(4, 7).map((item, key) => {
                        return (
                          item &&
                          item.node && (
                            <Link href={item.node.uri}>
                              <Box cursor="pointer">
                                <Image
                                  mb="2"
                                  h="auto"
                                  w="100%"
                                  src={item.node.featuredImage.node.sourceUrl}
                                  alt={item.node.title}
                                />
                                <Heading
                                  as="h2"
                                  fontSize="17px"
                                  color="#000"
                                  lineHeight="28px"
                                  fontWeight="600"
                                  noOfLines={2}
                                  mb="4"
                                >
                                  {item.node.title}
                                </Heading>
                              </Box>
                            </Link>
                          )
                        );
                      })}
                  </Grid>
                  <Divider border="1px solid #cfcfcf" /> */}
                </Box>
                <Box>
                  {/* two column grid */}
                  {/* <Grid
                    templateColumns={{
                      md: '5fr 5fr',
                      lg: '5fr 5fr',
                      base: ' repeat(1, 1fr)',
                    }}
                    gap="4"
                    // mb="2"
                  >
                    {post &&
                      post.slice(8, 10).map((item, key) => {
                        return (
                          item &&
                          item.node && (
                            <Link href={item.node.uri}>
                              <Box cursor="pointer">
                                {item.node.featuredImage && (
                                  <Image
                                    mb="2"
                                    h="auto"
                                    w="100%"
                                    src={item.node.featuredImage.node.sourceUrl}
                                    alt={item.node.title}
                                  />
                                )}
                                <Heading
                                  as="h2"
                                  fontSize="17px"
                                  color="#000"
                                  lineHeight="28px"
                                  fontWeight="600"
                                  mb="4"
                                >
                                  {item.node.title}
                                </Heading>
                              </Box>
                            </Link>
                          )
                        );
                      })}
                  </Grid> */}
                  {/* <Divider mb="6" border="1px solid #cfcfcf" /> */}
                  {/* three column grid */}
                  <Grid
                    templateColumns={{
                      md: '1fr 1fr 1fr',
                      lg: '1fr 1fr 1fr',
                      base: ' repeat(1, 1fr)',
                    }}
                    gap="4"
                    mb="4"
                  >
                    {post &&
                      post.slice(1, lastIndex).map((item, key) => {
                        return (
                          item &&
                          item.node && (
                            <Link href={item.node.uri}>
                              <Box cursor="pointer">
                                {item.node.featuredImage && (
                                  <Image
                                    mb="2"
                                    h="auto"
                                    w="100%"
                                    src={
                                      item.node.featuredImage.node?.sourceUrl
                                    }
                                    alt={item.node.title}
                                  />
                                )}
                                <Heading
                                  as="h2"
                                  fontSize="17px"
                                  color="#000"
                                  lineHeight="28px"
                                  fontWeight="600"
                                  noOfLines={2}
                                  mb="4"
                                >
                                  {item.node.title}
                                </Heading>
                              </Box>
                            </Link>
                          )
                        );
                      })}
                  </Grid>

                  {lastIndex > post.length ? (
                    <div></div>
                  ) : (
                    <Center my={5}>
                      <Button
                        onClick={() => {
                          loadMore();
                        }}
                        variant={'solid'}
                        color="white"
                        bg={'blue.700'}
                        _hover={{ color: 'red' }}
                      >
                        Load More
                      </Button>
                    </Center>
                  )}
                  <Divider border="1px solid #cfcfcf" />
                </Box>
                {/* end two and three column grid */}
              </Box>
            </Box>
            {/* single post sidebar */}
            {/* side bar here start */}

            {/* sidebar end */}
          </Grid>
        </Box>
      </Stack>

      {/* end aaj tak */}
    </>
  );
}

export default Post;
