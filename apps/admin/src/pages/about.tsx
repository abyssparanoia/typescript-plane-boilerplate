import React from 'react'
import Router from 'next/router'
import { useAuthRequired } from 'src/modules/auth/hooks'

const About = () => {
  useAuthRequired()
  return (
    <div>
      <button onClick={() => void Router.push('/')}>please click here!</button>
    </div>
  )
}

export default About
