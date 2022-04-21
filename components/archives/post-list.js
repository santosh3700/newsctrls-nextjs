import {
  Box,
  SimpleGrid,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import ArchiveSeo from '../seo/archive-seo';
import PostItem from './post-item';
import {
  FaWhatsapp,
  FaCaretRight,
  FaPastafarianism,
  FaFacebookF,
  FaTwitter,
  FaRegEdit,
} from 'react-icons/fa';
import ArchiveHeroSection from './ArchiveHeroSection';

function PostList({ urlType, urlName, data, slug }) {
  //   console.log('chekcsulg', data.edges.length);

  const pageType = ucfirst(slug[0]);
  const pageName = ucfirst(slug[1].replace('-', ' '));

  return (
    <>
      <ArchiveSeo data={data} pageType={pageType} pageName={pageName} />

      <ArchiveHeroSection newsData={data.edges} />

      <Box overflow="hidden">
        {/* <h1>
          {pageType} : {pageName}
        </h1> */}
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} mx="3%" mt="5px">
          {data.edges.slice(12).map((node, index) => {
            return <PostItem key={`post-item${index}`} post={node} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}

function ucfirst(str) {
  var firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.substring(1);
}

export default PostList;
