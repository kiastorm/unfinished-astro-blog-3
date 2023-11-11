import {
    Heading,
    type GetPropDefTypes,
    headingPropDefs,
    marginPropDefs,
} from '@radix-ui/themes'
import { cx } from 'class-variance-authority'
import React from 'react'

type H1Props = React.ComponentPropsWithoutRef<'h1'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H1 = React.forwardRef<React.ElementRef<'h1'>, H1Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h1"
                className={cx('ks-c-h1', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H1.displayName = 'H1'

type H2Props = React.ComponentPropsWithoutRef<'h2'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H2 = React.forwardRef<React.ElementRef<'h2'>, H2Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h2"
                className={cx('ks-c-h2', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H2.displayName = 'H2'

type H3Props = React.ComponentPropsWithoutRef<'h3'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H3 = React.forwardRef<React.ElementRef<'h3'>, H3Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h3"
                className={cx('ks-c-h3', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H3.displayName = 'H3'

type H4Props = React.ComponentPropsWithoutRef<'h4'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H4 = React.forwardRef<React.ElementRef<'h4'>, H4Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h4"
                className={cx('ks-c-h4', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H4.displayName = 'H4'

type H5Props = React.ComponentPropsWithoutRef<'h5'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H5 = React.forwardRef<React.ElementRef<'h5'>, H5Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h5"
                className={cx('ks-c-h5', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H5.displayName = 'H5'

type H6Props = React.ComponentPropsWithoutRef<'h6'> &
    GetPropDefTypes<typeof headingPropDefs> &
    GetPropDefTypes<typeof marginPropDefs>

export const H6 = React.forwardRef<React.ElementRef<'h6'>, H6Props>(
    (props, forwardedRef) => {
        const { children, className, ...rest } = props

        return (
            <Heading
                as="h6"
                className={cx('ks-c-h6', className)}
                ref={forwardedRef}
                {...rest}
            >
                {children}
            </Heading>
        )
    }
)

H6.displayName = 'H6'
