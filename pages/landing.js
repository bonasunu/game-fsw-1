import React from 'react'
import Head from 'next/head'
import styling from '../styles/landing.module.css'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import NavbarComponent from '../src/components/NavbarComponent'

const landing = () => {
  const router = useRouter()

  const handleLogIn = () => router.push('/login')
  const handleRegister = () => router.push('/register')
  const handleLeaderboard = () => router.push('/leaderboard')

  return (
    <>
      <NavbarComponent />
      <Head>
        <title>Binar Gaming</title>
      </Head>
      <div className={`containerlanding ${styling.containerLanding}`}>
        <div
          className={`d-flex justify-content-center align-items-center w-100 h-100`}
        >
          <div className={`text-center align-middle`}>
            <h1
              className={`align-self-center mt-3 h1-color ${styling.h1Color}`}
            >
              Welcome to Binar Gaming
            </h1>
            <h5
              className={`align-self-center mt-2 h3-color ${styling.h3Color}`}
            >
              A simple game for completing Binar course challenge
            </h5>
            <div className={`text-center button mt-4`}>
              <button
                className={`btn ${styling.btnLogIn}`}
                label="Login"
                onClick={handleLogIn}
              >
                Login
              </button>
              <button
                className={`btn ${styling.btnRegister}`}
                label="Register"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <div className={`text-center`}>
              <button
                className={`btn ${styling.btnLeaderboards}`}
                label="Leaderboards"
                onClick={handleLeaderboard}
              >
                Leaderboards
              </button>
            </div>
          </div>
        </div>
        <style jsx global>{`
          html,
          body {
            padding: 0px;
            margin: 0px;
            font-family: Nunito;
          }
          h1 {
            font-weight: 800;
          }
        `}</style>
      </div>
    </>
  )
}

export default landing
