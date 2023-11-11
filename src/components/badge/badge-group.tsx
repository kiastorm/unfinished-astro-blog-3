import { Flex } from '@radix-ui/themes'
import { cx } from 'class-variance-authority'
import React from 'react'

type BadgeGroupProps = React.ComponentProps<typeof Flex>

export const BadgeGroup = React.forwardRef<
    React.ElementRef<typeof Flex>,
    BadgeGroupProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <Flex
            gap="2"
            className={cx('ks-c-badge-group', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Flex>
    )
})

BadgeGroup.displayName = 'BadgeGroup'
