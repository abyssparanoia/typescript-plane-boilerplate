import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import { NextPage } from 'next'
import { MuiThemeProvider } from '@material-ui/core'
import theme from 'src/components/theme'

const NextApp: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Account Viewer</title>
      </Head>

      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default NextApp
