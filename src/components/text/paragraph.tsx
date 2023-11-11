import { Text, type GetPropDefTypes, textPropDefs } from '@radix-ui/themes'
import { cx } from 'class-variance-authority'
import React from 'react'

type ParagraphProps = React.ComponentPropsWithRef<'p'> &
    GetPropDefTypes<typeof textPropDefs>

export const Paragraph = React.forwardRef<
    React.ElementRef<'p'>,
    ParagraphProps
>((props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
        <Text
            as="p"
            className={cx('ks-c-paragraph', className)}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Text>
    )
})

Paragraph.displayName = 'Paragraph'
