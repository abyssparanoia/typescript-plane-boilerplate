import React from 'react'
import { Link } from '.'

export default {
  component: Link,
  title: 'atoms/Link'
}

export const Default = () => (
  <Link href={'/#'} prefetch={false}>
    すべてを表示
  </Link>
)
