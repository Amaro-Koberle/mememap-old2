import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const MagicLinkAuth = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <form action="#">
      <input
        type="email"
        placeholder="email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        disabled={!email.length && !isAuthenticated}
        onClick={async () => {
          if (!isAuthenticated && email.length) {
            await logIn({ email, showUI: true })
          } else {
            await logOut()
          }
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>

      {!isAuthenticated && (
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await signUp({ email, showUI: true })
            }
          }}
        >
          Sign Up
        </button>
      )}
    </form>
  )
}

export default MagicLinkAuth
