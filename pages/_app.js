import React from 'react'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import { wrapper } from '../redux/store.js'
import { AuthProvider } from '../src/services/authContext'



const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
  )
}


export default wrapper.withRedux(MyApp)

