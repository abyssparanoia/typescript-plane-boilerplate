import React from 'react'
import { useSignIn } from 'src/modules/auth/hooks'

const SignIn = () => {
  const { handleSignInWithGoogle } = useSignIn()

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>sign in</button>
    </div>
  )
}

export default SignIn
