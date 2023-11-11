import { FormattedDate } from '@/components/formatted-date/formatted-date'
import { Badge, Box, Container, Flex, Heading, Text } from '@radix-ui/themes'
import type { CollectionEntry } from 'astro:content'
import type React from 'react'
import './blog-post.css'

export const BlogPost = ({
    children: content,
    title,
    description,
    publishedDate,
    heroImage,
    tags,
}: React.PropsWithChildren<CollectionEntry<'blog'>['data']>) => {
    return (
        <Container>
            <Box py="6">
                <Heading as="h1" size="8" mb="4">
                    {title}
                </Heading>
                <Text as="p" size="6">
                    {description}
                </Text>
                <Flex mt="5" gap="2">
                    {tags?.map((tag) => (
                        // <a href={`/tags/${tag}`}>
                        <Badge key={tag} variant="solid">
                            {tag}
                        </Badge>
                        // </a>
                    ))}
                </Flex>
                <Text color="gray" size="2" as="p" mt="4">
                    Published&nbsp;
                    <FormattedDate date={publishedDate} />
                </Text>
            </Box>

            <Box className="md-content">{content}</Box>
        </Container>
    )
}
