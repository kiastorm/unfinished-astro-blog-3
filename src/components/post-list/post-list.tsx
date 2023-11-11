import { cx } from 'class-variance-authority'
import './post-list.css'

import { FormattedDate } from '@/components/formatted-date'
import {
    Heading,
    headingPropDefs,
    Text,
    type GetPropDefTypes,
    textPropDefs,
    marginPropDefs,
} from '@radix-ui/themes'

import React from 'react'

type PostListProps = React.ComponentProps<'ul'>

export const PostList = React.forwardRef<React.ElementRef<'ul'>, PostListProps>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <ul
                ref={forwardedRef}
                className={cx('ks-c-post-list', className)}
                {...rest}
            >
                {children}
            </ul>
        )
    }
)

PostList.displayName = 'PostList'

type PostListItemProps = React.ComponentProps<'li'>

export const PostListItem = React.forwardRef<
    React.ElementRef<'li'>,
    PostListItemProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <li
            className={cx('ks-c-post-list__item', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </li>
    )
})

PostListItem.displayName = 'PostListItem'

type PostListItemLinkProps = React.ComponentProps<'a'>

export const PostListItemLink = React.forwardRef<
    React.ElementRef<'a'>,
    PostListItemLinkProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <a
            className={cx('ks-c-post-list__item__link', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </a>
    )
})

PostListItemLink.displayName = 'PostListItemLink'

type PostListItemTitleProps = GetPropDefTypes<typeof headingPropDefs> &
    React.ComponentPropsWithRef<'h2'>

export const PostListItemTitle = React.forwardRef<
    React.ElementRef<'h2'>,
    PostListItemTitleProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <Heading
            size="5"
            as="h2"
            className={cx('ks-c-post-list__item__title', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Heading>
    )
})

PostListItemTitle.displayName = 'PostListItemTitle'

type PostListItemDescriptionProps = React.ComponentPropsWithRef<'p'> &
    GetPropDefTypes<typeof textPropDefs>

export const PostListItemDescription = React.forwardRef<
    React.ElementRef<'p'>,
    PostListItemDescriptionProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <Text
            as="p"
            size="3"
            mt="2"
            className={cx('ks-c-post-list__item__description', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Text>
    )
})

PostListItemDescription.displayName = 'PostListItemDescription'

type PostListItemPublishedDateProps = Pick<
    React.ComponentPropsWithoutRef<typeof FormattedDate>,
    'date'
> &
    React.ComponentPropsWithRef<'p'> &
    GetPropDefTypes<typeof textPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const PostListItemPublishedDate = React.forwardRef<
    React.ElementRef<'p'>,
    PostListItemPublishedDateProps
>((props, forwardedRef) => {
    const { date, className, ...rest } = props

    return (
        <Text
            as="p"
            className={cx('ks-c-post-list__item__published-date', className)}
            ref={forwardedRef}
            size="2"
            color="gray"
            mt="4"
            {...rest}
        >
            <FormattedDate date={date} />
        </Text>
    )
})

PostListItemPublishedDate.displayName = 'PostListItemPublishedDate'
