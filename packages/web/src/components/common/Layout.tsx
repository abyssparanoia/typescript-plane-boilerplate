import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { Header } from 'src/components/organisms'

export interface LayoutProps {
  hideHeader?: boolean
  title?: string
  back?: boolean
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    main: {
      backgroundColor: palette.background.default,
      width: '100%',
      height: 'calc(100vh - 48px)'
    }
  })
)

export const Layout: React.FC<LayoutProps> = ({ children, hideHeader = false }) => {
  // const router = useRouter()
  const classes = useStyles()
  return (
    <>
      {!hideHeader && <Header />}
      <main className={classes.main}>{children}</main>
    </>
  )
}
