import { AppBar, Box, ButtonBase, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'

import React from 'react'

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none',
      borderBottom: '1px solid #B6B6B6'
    },
    menuButton: {
      marginRight: '4px',
      zIndex: 1,
      color: 'black'
    },
    title: {
      color: 'black',
      position: 'absolute',
      left: 0,
      width: '100%',
      textAlign: 'center',
      zIndex: 0
    },
    rightSection: {}
  })
)

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Box display="flex">Logo</Box>
        </Box>
        <Typography variant="h6" className={classes.title}>
          Account Viewer
        </Typography>
        <ButtonBase className={classes.rightSection}></ButtonBase>
      </Toolbar>
    </AppBar>
  )
}
