/* eslint-disable react/display-name */
import * as React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
// import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { Colors } from '..'

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      ...theme.typography.button,
      color: Colors.primary.default,
      textDecoration: 'none'
    }
  })
)

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const { as, href, replace, scroll, passHref, shallow, prefetch, ...other } = props

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...other} />
    </NextLink>
  )
})

interface LinkPropsBase {
  activeClassName?: string
  innerRef?: React.Ref<HTMLAnchorElement>
  naked?: boolean
}

export type LinkProps = LinkPropsBase & NextComposedProps // & Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function BaseLink(props: LinkProps) {
  const { href, activeClassName = 'active', className: classNameProps, innerRef, ...other } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  // const classes = useMuiLinkStyle()
  const className = clsx(classNameProps, {
    [activeClassName]: router && router.pathname === pathname && activeClassName
  })
  // const muiClasses = [className, classes.root].join(' ')

  // if (naked) {
  return <NextComposed className={className} ref={innerRef} href={href} {...other} />
  // }

  // return <MuiLink component={NextComposed} className={muiClasses} ref={innerRef} href={href as string} {...other} />
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { link } = useStyles()
  return <BaseLink {...props} innerRef={ref} className={link} />
})
