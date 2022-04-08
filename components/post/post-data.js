import { Box, Center, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ClassesPostBody from '../../styles/post-body.module.css'

function PostData({ data }) {
    const author = data.author.node
    const date = new Date(data.date)
    const imagePath = data.featuredImage.node.sourceUrl
    const tags = data.tags.edges

    return (
        <>

            <Box overflow="hidden" >

                {/* Post title */}
                <Text fontSize="lg" as="h1" fontWeight="semibold" align="center">
                    <div dangerouslySetInnerHTML={{ __html: data.title }} />
                </Text>

                {/* Author detail */}
                <Text fontSize="md" as="p" align="center">
                    By <b>{`${author.firstName} ${author.lastName}`}</b>
                    on <b>{date.toDateString()}</b>
                </Text>

                {/* Featured Media */}
                <Image priority src={imagePath} width={320} height={180} layout="responsive" alt={data.title} />


                {/* Post Content */}
                <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}

                />

                <div className="tagContainer">
                    {
                        tags ? (
                            tags.map((tag) => {
                                //console.log(tag.node)
                                return (
                                    <Tag key={tag.node.name} className="tagBox">
                                        <Link href={tag.node.uri}>
                                            {`#${tag.node.name}`}
                                        </Link>
                                    </Tag>
                                )
                            })
                        ) : null
                    }
                </div>

                {/* Google Ad */}
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-format="autorelaxed"
                    data-ad-client="ca-pub-7076157039576041"
                    data-ad-slot="3184082831"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>

            </Box>
        </>
    );
}

export default PostData;