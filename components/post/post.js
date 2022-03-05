import { Box, Grid } from "@chakra-ui/react";
import PostSeo from "../seo/post-seo";
import Sidebar from "../sidebar/sidebar";
import PostData from "./post-data";
import SocialShare from "./social-share";

function Post({ props }) {

    const data = props.data.post

    return (
        <>
            <PostSeo data={data} />
            <Grid templateColumns={{ md: "0.2fr 2.8fr 1fr", sm: "repeat(2, 1fr)" }} gap={{ base: 0, md: 4 }}>
                <Box>
                    {/* <SocialShare data={data} /> */}
                </Box>
                <Box>

                    <PostData data={data} />
                </Box>
                <Box>
                    <Sidebar posts={props.data.posts} />
                </Box>
            </Grid>
        </>
    );
}

export default Post;