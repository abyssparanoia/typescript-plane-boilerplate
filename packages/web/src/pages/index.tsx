import React from 'react'

import { Layout } from 'src/components/common'
import { Box } from '@material-ui/core'
type InitialProps = {}

type Props = {} & InitialProps

const Index = (_: Props) => {
  return (
    <Layout>
      <Box>Hello world</Box>
    </Layout>
  )
}

export default Index
