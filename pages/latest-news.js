import { Box, Button, Flex, Grid, Heading, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react'

const LatestNews = () => {
    const MORENEWSsidebar = [1, 2, 3, 4, 5, 6];
    const MORENEWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Box px={{ base: '2', md: '5', lg: '10' }} bg={'#e2e8f0'} py={4}>

            <Grid templateColumns={{ lg: "8fr 4fr", md: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }} bg="white" py={4} my={4}>

                <Box px={6} pt={6} pb={2}
                // id="custom-scroll"
                >

                    <Heading as={'h2'} color='black' mb={2} fontWeight="bold" textAlign={'center'} >Latest News</Heading>

                    <Box>
                        {MORENEWS.map((data, index) => {
                            return (
                                <Box py={4} display={{ md: 'flex' }}>
                                    <Box flexShrink={0}>
                                        <Image
                                            width={{ md: 80 }}
                                            src='https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football7-1-400x240.jpg'
                                            alt='Woman paying for a purchase'
                                        />
                                    </Box>
                                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                        <Text fontWeight='semibold' mt={2} color="gray.400" fontSize="sm">
                                            SOCCER/ 2 years ago
                                        </Text>
                                        <Link

                                            mt={1}
                                            display='block'
                                            fontSize='lg'
                                            fontWeight='semibold'
                                            href='#'
                                        >
                                            <Heading as='h4' size='md'>Will Phoenix’s MLS expansion bid rise above the others?</Heading>
                                        </Link>
                                        <Text mt={2} color='gray.500'>
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum...
                                        </Text>
                                        <Flex>By<Text ml={1} color={'#fe074e'}>Trisha Mistri</Text></Flex>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                    <Button variant={'outline'} w={'100%'} mt={2}>More Posts</Button>

                </Box>

                <Box p={{ base: '2', md: '8' }} >
                    <Box position={'sticky'} top={'0px'}  >
                        <Tabs isManual variant='enclosed'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Heading</Tab>
                                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Trending</Tab>
                                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Videos</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    {MORENEWSsidebar.map((data, index) => {
                                        return (
                                            <Box pb={2} mt={2} display="flex"  >
                                                <Box flexShrink={0}  >
                                                    <Image
                                                        borderRadius="sm"
                                                        src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football5-80x80.jpg"

                                                    />

                                                </Box>
                                                <Box ml={2} mr={2}   >
                                                    <Text color="black" fontSize="sm">
                                                        Other Sports
                                                    </Text>
                                                    <Link
                                                        display="block"
                                                        fontSize="sm"
                                                        fontWeight="bold"
                                                        _focus={{ boxShadow: 'none' }}
                                                        color="black"
                                                        href="#"
                                                    >
                                                        Keep an eye on these redshirt freshmen in 2020

                                                    </Link>
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </TabPanel>
                                <TabPanel>
                                    {MORENEWSsidebar.map((data, index) => {
                                        return (
                                            <Box pb={2} mt={2} display="flex"  >
                                                <Box flexShrink={0}  >
                                                    <Image
                                                        borderRadius="sm"
                                                        src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football7-1-80x80.jpg"

                                                    />

                                                </Box>
                                                <Box ml={2} mr={2}   >
                                                    <Text color="black" fontSize="sm">
                                                        Other Sports
                                                    </Text>
                                                    <Link
                                                        display="block"
                                                        fontSize="sm"
                                                        fontWeight="bold"
                                                        _focus={{ boxShadow: 'none' }}
                                                        color="black"
                                                        href="#"
                                                    >
                                                        Keep an eye on these redshirt freshmen in 2020

                                                    </Link>
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </TabPanel>
                                <TabPanel>
                                    {MORENEWSsidebar.map((data, index) => {
                                        return (
                                            <Box pb={2} mt={2} display="flex"  >
                                                <Box flexShrink={0}  >
                                                    <Image
                                                        borderRadius="sm"
                                                        src="https://mvpthemes.com/theleague/wp-content/uploads/2017/01/baseball2-1-80x80.jpg"

                                                    />

                                                </Box>
                                                <Box ml={2} mr={2}   >
                                                    <Text color="black" fontSize="sm">
                                                        Other Sports
                                                    </Text>
                                                    <Link
                                                        display="block"
                                                        fontSize="sm"
                                                        fontWeight="bold"
                                                        _focus={{ boxShadow: 'none' }}
                                                        color="black"
                                                        href="#"
                                                    >
                                                        Keep an eye on these redshirt freshmen in 2020

                                                    </Link>
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>


                    </Box>
                </Box>
            </Grid>

        </Box>
    )
}

export default LatestNews