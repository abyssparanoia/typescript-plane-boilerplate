import React from 'react'
import Router from 'next/router'
import { useSignIn, useSignOut, useIsLoggedIn } from 'src/modules/auth/hooks'

const Index = () => {
  const { handleSignInWithGoogle } = useSignIn()
  const { handleSignOut } = useSignOut()
  const { isLoggedIn } = useIsLoggedIn()

  return (
    <div>
      <button onClick={() => void Router.push('/about')}>please click here!</button>
      {!isLoggedIn && <button onClick={handleSignInWithGoogle}>sign in</button>}
      {isLoggedIn && <button onClick={handleSignOut}>sign out</button>}
    </div>
  )
}

export default Index
