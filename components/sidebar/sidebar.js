import {
    Box,
    Heading,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import PrimeMembeershipCard from "./prime-membership-card";

function Sidebar({ posts }) {
    //console.log(posts)
    return (
        <div className="sidebarContainer">
            <Heading size="md" textAlign="center" mt="5" p="2" bgColor="#08ffc5" color="blackAlpha.800">Recent Post</Heading>

            {
                posts.edges.map((node, index) => {
                    return <RecentPostItem key={`post-item-recent${index}`} post={node} />
                })
            }

        </div>
    );
}

function RecentPostItem({ post }) {
    const postItem = post.node

    const date = new Date(postItem.date)
    return (

        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">
                <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%">
                    <Link href={postItem.uri} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image src={postItem.featuredImage.node.sourceUrl} width={320} height={180} alt={postItem.title} />
                    </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                        bgGradient={useColorModeValue(
                            'radial(orange.600 1px, transparent 1px)',
                            'radial(orange.300 1px, transparent 1px)'
                        )}
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}>
                <Text as="p" fontSize="sm" fontWeight={'bold'} marginTop="1">
                    <Link href={postItem.uri} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        {postItem.title}
                    </Link>
                </Text>
                <Text fontSize="xs">{date.toDateString()}</Text>
            </Box>
        </Box>
    )
}

export default Sidebar;