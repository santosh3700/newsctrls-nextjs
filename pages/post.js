import { Avatar, Icon, Box, Flex, Grid, Heading, Image, Text, VStack, HStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Popover, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverTrigger } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaShareAlt, FaTwitter, FaPinterest, FaEnvelope, FaRegComment } from "react-icons/fa";

const post = () => {
    const SOCCER = ["1", "2", "3", "4",];
    const postsidebar = [1, 2, 3];
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box px={{ base: '2', md: '5', lg: '10' }} bg={'#e2e8f0'} py={4}>
            <Grid templateColumns={{ lg: "8fr 4fr", md: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }} textColor="white" bg="white"
                position={'relative'}  >
                <Box>
                    <Box flexShrink={0}  >
                        <Image
                            src="https://mvpthemes.com/theleague/wp-content/uploads/2017/01/soccer.jpg"
                        />
                    </Box>
                    <Box p={{ base: '4', md: '8' }} >
                        <Heading as={'h2'} >Messi rescues point for Barcelona with perfect free kick</Heading>
                        <Text mt={2} fontSize={"lg"}>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                            eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque.
                        </Text>
                        <Box display={'flex'} mt={2}>
                            <Flex alignItems={'center'} >
                                <Avatar src='https://bit.ly/dan-abramov' mr={'2'} />
                                <Box display={{ base: 'block', md: 'flex' }}>
                                    <Flex alignItems={'center'} ml={2}>
                                        by <Text ml={2} fontWeight={'bold'}>The League Staff</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} ml={2}>
                                        <Icon as={FaTwitter} mr={2} color={'skyblue'} boxSize={5} />
                                        <Text>November 23, 2019</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>

                    <Box px={{ base: '4', md: '8' }} pb={{ base: '4', md: '8' }}

                    >
                        <Flex   >
                            <VStack display={{ base: 'none', md: 'block' }}  >
                                <Box position={'sticky'} top={'20px'}>
                                    <Icon as={FaFacebookF} boxSize={6} color={'blue'} />
                                    <Icon as={FaTwitter} boxSize={6} color={'skyblue'} />
                                    <Icon as={FaPinterest} boxSize={6} color={'darkred'} />
                                    <Icon as={FaEnvelope} boxSize={6} color={'gray'} />
                                    <Icon as={FaRegComment} boxSize={6} color={'lightgray'} />
                                </Box>
                            </VStack>
                            <Box ml={{ base: '0', md: '5' }} >
                                <Text>
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                                <Heading as={'h3'} size='md' p={2}> “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat”</Heading>
                                <Text >
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                </Text>
                                <Flex mt={2} display={{ base: 'grid', md: 'flex' }}>
                                    <Button size={'xs'} mt={2} mr={2}>RELATED TOPICS</Button>
                                    <Button size={'xs'} mt={2} mr={2}>RELATED TOPICS</Button>
                                    <Button size={'xs'} mt={2} mr={2}>RELATED TOPICS</Button>
                                    <Button size={'xs'} mt={2} mr={2}>RELATED TOPICS</Button>
                                    <Button size={'xs'} mt={2} mr={2}>RELATED TOPICS</Button>
                                </Flex>


                                <Text mt={2}>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </Text>

                                <Text mt={2}>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </Text>

                                <Text mt={2}>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </Text>


                                <Text mt={2}>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </Text>

                                <Box ml={{ base: '0', md: '5' }} >
                                    <Text>
                                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

                                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>
                                    <Heading as={'h3'} size='md' p={2}> “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat”</Heading>
                                    <Text >
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                    </Text>
                                    <Text mt={2}>
                                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                        rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </Text>


                                </Box>

                                <Button mt={2} variant={'outline'} w={'full'}>Comment</Button>

                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box p={{ base: '2', md: '8' }}  >
                    <Box position={'sticky'} top={'0px !important'}>
                        <Flex justifyContent={'space-between'} alignItems="center" borderBottom="1px solid lightgray" mb={2} >
                            <Text fontSize="md" fontWeight="bold" borderBottom="1px solid red" >SOCCER</Text>
                        </Flex>

                        {postsidebar.map((data, index) => {
                            return (

                                <Box py={2} mb={3} mt={2} >
                                    <Box flexShrink={0}>
                                        <Image
                                            w="100%"
                                            src="https://mvpthemes.com/theleague/wp-content/uploads/2017/02/soccer2-400x240.jpg"
                                            alt="Woman paying for a purchase"
                                        />
                                    </Box>
                                    <Box mt={{ base: 4, md: 0 }} p={2} id="font-weight-bold-link"
                                    >
                                        <Text fontWeight='semibold' mt={2} color="gray.400" fontSize="sm">
                                            SOCCER/ 2 years ago
                                        </Text>

                                        <Link display="block"
                                            fontSize="sm"
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
                                        <Flex>By<Text ml={1} color={'#fe074e'}>Trisha Mistri</Text></Flex>
                                    </Box>
                                </Box>

                            );
                        })}
                    </Box>
                </Box>

            </Grid>

            <Box bg="white" px={6} pt={6} pb={2} >
                <Flex justifyContent={'space-between'} alignItems="center" borderBottom="1px solid lightgray" mb={2} >
                    <Text fontSize="md" fontWeight="bold" borderBottom="1px solid red" >SOCCER</Text>
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
                                    id="font-weight-bold-link"
                                >
                                    <Text fontWeight='semibold' mt={2} color="gray.400" fontSize="sm">
                                        SOCCER/ 2 years ago
                                    </Text>

                                    <Link
                                        mt={1}
                                        display="block"
                                        fontSize={{ base: 'md', md: 'md', lg: 'md' }}
                                        fontWeight="bold !important"
                                        _focus={{ boxShadow: 'none' }}
                                        color="red"
                                        href="#"
                                    >
                                        Will Phoenix’s MLS expansion bid rise above the others?
                                    </Link>
                                    <Text mt={1} >
                                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil...
                                    </Text>
                                    <Flex>By<Text ml={1} color={'#fe074e'}>Trisha Mistri</Text></Flex>
                                </Box>
                            </Box>
                        );
                    })}


                </Grid>
            </Box>



            <Box display={{ base: 'block', md: 'none' }}>
                <Popover closeOnBlur={false}>
                    <PopoverTrigger>
                        <Box rounded={'full'} position={'fixed'} bottom={'10px'} right={'15px'}
                            bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}
                        >
                            <Icon as={FaShareAlt} boxSize={5} color={'black'} />
                        </Box>
                    </PopoverTrigger>
                    <PopoverContent w={'40px'} bg={'none'} p={'0px'} border={'none'}>
                        <PopoverBody>
                            <VStack>

                                <Box rounded={'full'} bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}>
                                    <Icon as={FaFacebookF} boxSize={5} color={'blue'} />
                                </Box>
                                <Box rounded={'full'} bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}>
                                    <Icon as={FaTwitter} boxSize={5} color={'skyblue'} />
                                </Box>
                                <Box rounded={'full'} bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}>
                                    <Icon as={FaPinterest} boxSize={5} color={'darkred'} />
                                </Box>
                                <Box rounded={'full'} bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}>
                                    <Icon as={FaEnvelope} boxSize={5} color={'gray'} />
                                </Box>
                                <Box rounded={'full'} bg={'white'} p={2} width="40px" h='40px' border={'1px solid lightgray'}>
                                    <Icon as={FaRegComment} boxSize={5} color={'lightgray'} />
                                </Box>


                            </VStack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>



        </Box>
    )
}

export default post;