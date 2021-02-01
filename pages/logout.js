import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import auth from '../src/services/authService'

const logout = () => {
  const router = useRouter()
  useEffect(() => {
    const authLogout = () => {
      auth.logout()
      router.push('/')
      localStorage.removeItem('navbarInfo')
    }
    authLogout()
  }, [])

  return null
}

export default logout
