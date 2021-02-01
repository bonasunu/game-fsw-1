import React from 'react'
import styling from '../styles/lobipage.module.css'
import { Button, Container } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavbarComponent from '../src/components/NavbarComponent'
import withAuth from '../src/hocs/withAuth'

const lobipage = () => {
  const router = useRouter()

  return (
    <>
      <NavbarComponent />
      <Container>
        <div className={`center-body ${styling.centerBody} my-5`}>
          <Image
            src="/logo/primary-logo.png"
            width={500}
            height={200}
            className={`img-logo ${styling.imgLogo}`}
          />
          <h1 className={`font-size-h1 ${styling.fontsizeh1} mt-5`}>
            Paper Rock Scissors
          </h1>
          <div className="mt-5">
            <Button
              className={`start-button ${styling.startButton} mr-5 variant='warning' href='/games`}
              onClick={() => router.push('/games')}
            >
              Start
            </Button>
            <Button
              className={`start-button-history ${styling.startbuttonhistory}`}
              variant="light"
              href="/HistoryAfterGame"
            >
              History
            </Button>
          </div>
          <div className={`mt-10 ${styling.mt10}`}>
            <h5
              className={`text-exit ${styling.textExit} mt-5`}
              onClick={() => router.push(`/games/5`)}
            >
              Exit
            </h5>
          </div>
        </div>
      </Container>
    </>
  )
}

export default withAuth(lobipage)
