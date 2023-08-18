// react
import { useEffect, useState } from 'react'
//import { useAuthState } from 'react-firebase-hooks/auth'

// react context
import { UserContext } from '../lib/context'

// components
import Navbar from '../components/Navbar'

//styles
import '../styles/globals.css'

// libraries
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  //const [user] = useAuthState(auth)

  return (
      <UserContext.Provider value={{ user:{}, username: 'jeff' }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
  )
}

export default MyApp
