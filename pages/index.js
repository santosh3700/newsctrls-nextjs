import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Icon, Button, Flex, Grid, Heading, Image, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue, VStack, Divider } from "@chakra-ui/react";

export default function Home() {
  const sidebar = [1, 2, 3, 4, 5];
  const MORENEWSsidebar = [1, 2, 3, 4, 5, 6];
  const MORENEWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const MORENEWScircleimg = [1, 2, 3];
  const SOCCER = ["1", "2", "3", "4",];
  return (
    <Box px={{ base: '2', md: '5', lg: '10' }} bg={'#e2e8f0'} py={4}>
      <Grid templateColumns={{ lg: "8fr 4fr", md: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }} textColor="white" bg="white" mb={4} >
        {/* 1st grid box */}
        <Box>
          <Grid templateColumns={{ md: "12fr ", sm: "repeat(1, 1fr)" }} textColor="white"  >
            <Flex
              w={'full'}
              h={'60vh'}
              backgroundImage={
                'url(https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football7.jpg)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}>
              <VStack
                w={'full'}
                justify={'center'}
                justifyContent={'flex-end'}
                pb={'6'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear-gradient(to top, rgb(0 0 0 / 87%), var(--chakra-colors-transparent))'}>
                <Stack >
                  <Heading as={'h2'} textAlign="center" color={'white'}>National Signing Day 2020</Heading>
                  <Text
                    color={'white'}
                    fontWeight={700}
                    textAlign={'center'}
                    fontSize={'md'}
                  >
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                  </Text>

                </Stack>
              </VStack>
            </Flex>
          </Grid>
          <Grid templateColumns={{ md: "6fr 6fr ", sm: "repeat(2, 1fr)" }} textColor="white"  >

            <Flex
              w={'full'}
              h={'35vh'}
              backgroundImage={
                'url(https://mvpthemes.com/theleague/wp-content/uploads/2017/01/hockey2-1-400x240.jpg)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}>
              <VStack
                w={'full'}
                justify={'center'}
                justifyContent={'flex-end'}
                pb={'6'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear-gradient(to top, rgb(0 0 0 / 87%), var(--chakra-colors-transparent))'}>
                <Stack >
                  <Text
                    color={'white'}
                    fontWeight={700}
                    textAlign={'center'}
                    fontSize={'md'}
                  >
                    Blue Jackets rookie Werenski adapting quickly to life in the NHL
                  </Text>

                </Stack>
              </VStack>
            </Flex>

            <Flex
              w={'full'}
              h={'35vh'}
              backgroundImage={
                'url(https://mvpthemes.com/theleague/wp-content/uploads/2017/01/baseball1-400x240.jpg)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}>
              <VStack
                w={'full'}
                justify={'center'}
                justifyContent={'flex-end'}
                pb={'6'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear-gradient(to top, rgb(0 0 0 / 87%), var(--chakra-colors-transparent))'}>
                <Stack >
                  <Text
                    color={'white'}
                    fontWeight={700}
                    textAlign={'center'}
                    fontSize={'md'}
                  >
                    2020 free agency tracker: Keep up with every player signing
                  </Text>

                </Stack>
              </VStack>
            </Flex>

          </Grid>
        </Box>

        {/* 2st grid box */}

        <Box p={{ base: '2', md: '8' }}>
          <Tabs border={'1px solid lightgray'} rounded={'md'} variant='enclosed'>
            <TabList>
              <Tab color={'black'} _selected={{ color: 'white', bg: 'blue.500' }}>Headline</Tab>
              <Tab color={'black'} _selected={{ color: 'white', bg: 'blue.500' }}>Trending</Tab>
              <Tab color={'black'} _selected={{ color: 'white', bg: 'blue.500' }}>Videos</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text color={'black'}>
                  {sidebar.map((data, index) => {
                    return (
                      <Box pb={2} mt={2} display="flex"  >
                        <Box flexShrink={0} width="30%">
                          <Image
                            borderRadius="sm"
                            src="https://mvpthemes.com/theleague/wp-content/uploads/2017/01/baseball2-1-80x80.jpg"

                          />

                        </Box>
                        <Box ml={2} mr={2} width="80%" >
                          <Text color="black" fontWeight="bold" fontSize="sm">
                            Soccer
                          </Text>
                          <Link
                            display="block"
                            fontSize="sm"
                            _focus={{ boxShadow: 'none' }}
                            color="black"
                            href="#"
                          >
                            Will Phoenix’s MLS expansion bid rise above the others?

                          </Link>
                        </Box>
                      </Box>
                    );
                  })}

                </Text>
              </TabPanel>
              <TabPanel>
                <Text color={'black'}>
                  {sidebar.map((data, index) => {
                    return (
                      <Box pb={2} mt={2} display="flex"  >
                        <Box flexShrink={0} width="30%">
                          <Image
                            borderRadius="sm"
                            src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football5-80x80.jpg"

                          />

                        </Box>
                        <Box ml={2} mr={2} width="80%" >
                          <Text color="black" fontWeight="bold" fontSize="sm">
                            FootBall
                          </Text>
                          <Link
                            display="block"
                            fontSize="sm"
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
                </Text>
              </TabPanel>
              <TabPanel>
                <Text color={'black'}>
                  {sidebar.map((data, index) => {
                    return (
                      <Box pb={2} mt={2} display="flex"  >
                        <Box flexShrink={0} width="30%">
                          <Image
                            borderRadius="sm"
                            src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/football7-1-80x80.jpg"

                          />

                        </Box>
                        <Box ml={2} mr={2} width="80%" >
                          <Text color="black" fontWeight="bold" fontSize="sm">
                            Other Sports
                          </Text>
                          <Link
                            display="block"
                            fontSize="sm"
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
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

      </Grid>


      <Box bg="white" px={6} pt={6} pb={2}>
        <Flex justifyContent={'space-between'} alignItems="center" borderBottom="1px solid lightgray" mb={2} >
          <Text fontSize="md" fontWeight="bold" borderBottom="1px solid red" >SOCCER</Text>
          <Link href="#"> <Text fontSize="sm"  >MORE SOCCER <Icon as={ChevronRightIcon} boxSize={5} /></Text></Link>
        </Flex>
        <Grid templateColumns={{ md: "1fr 1fr 1fr 1fr", sm: "repeat(4, 1fr)" }} gap={4}>

          {SOCCER.map((data, index) => {
            return (
              <Box pb={2} mb={3} mt={2} bg="white">
                <Box flexShrink={0}>
                  <Image
                    w="100%"
                    src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/soccer2-400x240.jpg"
                    alt="Woman paying for a purchase"
                  />
                </Box>
                <Box mt={{ base: 4, md: 0 }}
                  bg="white"
                  p={2}
                  position="relative"
                >
                  <Text fontWeight='semibold' mt={2} color="gray.400" fontSize="sm">
                    SOCCER/ 2 years ago
                  </Text>

                  <Link
                    mt={1}
                    display="block"
                    fontSize={{ base: 'md', md: 'md', lg: 'md' }}
                    fontWeight="bold"
                    _focus={{ boxShadow: 'none' }}
                    color="black"
                    href="#"
                  >
                    Will Phoenix’s MLS expansion bid rise above the others?
                  </Link>
                  <Text mt={1} >
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil...
                  </Text>
                  <Flex>By<Text ml={1} color={'red'}>Trisha Mistri</Text></Flex>
                </Box>
              </Box>
            );
          })}


        </Grid>
      </Box>

      <Box mt={4}>
        <Grid templateColumns={{ md: "1fr 1fr 1fr 1fr", sm: "repeat(4, 1fr)" }} gap={4}>

          {SOCCER.map((data, index) => {
            return (
              <Box pb={2} mb={3} mt={2} bg="white">
                <Box flexShrink={0}>
                  <Image
                    w="100%"
                    src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/yankee-stadium-400x240.jpg"
                    alt="Woman paying for a purchase"
                  />
                </Box>
                <Box mt={{ base: 4, md: 0 }}
                  bg="white"
                  p={2}
                // position="relative"
                >
                  <Text fontWeight='semibold' mt={2} color="gray.400" fontSize="sm">
                    SOCCER/ 2 years ago
                  </Text>

                  <Link
                    mt={1}
                    display="block"
                    fontSize={{ base: 'md', md: 'md', lg: 'md' }}
                    fontWeight="bold"
                    _focus={{ boxShadow: 'none' }}
                    color="black"
                    href="#"
                  >
                    Will Phoenix’s MLS expansion bid rise above the others?
                  </Link>
                  <Text mt={1} >
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil...
                  </Text>
                  <Flex>By<Text ml={1} color={'red'}>Trisha Mistri</Text></Flex>
                </Box>
              </Box>
            );
          })}


        </Grid>
      </Box>


      <Grid templateColumns={{ lg: "8fr 4fr", md: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }} bg="white" py={4} my={4}>

        <Box px={6} pt={6} pb={2}
        // id="custom-scroll"
        >
          <Flex justifyContent={'space-between'} alignItems="center" borderBottom="1px solid lightgray" mb={2} >
            <Text fontSize="md" color='black' fontWeight="bold" borderBottom="1px solid red" >MORE NEWS</Text>
            {/* <Text fontSize="sm" color='red'>MORE SOCCER <Icon as={ChevronRightIcon} boxSize={5} /></Text> */}
          </Flex>
          <Box
          // h={'970px'} overflowY={'scroll'}  
          >
            {MORENEWS.map((data, index) => {
              return (
                <Box py={4} display={{ md: 'flex' }}>
                  <Box flexShrink={0}>
                    <Image
                      // borderRadius='lg'
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
                      color='gray.500'
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
                    <Flex>By<Text ml={1} color={'red'}>Trisha Mistri</Text></Flex>
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

            <Flex justifyContent={'space-between'} alignItems="center" borderBottom="1px solid lightgray" mb={2} >
              <Text fontSize="md" color='black' fontWeight="bold" borderBottom="1px solid red" >CONTRIBUTORS</Text>
            </Flex>
            {MORENEWScircleimg.map((data, index) => {
              return (
                <Box py={2} mt={2} display="flex"  >
                  <Box flexShrink={0}  >
                    <Image
                      borderRadius="full"
                      src="https://secure.gravatar.com/avatar/c384934c5206d74fbf3edf07645c90fe?s=100&d=mm&r=g"

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
          </Box>
        </Box>
      </Grid>




    </Box>
  );
}
