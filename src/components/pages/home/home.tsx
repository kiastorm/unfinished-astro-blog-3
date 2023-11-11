import { PhotoGrid } from './photo-grid'

import {
    PostList,
    PostListItem,
    PostListItemDescription,
    PostListItemLink,
    PostListItemPublishedDate,
    PostListItemTitle,
} from '@/components/post-list'
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Link,
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    Text,
    Theme,
} from '@radix-ui/themes'
import React from 'react'
import './home.css'

export const HomePage = ({
    photos,
    posts,
    pp,
}: {
    photos: any[]
    posts: any[]
    pp: any
}) => {
    const [themePreference, setThemePreference] = React.useState('system')

    // const themeIcon = {
    //     light: <SunIcon />,
    //     dark: <MoonIcon />,
    //     system: <LaptopIcon />,
    // }

    return (
        <Theme
            className="radix-themes__theme"
            accentColor="green"
            radius="none"
        >
            <Container size="3" mb="6">
                <Flex
                    asChild
                    gap="6"
                    align="center"
                    direction={{
                        initial: 'column',
                        xs: 'row',
                    }}
                >
                    <header className="header">
                        <span className="header__avatar">
                            <img
                                className="header__avatar__image-fallback"
                                src={pp.base64}
                            />
                            <img
                                className="header__avatar__image"
                                {...pp.img}
                            />
                        </span>
                        <Box width="100%">
                            <Flex
                                gap="4"
                                mb={{
                                    initial: '4',
                                    xs: '2',
                                }}
                                align={{
                                    initial: 'stretch',
                                    xs: 'stretch',
                                }}
                                direction={{
                                    initial: 'column',
                                    sm: 'row',
                                }}
                            >
                                <Heading as="h1">Kia Storm</Heading>
                                <span className="vertical-divider">&nbsp;</span>
                                <Flex
                                    align="center"
                                    gap="4"
                                    grow="1"
                                    justify={{
                                        initial: 'center',
                                        xs: 'start',
                                    }}
                                    direction={{
                                        initial: 'column',
                                        xs: 'row',
                                    }}
                                >
                                    <Flex display="inline-flex" gap="4">
                                        <Link href="/blog">Blog</Link>
                                        <Link href="/photos">Photos</Link>
                                    </Flex>
                                    <Flex
                                        display="inline-flex"
                                        gap="4"
                                        ml={{
                                            initial: '0',
                                            xs: 'auto',
                                        }}
                                    >
                                        <Link
                                            target="_blank"
                                            href="https://github.com/kiastorm"
                                        >
                                            {/* <FaGithub /> */}
                                            <GitHubLogoIcon />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://linkedin.com/in/kia-storm"
                                        >
                                            <LinkedInLogoIcon />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://twitter.com/kormsen"
                                        >
                                            <TwitterLogoIcon />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://instagram.com/kia.storm"
                                        >
                                            <InstagramLogoIcon />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://open.spotify.com/user/118311018"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 496 512"
                                                height="15px"
                                                width="15px"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
                                            </svg>
                                        </Link>
                                        <SelectRoot
                                            value={themePreference}
                                            onValueChange={setThemePreference}
                                        >
                                            <SelectTrigger>
                                                <Button size="1" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="system">
                                                    System
                                                </SelectItem>
                                                <SelectItem value="light">
                                                    Light
                                                </SelectItem>
                                                <SelectItem value="dark">
                                                    Dark
                                                </SelectItem>
                                            </SelectContent>
                                        </SelectRoot>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Text as="p">
                                UI Engineer based in South Staffordshire,
                                England. Currently working on the design system
                                @{' '}
                                <Link href="https://singlestore.com">
                                    SingleStore
                                </Link>
                                .
                            </Text>
                        </Box>
                    </header>
                </Flex>
            </Container>

            <Container size="3" mb="4">
                <PostList>
                    {posts.map((post) => (
                        <PostListItem key={post.slug}>
                            <PostListItemLink href={`/blog/${post.slug}/`}>
                                <PostListItemTitle size="3">
                                    {post.data.title}
                                </PostListItemTitle>
                                <PostListItemDescription size="2">
                                    {post.data.description}
                                </PostListItemDescription>
                                <PostListItemPublishedDate
                                    mt="2"
                                    size="1"
                                    date={post.data.publishedDate}
                                />
                            </PostListItemLink>
                        </PostListItem>
                    ))}
                </PostList>
            </Container>

            <Container size="3">
                <PhotoGrid photos={photos} />
            </Container>
        </Theme>
    )
}
